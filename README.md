# Hızlı Okuma (RSVP)

Tek dosyalık, kurulum gerektirmeyen bir hızlı okuma uygulaması. Kelimeleri ekranın ortasında tek tek veya gruplar halinde göstererek (RSVP yöntemi) gözün satır boyunca hareket etme ihtiyacını ortadan kaldırır.

HTML dosyasını indirip çift tıklaman yeterli — sunucu, kurulum veya internet bağlantısı gerekmez (PDF/DOCX içe aktarma için CDN'den iki kütüphane yüklenir).

## Özellikler

**Okuma**
- Metni yapıştırma, dosya sürükle-bırak, dosya seçme ve panodan aktarma
- Desteklenen biçimler: `.txt`, `.md`, `.pdf`, `.docx`
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

En güncel sürüm en yüksek numaralı dosyadır.

## Teknik notlar

- Derleme adımı, paket yöneticisi veya bağımlılık kurulumu yok — tek bir HTML dosyası
- PDF okuma [pdf.js](https://mozilla.github.io/pdf.js/), DOCX okuma [mammoth.js](https://github.com/mwilliamson/mammoth.js) ile yapılır (cdnjs üzerinden)
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
