Site Güvenlik Talimatları

1) TLS sertifikası
- Let's Encrypt önerilir.
- Sunucuda şu komutla otomatik kurulum (nginx):
  sudo apt update
  sudo apt install certbot python3-certbot-nginx
  sudo certbot --nginx -d powersg.com.tr -d www.powersg.com.tr

2) HTTP→HTTPS yönlendirme
- Apache: kök dizine `.htaccess` ekledik.
- Nginx: `nginx-https.conf` örneğini sağladık; sunucuya uygun konuma ekleyin ve `nginx -t` ile test edin.

3) Güvenlik başlıkları
- HSTS (`Strict-Transport-Security`), `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` ve `Content-Security-Policy` başlıkları önerilir.
- `.htaccess` ve `nginx-https.conf` örnekleri başlıkları içerir.

4) Otomatik yenileme
- Let's Encrypt için `certbot renew` otomatik çalışmalıdır (systemd timer veya cron ile).

5) Test ve doğrulama
- SSL Labs: https://www.ssllabs.com/ssltest/ ile domaininizi test edin.

6) Notlar
- `Content-Security-Policy` sitenizde kullandığınız üçüncü taraf script ve stil kaynaklarını içeriyorsa güncelleyin; çok kısıtlayıcı CSP sayfa işlevselliğini bozabilir.
