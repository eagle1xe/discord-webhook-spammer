const axios = require('axios');
const readline = require('readline');

let WEBHOOK_URLS = [];
try {
    // Webhook bağlantılarını dışarıdan güvenli şekilde çekiyoruz
    WEBHOOK_URLS = require('./webhooks.json');
} catch (error) {
    console.error('HATA: "webhooks.json" dosyası bulunamadı!');
    console.error('Lütfen "webhooks.example.json" dosyasının adını "webhooks.json" olarak değiştirip içine kendi Discord Webhook bağlantılarınızı ekleyin.');
    process.exit(1);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Gönderilecek mesajı girin (Boş bırakırsanız "EAGLE BABADIR" gönderilir): ', (input) => {
    const message = (input || "azrailin gazabı").toUpperCase();

    console.log(`"${message}" mesajı ${WEBHOOK_URLS.length} farklı kanala saniyede 2 kez gönderilmeye başlanıyor... Durdurmak için CTRL+C yapın.`);

    setInterval(async () => {
        try {
            const promises = WEBHOOK_URLS.map(url => axios.post(url, { content: message }));
            await Promise.all(promises);
            console.log(`[${new Date().toLocaleTimeString()}] ${WEBHOOK_URLS.length} kanala mesaj gönderildi: ${message}`);
        } catch (error) {
            console.error(`Hata oluştu: ${error.response ? error.response.status : error.message}`);
            if (error.response && error.response.status === 429) {
                console.log("Rate limit'e takıldı, bekleniyor...");
            }
        }
    }, 1000); // 500ms = Saniyede 2 kez

    rl.close(); // readline arayüzünü kapat, ama process devam etsin
});
