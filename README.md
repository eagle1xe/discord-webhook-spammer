# Discord Webhook Spammer 🚀

Belirlediğiniz Discord webhook adreslerine otomatik ve hızlı bir şekilde mesaj gönderen Node.js tabanlı ufak bir bot. Saniyede birden fazla kanala eşzamanlı şekilde veri yollayabilir.

## 🛠️ Kurulum

1. Projeyi bilgisayarınıza indirin veya klonlayın.
2. Bilgisayarınızda [Node.js](https://nodejs.org/) kurulu olduğundan emin olun.
3. Projenin bulunduğu klasörde bir terminal (CMD/PowerShell) açın.
4. Gerekli kütüphaneleri kurmak için şu komutu çalıştırın:
   ```bash
   npm install
   ```

## ⚙️ Ayarlar

Projedeki güvenlik sebebiyle webhook adreslerinizi kod içine gömmüyoruz. 
1. Ana dizinde bulunan `webhooks.example.json` dosyasının adını `webhooks.json` olarak değiştirin.
2. `webhooks.json` dosyasını not defteri veya bir kod editörüyle açarak içine mesaj göndermek istediğiniz Discord Webhook URL'lerini ekleyin.

```json
[
    "https://discord.com/api/webhooks/...",
    "https://discord.com/api/webhooks/..."
]
```

## 🚀 Kullanım

Terminal üzerinden botu başlatmak için şu komutu girin:

```bash
node spam.js
```

Açılan ekranda Discord sunucunuza iletilmesini istediğiniz mesajı girip `Enter` tuşuna basın. İşlemi durdurmak istediğinizde terminal ekranında `CTRL + C` yapmanız yeterlidir.

## ⚠️ Yasal Uyarı
Bu araç tamamen eğitim ve test amacıyla yazılmıştır. Kötüye kullanımından (Discord kullanım şartlarını ihlal eden saldırı veya spam davranışları) doğacak her türlü yasal sorumluluk kullanıcıya aittir.
