const axios = require('axios');
const readline = require('readline');

// ==========================================
// AYARLAR - WEBHOOK ADRESLERINIZI BURAYA EKLEYIN
// ==========================================
const WEBHOOK_URLS = [
    "https://discord.com/api/webhooks/BURAYA_WEBHOOK_LINKINI_YAZIN"
];
// ==========================================

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

async function startSpammer() {
    console.log(`\n🚀 Eagle Terminal Spammer Başlatılıyor...`);

    if (WEBHOOK_URLS.length === 0 || !WEBHOOK_URLS[0].startsWith('http')) {
        console.error('❌ HATA: Lütfen kodun içindeki WEBHOOK_URLS kısmına geçerli bir link ekleyin!');
        process.exit(1);
    }

    let userMessage = await askQuestion('❓ Ne yazılsın? (Boş bırakırsanız "EAGLE BABADIR" gönderilir): ');
    
    // Eğer cevap boşsa varsayılan mesajı ata
    if (!userMessage.trim()) {
        userMessage = "EAGLE BABADIR";
    }

    console.log(`\n📡 Hedef: ${WEBHOOK_URLS.length} Webhook`);
    console.log(`💬 Mesaj: "${userMessage}"`);
    console.log(`🛑 Durdurmak için CTRL+C yapın.\n`);

    const sendBatch = async () => {
        const promises = WEBHOOK_URLS.map(async (url) => {
            try {
                await axios.post(url, { content: userMessage });
                console.log(`[${new Date().toLocaleTimeString()}] ✅ Gönderildi: ${userMessage}`);
            } catch (error) {
                if (error.response && error.response.status === 429) {
                    const retryAfter = (error.response.headers['retry-after'] || 1) * 1000;
                    console.warn(`[!] Hız Sınırı (429): ${retryAfter}ms bekleniyor...`);
                } else {
                    console.error(`[X] Hata: ${error.message}`);
                }
            }
        });
        await Promise.all(promises);
    };

    // Sonsuz döngü
    while (true) {
        await sendBatch();
        // Rastgele 100ms - 500ms arası bekleme
        const delay = Math.floor(Math.random() * 400) + 100;
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

startSpammer();
