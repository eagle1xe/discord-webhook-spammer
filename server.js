const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const open = require('open');

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

let isSpamming = false;
let config = {
    webhooks: [],
    messages: ["EAGLE BABADIR"]
};
let logs = [];

// Mevcut dosyaları oku
try {
    if (fs.existsSync('./webhooks.json')) config.webhooks = require('./webhooks.json');
    if (fs.existsSync('./mesajlar.json')) config.messages = require('./mesajlar.json');
} catch (e) { }

app.get('/api/config', (req, res) => res.json(config));

app.post('/api/start', (req, res) => {
    config = req.body;
    isSpamming = true;
    startSpamLoop();
    res.sendStatus(200);
});

app.post('/api/stop', (req, res) => {
    isSpamming = false;
    res.sendStatus(200);
});

app.get('/api/logs', (req, res) => {
    res.json({ logs: [...logs] });
    logs = [];
});

async function startSpamLoop() {
    let messageIndex = 0;
    while (isSpamming) {
        const msg = config.messages[messageIndex];
        messageIndex = (messageIndex + 1) % config.messages.length;

        const promises = config.webhooks.map(url =>
            axios.post(url, { content: msg })
                .then(() => {
                    if (logs.length < 50) logs.push(`✅ Gönderildi: ${msg}`);
                })
                .catch(err => {
                    if (err.response && err.response.status === 429) {
                        logs.push(`⚠️ Rate Limit! Bekleniyor...`);
                    } else {
                        logs.push(`❌ Hata: ${err.message}`);
                    }
                })
        );

        await Promise.all(promises);
        await new Promise(r => setTimeout(r, Math.floor(Math.random() * 400) + 100));
    }
}

const PORT = 3000;
app.listen(PORT, async () => {
    console.log(`\n🚀 Eagle Spammer Dashboard yayında!`);
    console.log(`🔗 http://localhost:${PORT}`);
    console.log(`\n(Not: Terminali kapatırsanız dashboard da kapanır.)\n`);
    await open(`http://localhost:${PORT}`);
});
