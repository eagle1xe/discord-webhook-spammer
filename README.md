# Discord Webhook Spammer (CLI Version) 🚀

Belirlediğiniz Discord webhook adreslerine otomatik ve hızlı bir şekilde mesaj gönderen Node.js tabanlı sade bir araç.

## 🛠️ Kurulum

1. Projeyi bilgisayarınıza indirin.
2. Bilgisayarınızda [Node.js](https://nodejs.org/) kurulu olduğundan emin olun.
3. Projenin bulunduğu klasörde terminal açıp bağımlılıkları kurun:
   ```bash
   npm install
   ```

## ⚙️ Ayarlar

`spam.js` dosyasını bir metin düzenleyici ile açın ve en üstteki `WEBHOOK_URLS` kısmına kendi linklerinizi ekleyin:

```javascript
const WEBHOOK_URLS = [
    "https://discord.com/api/webhooks/..."
];
```

## 🚀 Kullanım

Terminalde şu komutu çalıştırın:
```bash
node spam.js
```

Program size **"Ne yazılsın?"** diye soracaktır:
- İstediğiniz bir mesajı yazıp Enter'a basabilirsiniz.
- Sadece Enter'a basarsanız otomatik olarak **"EAGLE BABADIR"** mesajı gönderilir.

## ⚠️ Yasal Uyarı
Bu araç tamamen eğitim amacı taşır. Kötüye kullanım kullanıcı sorumluluğundadır.
