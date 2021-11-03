import styles from "./leftsidebar.module.css";

export default function LeftSideBar() {
  return (
    <aside className={styles.aside}>
      <nav>
        <ul className={styles.baslangicUl}>
          <li className={styles.liAcilAcil}>
            <a href="/">Acil Acil</a>
          </li>
          <li className={styles.liFiyatiDusen}>
            <a href="/">Fiyatı Düşenler</a>
          </li>
          <li className={styles.son48}>
            <a href="/">Son 48 Saat</a>
            <span> / </span>
            <a href="/">1 Hafta</a>
            <span> / </span>
            <a href="/">1 Ay</a>
          </li>
        </ul>
        <ul className={styles.baslangicUl}>
          <li className={styles.oto360}>
            <a href="/">
              Oto 360 <span className={styles.newCategory}>yeni</span>
            </a>
          </li>
          <li className={styles.emlak360}>
            <a href="/">
              Emlak 360 <span className={styles.newCategory}>yeni</span>
            </a>
          </li>
        </ul>
        <ul>
          <li className={styles.emlakLi}>
            <a href="/">Emlak</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Konut</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">İş Yeri</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Arsa</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Projeler</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Bina</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Devre Mülk</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Turistik Tesis</a>
            <em> (907.669)</em>
          </li>
        </ul>
        <ul>
          <li className={styles.vasitaLi}>
            <a href="/">Vasıta</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Otomobil</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Arazi, SUV & Pickup</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Motosiklet</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Minivan & Panelvan</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Ticari Araçlar</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Kiralık Araçlar</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Deniz Araçları</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Hasarlı Araçlar</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/" className={styles.tumunuGoster}>
              Tümünü Göster
            </a>
          </li>
        </ul>
        <ul>
          <li className={styles.yedekParcaLi}>
            <a href="/">Yedek Parça, Aksesuar, Donanım & Tuning</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Otomotiv Ekipmanları</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Motosiklet Ekipmanları</a>
            <em> (907.669)</em>
          </li>
          <li>
            <a href="/">Deniz Aracı Ekipmanları</a>
            <em> (907.669)</em>
          </li>
        </ul>
        <ul>
          <li className={styles.ikinciElLi}>
            <a href="/">
              İkinci El ve <br /> Sıfır Alışveriş
            </a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Bilgisayar</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Cep Telefonu</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Fotoğraf & Kamera</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Ev Dekorasyon</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Ev Elektroniği</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Elektrikli Ev Aletleri</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Giyim & Aksesuar</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Saat</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Anne & Bebek</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Kişisel Bakım & Kozmetik</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Hobi & Oyuncak</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Oyun & Konsol</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Kitap, Dergi & Film</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Müzik</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Spor</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Takı, Mücevher & Altın</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Koleksiyon</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Antika</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Bahçe & Yapı Market</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Teknik Elektronik</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Ofis & Kırtasiye</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Yiyecek & İçecek</a>
            <em> (48.569)</em>
          </li>
          <li>
            <a href="/">Diğer Herşey</a>
            <em> (48.569)</em>
          </li>
        </ul>
        <ul>
          <li className={styles.isMakineleriLi}>
            <a href="/">İş Makineleri & Sanayi</a>
            <em> (27.196)</em>
          </li>
          <li>
            <a href="/">İş Makineleri</a>
            <em> (27.196)</em>
          </li>
          <li>
            <a href="/">Tarım Makineleri</a>
            <em> (27.196)</em>
          </li>
          <li>
            <a href="/">Sanayi</a>
            <em> (27.196)</em>
          </li>
          <li>
            <a href="/">Elektrik & Enerji</a>
            <em> (27.196)</em>
          </li>
        </ul>
        <ul>
          <li className={styles.ustaLarLi}>
            <a href="/">Ustalar ve Hizmetler</a>
            <em> (27.196)</em>
          </li>
          <li>
            <a href="/">Ev Tadilat & Dekorasyon</a>
          </li>
          <li>
            <a href="/">Nakliye</a>
          </li>
          <li>
            <a href="/">Araç Servis & Bakım</a>
          </li>
          <li>
            <a href="/" className={styles.tumunuGoster}>
              Tümünü Göster
            </a>
          </li>
        </ul>
        <ul>
          <li className={styles.özelDersLi}>
            <a href="/">Özel Ders Verenler</a>
            <em> (4.841)</em>
          </li>
          <li>
            <a href="/">Lise & Üniversite</a>
            <em> (4.841)</em>
          </li>
          <li>
            <a href="/">İlkokul & Ortaokul</a>
            <em> (4.841)</em>
          </li>
          <li>
            <a href="/">Yabancı Dil</a>
            <em> (4.841)</em>
          </li>
          <li>
            <a href="/" className={styles.tumunuGoster}>
              Tümünü Göster
            </a>
          </li>
        </ul>
        <ul>
          <li className={styles.isİlanLi}>
            <a href="/">İş İlanları</a>
            <em> (2.964)</em>
          </li>
          <li>
            <a href="/">Avukatlık & Hukuki Danışmanlı</a>
            <em> (12)</em>
          </li>
          <li>
            <a href="/">Eğitim</a>
            <em> (2.964)</em>
          </li>
          <li>
            <a href="/">Eğlence ve Aktiviteler</a>
            <em> (2.964)</em>
          </li>
          <li>
            <a href="/">Güzellik ve Bakım</a>
            <em> (2.964)</em>
          </li>
          <li>
            <a href="/">IT ve Yazılım Geliştirme</a>
            <em> (2.964)</em>
          </li>
          <li>
            <a href="/">İnsan Kaynakları</a>
            <em> (2.964)</em>
          </li>
          <li>
            <a href="/" className={styles.tumunuGoster}>
              Tümünü Göster
            </a>
          </li>
        </ul>
        <ul>
          <li className={styles.yardımcıArayanLi}>
            <a href="/">Yardımcı Arayanlar</a>
            <em> (1.196)</em>
          </li>
          <li>
            <a href="/">Bebek & Çocuk Bakıcısı</a>
            <em> (1.196)</em>
          </li>
          <li>
            <a href="/">Yaşlı & Hasta Bakıcısı</a>
            <em> (1.196)</em>
          </li>
          <li>
            <a href="/">Temizlikçi & Ev İşlerine Yardımcı</a>
            <em> (1.196)</em>
          </li>
        </ul>
        <ul className={styles.hayvanlarUl}>
          <li className={styles.hayvanlarLi}>
            <a href="/">Hayvanlar Alemi</a>
            <em> (2.965)</em>
          </li>
          <li>
            <a href="/">Evcil Hayvanlar</a>
            <em> (2.965)</em>
          </li>
          <li>
            <a href="/">Akvaryum Balıkları</a>
            <em> (2.965)</em>
          </li>
          <li>
            <a href="/">Aksesuarlar</a>
            <em> (2.965)</em>
          </li>
          <li>
            <a href="/">Bakım Ürünleri</a>
            <em> (2.965)</em>
          </li>
          <li>
            <a href="/">Yem & Mama</a>
            <em> (2.965)</em>
          </li>
          <li>
            <a href="/">Kümes Hayvanları</a>
            <em> (2.965)</em>
          </li>
          <li>
            <a href="/">Büyükbaş Hayvanlar</a>
            <em> (2.965)</em>
          </li>
          <li>
            <a href="/">Küçükbaş Hayvanlar</a>
            <em> (2.965)</em>
          </li>
          <li>
            <a href="/" className={styles.tumunuGoster}>
              Tümünü Göster
            </a>
          </li>
        </ul>
        <h3 className={styles.sectikH3}>Seçtiklerimiz</h3>
        <ul className={styles.bitisUl}>
          <li className={styles.hikayePaylasLi}>
            <a href="/">Hikayeni Paylaş</a>
          </li>
          <li className={styles.efsaneLi}>
            <a href="/">Efsane İlanlar</a>
          </li>
          <li className={styles.ilgincLi}>
            <a href="/">İlginç İlanlar</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
