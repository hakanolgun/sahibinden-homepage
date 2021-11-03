import styles from "./ust.module.css";
export default function FooterUst() {
  return (
    <div className={styles.footerUstContainer}>
      <div className={`${styles.besliCete}`}>
        <h2>Kurumsal</h2>
        <a href="/">Hakkımızda</a>
        <a href="/">İnsan Kaynakları</a>
        <a href="/">Haberler</a>
        <a href="/">İletişim</a>
      </div>
      <div className={`${styles.besliCete}`}>
        <h2>Hizmetlerimiz</h2>
        <a href="/">Doping</a>
        <a href="/">S - Param Güvende</a>
        <a href="/">Güvenli e-Ticaret (GeT)</a>
        <a href="/">Toplu Ürün Girişi</a>
        <a href="/">Reklam</a>
        <a href="/">sahibinden Doğal Reklam</a>
        <a href="/">Mobil</a>
      </div>
      <div className={`${styles.besliCete}`}>
        <h2>Mağazalar</h2>
        <a href="/">Neden Mağaza</a>
        <a href="/">Mağaza Açmak İstiyorum</a>
      </div>
      <div className={`${styles.besliCete}`}>
        <h2>Gizlilik ve Kullanım</h2>
        <a href="/">Güvenli Alışverişin İpuçları</a>
        <a href="/">Sözleşmeler ve Kurallar</a>
        <a href="/">Üyelik Sözleşmesi</a>
        <a href="/">Kullanım Koşulları</a>
        <a href="/">Site Haritası</a>
        <a href="/">Kişisel Verilerin Korunması</a>
        <a href="/">Yardım ve İşlem Rehberi</a>
      </div>
      <div className={`${styles.besliCete} ${styles.besliCeteSon}`}>
        <h2>Bizi Takip Edin</h2>
        <a href="/">Facebook</a>
        <a href="/">Twitter</a>
        <a href="/">Linkedin</a>
        <a href="/">Instagram</a>
        <a href="/">Youtube</a>
      </div>
    </div>
  );
}
