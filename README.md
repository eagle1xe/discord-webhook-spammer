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

### 1. Webhook Adresleri
- `webhooks.example.json` dosyasını `webhooks.json` olarak kopyalayın ve içine Discord Webhook URL'lerinizi ekleyin.

### 2. Mesaj Listesi (Yeni!)
- `mesajlar.json` dosyasına dilediğiniz kadar farklı mesaj ekleyebilirsiniz. Bot, bu mesajları sırayla göndererek spam filtrelerini aşmanıza yardımcı olur.
- Eğer bu dosya yoksa bot varsayılan mesajı kullanır.

```json
[
    "Mesaj 1",
    "Mesaj 2",
    "☠️☠️☠️"
]
```

## 🚀 Özellikler
- **Akıllı Rate Limit:** Discord'un hız sınırlarını (429) algılar ve otomatik bekler.
- **Mesaj Rotasyonu:** Farklı mesajları sırayla göndererek tespit edilmeyi zorlaştırır.
- **Async & Hızlı:** Node.js'in asenkron yapısı sayesinde maksimum verimlilik sağlar.

## 🚀 Kullanım

### 🖥️ 1. Web Dashboard (Önerilen - Premium Deneyim)
Terminalde şu komutu çalıştırın:
```bash
npm start
```
Bu komut yerel bir sunucu başlatacak ve tarayıcınızda otomatik olarak **Eagle Spammer Dashboard**'u açacaktır. Arayüz üzerinden webhook ve mesajlarınızı kolayca yönetebilirsiniz.

### ⌨️ 2. CLI Modu (Klasik)
Sadece terminal üzerinden çalıştırmak isterseniz:
```bash
npm run cli
```

## ⚠️ Yasal Uyarı
Bu araç tamamen eğitim ve test amacıyla yazılmıştır. Kötüye kullanımından (Discord kullanım şartlarını ihlal eden saldırı veya spam davranışları) doğacak her türlü yasal sorumluluk kullanıcıya aittir.
