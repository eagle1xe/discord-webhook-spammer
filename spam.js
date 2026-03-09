const axios = require('axios');
const readline = require('readline');

let WEBHOOK_URLS = [];
let MESSAGES = ["EAGLE BABADIR"]; // Varsayılan mesaj

try {
    WEBHOOK_URLS = require('./webhooks.json');
} catch (error) {
    console.error('HATA: "webhooks.json" bulunamadı!');
    process.exit(1);
}

try {
    MESSAGES = require('./mesajlar.json');
} catch (error) {
    console.log('BİLGİ: "mesajlar.json" bulunamadı, varsayılan mesaj kullanılacak.');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`🚀 Discord Spammer Başlatılıyor...`);
console.log(`📡 Toplam Webhook: ${WEBHOOK_URLS.length}`);
console.log(`💬 Toplam Mesaj Varyasyonu: ${MESSAGES.length}\n`);

let messageIndex = 0;
let isSpamming = false;

const sendBatch = async () => {
    const currentMessage = MESSAGES[messageIndex];
    messageIndex = (messageIndex + 1) % MESSAGES.length;

    const promises = WEBHOOK_URLS.map(async (url) => {
        try {
            await axios.post(url, { content: currentMessage });
            console.log(`[${new Date().toLocaleTimeString()}] ✅ Gönderildi: ${currentMessage}`);
        } catch (error) {
            if (error.response && error.response.status === 429) {
                const retryAfter = (error.response.headers['retry-after'] || 1) * 1000;
                console.warn(`[!] Hız Sınırı (429): ${retryAfter}ms bekleniyor...`);
                // Belirli webhook için kısa süreli duraklatma (opsiyonel geliştirilebilir)
            } else {
                console.error(`[X] Hata: ${error.message}`);
            }
        }
    });

    await Promise.all(promises);
};

console.log("Durdurmak için CTRL+C yapın.");
isSpamming = true;

const spamLoop = async () => {
    while (isSpamming) {
        await sendBatch();
        // Rastgele ufak gecikme (Spam tespitini zorlaştırmak için 100ms - 500ms arası)
        const delay = Math.floor(Math.random() * 400) + 100;
        await new Promise(resolve => setTimeout(resolve, delay));
    }
};

spamLoop();
