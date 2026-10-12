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

## Sürümler

Her yenilik, öncekinin üzerine yazılmadan yeni bir sürüm dosyası olarak eklenir.

| Sürüm | Eklenenler |
|---|---|
| `speedreader-v1.html` | Temel RSVP okuyucu, hız ve kelime grubu ayarı |
| `speedreader-v2.html` | Çok kelimeli gruplarda odak vurgusu, dosya içe aktarma, göz egzersizleri sekmesi |
| `speedreader-v3.html` | Takip görünümü, oturum hafızası, PDF sayfa takibi, yer imleri, akıllı tempo, temalar |
| `speedreader-v4.html` | Kitaplık (IndexedDB), istatistikler, anlama kontrolü, sayfa gezinme ve hizalama düzeltmeleri |
| `speedreader-v5.html` | Tam ekran ayar çubuğu, sıçrama modlu nokta takibi, ölçeklenebilir egzersiz alanı, önizleme modu, bilimsel temel sekmesi |
| `speedreader-v6.html` | EPUB desteği, cihazlar arası yedek al/yükle, telefon düzeni, taşan kelimelerde otomatik yazı küçültme |
| `speedreader-v7.html` | iOS'ta da çalışan tam ekran modu, CDN kütüphaneleri için bütünlük doğrulaması (SRI) |

En güncel sürüm en yüksek numaralı dosyadır. `index.html` otomatik olarak en günceline yönlendirir.

## Telefonda kullanım

Uygulama telefon tarayıcısında da çalışır; düzen dar ekrana uyarlanmıştır ve ekrana sığmayan kelime grupları otomatik küçülür.

**Önemli:** Kaldığın yer, kitaplık ve ayarlar tarayıcının kendi deposunda (localStorage / IndexedDB) tutulur. Bu depo **cihaza ve tarayıcıya özeldir**; sunucu veya hesap olmadığı için cihazlar arasında kendiliğinden eşitlenmez.

Bilgisayarda okuduğun kitaba telefondan devam etmek için:

1. Bilgisayarda **Kitaplık → Yedek al** (bir `.json` dosyası iner)
2. Dosyayı telefona gönder (WhatsApp, e-posta, bulut — nasıl kolaysa)
3. Telefonda uygulamayı aç → **Kitaplık → Yedek yükle** → dosyayı seç

Kitap metni, kaldığın yer, yer imleri ve ayarlar birlikte taşınır; kitap kaldığın yerden açılır. Aynı kitabı iki cihazda da okuduysan, okuma konumu en son ilerleyen cihazınki geçerli olur.

Tam ekran modu v7'den itibaren iOS'ta da çalışır: iOS Safari (ve onun motorunu kullanan iOS Chrome) `requestFullscreen` API'sini desteklemediği için uygulama otomatik olarak CSS tabanlı bir tam ekran moduna geçer. Çıkmak için aynı düğmeye bas ya da `Esc`.

## Güvenlik ve gizlilik

- **Veri cihazdan çıkmaz.** Sunucu, hesap, analitik veya takip kodu yok. Aktardığın kitaplar ve okuma konumun yalnızca kendi tarayıcının deposunda (localStorage / IndexedDB) tutulur; hiçbir yere gönderilmez.
- **Dosyalar yerelde işlenir.** PDF, EPUB ve DOCX dosyaları tarayıcının içinde ayrıştırılır, yüklenmez.
- **CDN bütünlük doğrulaması (SRI).** Uygulamanın kullandığı üç kütüphane cdnjs'ten gelir. v7'den itibaren her biri `integrity` parmak iziyle sabitlenmiştir: CDN'den gelen dosya birebir eşleşmezse tarayıcı çalıştırmaz. Bu, CDN'in ele geçirilmesi durumunda kod enjeksiyonunu engeller.
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

## Not

Okuma materyalleri (PDF kitaplar vb.) telifli oldukları için bu depoya dahil edilmemiştir.
