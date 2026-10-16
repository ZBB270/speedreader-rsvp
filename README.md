# Hızlı Okuma (RSVP)

Tek dosyalık, kurulum gerektirmeyen bir hızlı okuma uygulaması. Kelimeleri ekranın ortasında tek tek veya gruplar halinde göstererek (RSVP yöntemi) gözün satır boyunca hareket etme ihtiyacını ortadan kaldırır.

HTML dosyasını indirip çift tıklaman yeterli — sunucu, kurulum veya internet bağlantısı gerekmez (PDF/DOCX içe aktarma için CDN'den iki kütüphane yüklenir).

## Özellikler

**Okuma**
- Metni yapıştırma, dosya sürükle-bırak, dosya seçme ve panodan aktarma
- Desteklenen biçimler: `.txt`, `.md`, `.pdf`, `.docx`, `.epub`
- Hız (60–1200 wpm), kelime grubu (1–6), yazı boyutu ayarları
- Odak harfi vurgusu ve üç hizalama modu: ortala / odak harfini sabitle / soldan sabitle
- Akıllı tempo: uzun kelimelerde ve noktalama sonrasında otomatik duraklama
- Gösterim alanının dikey-yatay konumu ve yüksekliği ayarlanabilir
- Tam ekran modu, tam ekranda da erişilebilen hızlı ayar çubuğu
- Koyu / açık / sepya tema

**Uzun kitaplar için**
- Takip görünümü: metin içinde kaldığın yer işaretlenir, kendiliğinden kayar, kelimeye tıklayınca oradan devam eder
- PDF sayfa takibi (`Sayfa 12 / 340`)
- Yer imleri ve ilerleme çubuğunda işaretleri
- Kitaplık: aktarılan kitaplar IndexedDB'de saklanır, yüzde ilerlemeleriyle listelenir
- Oturum hafızası: tarayıcı kapansa da kaldığın yerden devam eder
- Önizleme modu: her paragrafın ilk cümlesinden metnin haritasını çıkarır
- Yedek al / yükle: kitapları, konumları, yer imlerini ve ayarları tek dosyada taşır

**Ölçme**
- Anlama kontrolü: okunan bölümden boşluk doldurma soruları üretir
- Etkili okuma hızı hesabı (ham hız × anlama oranı)
- Günlük istatistikler, hedef takibi ve 7 günlük grafik

**Göz egzersizleri**
- Nokta takibi (düz takip ve sıçrama modları, 5 desen)
- Şimşek kelime (takistoskop)
- Schulte tablosu (3x3 – 6x6)
- Genişleyen odak
- Blok görme: odak noktasının çevresinde kısa süre beliren rakamları hatırlama — yatay, ikili blok ve dikey yerleşimlerle; seviye (rakam sayısı) ve kademe (merkeze uzaklık) ayrı zorluk eksenleri, otomatik modda en kolaydan başlayıp kendiliğinden açılır, puan ve rekor takibi. Cevap için yerleşik tuş takımı kullanılır (telefon klavyesi açılıp ekranı kaydırmasın diye)
- Çalışma alanı boyutu ayarlanabilir, egzersizler ayrı ayrı tam ekran yapılabilir

**Bilimsel temel sekmesi**
Uygulamadaki yöntemlerin literatürde nerede durduğunu kaynaklarıyla birlikte dürüstçe anlatır — neyin desteklendiğini ve neyin desteklenmediğini.

## Klavye kısayolları

| Tuş | İşlev |
|---|---|
| `Boşluk` | Başlat / durdur |
| `←` `→` | 10 kelime geri / ileri |
| `↑` `↓` | Hızı artır / azalt |
| `+` `−` | Yazı boyutu |
| `R` | Başa sar |
| `B` | Yer imi ekle |
| `F` | Tam ekran |

Telefonda okuma alanında parmak hareketleri: **dokun** başlat/durdur · **yukarı/aşağı kaydır** hızı değiştir · **sağa/sola kaydır** 10 kelime ileri/geri.

## Sürümler

Uygulama tek dosyadır: `index.html`. Adrese giren herkes her zaman en güncel sürüme ulaşır.

Sürüm geçmişi git'in kendisinde tutulur — her commit bir sürümdür, istenen ana geri dönülebilir. Önemli adımlar etiketlenmiştir:

```bash
git tag                 # sürüm listesi
git show v6.0 --stat    # o sürümde neler değişmiş
git checkout v6.0       # o sürümün tam haline geri dön
git switch -            # güncel sürüme geri çık
```

Geliştirme boyunca eklenenler: temel RSVP okuyucu ve hız/grup ayarları → çok kelimeli odak vurgusu, dosya içe aktarma, göz egzersizleri → takip görünümü, oturum hafızası, sayfa takibi, yer imleri, temalar → kitaplık, istatistikler, anlama kontrolü → tam ekran ayar çubuğu, sıçrama modlu egzersiz, önizleme modu, bilimsel temel → EPUB, cihazlar arası yedekleme, telefon düzeni → iOS tam ekran, güvenlik sertleştirmesi → dış bağımlılığın kaldırılması, çevrimdışı çalışma, kurulabilir uygulama.

> Not: Proje başlarken her sürüm ayrı bir dosyaydı (`speedreader-v1.html` … `v8`). Git'e geçildikten sonra bu gereksiz hale geldiği için dosyalar kaldırıldı; hepsi git geçmişinde duruyor.

## Telefonda kullanım

Uygulama telefon tarayıcısında da çalışır; düzen dar ekrana uyarlanmıştır ve ekrana sığmayan kelime grupları otomatik küçülür.

**Önemli:** Kaldığın yer, kitaplık ve ayarlar tarayıcının kendi deposunda (localStorage / IndexedDB) tutulur. Bu depo **cihaza ve tarayıcıya özeldir**; sunucu veya hesap olmadığı için cihazlar arasında kendiliğinden eşitlenmez.

Bilgisayarda okuduğun kitaba telefondan devam etmek için:

1. Bilgisayarda **Kitaplık → Yedek al** (bir `.json` dosyası iner)
2. Dosyayı telefona gönder (WhatsApp, e-posta, bulut — nasıl kolaysa)
3. Telefonda uygulamayı aç → **Kitaplık → Yedek yükle** → dosyayı seç

Kitap metni, kaldığın yer, yer imleri ve ayarlar birlikte taşınır; kitap kaldığın yerden açılır. Aynı kitabı iki cihazda da okuduysan, okuma konumu en son ilerleyen cihazınki geçerli olur.

Tam ekran modu v7'den itibaren iOS'ta da çalışır: iOS Safari (ve onun motorunu kullanan iOS Chrome) `requestFullscreen` API'sini desteklemediği için uygulama otomatik olarak CSS tabanlı bir tam ekran moduna geçer. Çıkmak için aynı düğmeye bas ya da `Esc`.

### Telefona kurma ve çevrimdışı okuma

v8'den itibaren uygulama cihaza kurulabilir ve internetsiz çalışır:

- **Android / Chrome:** Adresi aç → menü → *Uygulamayı yükle* (ya da *Ana ekrana ekle*)
- **iPhone / Safari:** Adresi aç → paylaş düğmesi → *Ana Ekrana Ekle*

Kurduktan sonra uygulama kendi simgesiyle, tarayıcı çubukları olmadan açılır. İlk açılışta dosyalar cihaza kaydedilir; sonrasında internet olmadan da çalışır — metroda veya uçakta okuyabilirsin. Kitapların zaten cihazda saklandığı için çevrimdışıyken de kaldığın yerden devam edersin.

## Güvenlik ve gizlilik

- **Veri cihazdan çıkmaz.** Sunucu, hesap, analitik veya takip kodu yok. Aktardığın kitaplar ve okuma konumun yalnızca kendi tarayıcının deposunda (localStorage / IndexedDB) tutulur; hiçbir yere gönderilmez.
- **Dosyalar yerelde işlenir.** PDF, EPUB ve DOCX dosyaları tarayıcının içinde ayrıştırılır, yüklenmez.
- **Dış sunucuya hiç bağlanmaz.** v8'den itibaren kütüphaneler `lib/` klasöründen yüklenir; uygulama çalışırken hiçbir üçüncü taraf isteği yapılmaz, IP adresin kimseye gitmez. (Dosyalar cdnjs'ten indirilip SHA-512 imzalarıyla doğrulanmıştır; v7 bunları CDN'den `integrity` parmak iziyle çekiyordu.)
- **İçerik güvenlik politikası (CSP).** Sayfa, kendi kaynakları dışında hiçbir betik veya kaynak yükleyemez; eklenti/nesne gömme kapalı. GitHub Pages sunucu başlığı eklemeye izin vermediği için politika sayfanın içine gömülmüştür.
- **Metin güvenli şekilde işlenir.** İçe aktarılan belgelerdeki HTML kaçırılır (escape), EPUB içindeki `script` ve `style` etiketleri ayrıştırma sırasında silinir; belge içeriği hiçbir zaman çalıştırılabilir kod olarak sayfaya yazılmaz.
- **Depo herkese açıktır**, ancak okuma verilerin depoda değildir — yalnızca uygulama kodu yayınlanmıştır.

## Teknik notlar

- Derleme adımı, paket yöneticisi veya bağımlılık kurulumu yok — tek bir HTML dosyası
- PDF okuma [pdf.js](https://mozilla.github.io/pdf.js/), DOCX okuma [mammoth.js](https://github.com/mwilliamson/mammoth.js), EPUB açma [JSZip](https://stuk.github.io/jszip/) ile yapılır (cdnjs üzerinden)
- Ayarlar ve okuma konumu `localStorage`, kitap metinleri `IndexedDB` içinde saklanır — veriler yalnızca kendi tarayıcında kalır, hiçbir yere gönderilmez
- Oturum hafızasının çalışması için dosyanın tarayıcıda açılması gerekir; depoya erişilemeyen ortamlarda uygulama bunu kendisi bildirir

## Kaynaklar

Göz egzersizleri, aşağıdaki platformlardaki genel egzersiz kategorilerinden esinlenerek özgün olarak yazılmıştır; içerik veya kod kopyalanmamıştır:

- [m5bilisim.com — Hızlı Okuma Egzersizleri](https://www.m5bilisim.com/tr/hizli-okuma/)
- [hizliokuma.org — Göz Açısı Genişletme Uygulaması](https://www.hizliokuma.org/mho/)

Bilimsel temel sekmesindeki değerlendirmeler şu kaynaklara dayanır:

- Rayner, Schotter, Masson, Potter & Treiman (2016), [*So Much to Read, So Little Time*](https://www.psychologicalscience.org/publications/speed_reading.html), Psychological Science in the Public Interest
- Schotter, Tran & Rayner (2014), [hızlı okuma uygulamaları ve geri dönüş engeli](https://today.ucsd.edu/story/dont_believe_what_you_read_only_once_speed_reading_apps_may_impair_reading)
- [National Eye Institute — Convergence Insufficiency Treatment Trial](https://www.nei.nih.gov/research-and-training/research-news/more-effective-treatment-identified-common-childhood-vision-disorder)
- [Cochrane derlemesi — yakınsama yetmezliği tedavileri](https://www.cochrane.org/evidence/CD006768_how-do-different-treatments-vision-disorder-convergence-insufficiency-compare-effectiveness)

## Lisans

Bu uygulama [MIT lisansı](LICENSE) ile yayınlanmıştır: kullanabilir, değiştirebilir, dağıtabilirsin; tek şart telif notunun korunması.

`lib/` klasöründeki üçüncü taraf kütüphaneler kendi lisanslarına tabidir (pdf.js: Apache-2.0, mammoth.js: BSD-2-Clause, JSZip: MIT/GPLv3).

## Not

Okuma materyalleri (PDF kitaplar vb.) telifli oldukları için bu depoya dahil edilmemiştir.
