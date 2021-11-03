import styles from "./contentarea.module.css";
import otomobil from "../../../assets/otomobil.jpg";

export default function ContentArea() {
  const arr = [];
  for (let i = 0; i < 56; i++) {
    arr.push("x");
  }

  return (
    <div className={styles.contentAreaContainer}>
      <div className={styles.contentAreaHeaderContainer}>
        <p>Anasayfa Vitrini</p>
        <a href="/">Tüm vitrin ilanlarını göster</a>
      </div>
      <div className={styles.contentAreaProductContainer}>
        {arr.map((item, i) => (
          <a className={styles.productA} href="/" key={i}>
            <img className={styles.productImg} src={otomobil} alt="product" />
            <p>Sahibinden Sat..</p>
          </a>
        ))}
      </div>
      <div className={styles.contentAreaOto360Container}>
        <p>Oto360</p>
      </div>
      <div className={styles.oto360AltListeDiv}>
        <ul>
          <a className={`${styles.AracDegerlemeA} ${styles.oto360A}`} href="/">
            Araç Değerleme
          </a>
        </ul>
        <ul>
          <a
            className={`${styles.AracKarsilastirmaA} ${styles.oto360A}`}
            href="/"
          >
            Araç Karşılaştırma
          </a>
        </ul>
        <ul>
          <a className={`${styles.AracHasarA} ${styles.oto360A}`} href="/">
            Araç Hasar Sorgulama
          </a>
        </ul>
        <ul>
          <a className={`${styles.OtoEkspertizA} ${styles.oto360A}`} href="/">
            Oto Ekspertiz
          </a>
        </ul>
        <ul>
          <a className={`${styles.KrediTekA} ${styles.oto360A}`} href="/">
            Kredi Teklifleri
          </a>
        </ul>
        <ul>
          <a className={`${styles.SifirAracA} ${styles.oto360A}`} href="/">
            Sıfır Araç Dünyası
          </a>
        </ul>
        <ul>
          <a className={`${styles.AracAlimA} ${styles.oto360A}`} href="/">
            Araç Alım Rehberi
          </a>
        </ul>
        <ul>
          <a className={`${styles.AracSatisA} ${styles.oto360A}`} href="/">
            Araç Satış Rehberi
          </a>
        </ul>
      </div>
      <div className={styles.contentAreaEmlak360Container}>
        <p>Emlak360</p>
      </div>
      <div className={styles.oto360AltListeDiv}>
        <ul>
          <a className={`${styles.AracDegerlemeA} ${styles.oto360A}`} href="/">
            Emlak Endeksi
          </a>
        </ul>
        <ul>
          <a
            className={`${styles.AracKarsilastirmaA} ${styles.oto360A}`}
            href="/"
          >
            Gayrimenkul Ekspertiz
          </a>
        </ul>
        <ul>
          <a className={`${styles.AracHasarA} ${styles.oto360A}`} href="/">
            Kredi Teklifleri
          </a>
        </ul>
        <ul>
          <a className={`${styles.OtoEkspertizA} ${styles.oto360A}`} href="/">
            Emlak Alım Rehberi
          </a>
        </ul>
        <ul>
          <a className={`${styles.KrediTekA} ${styles.oto360A}`} href="/">
            Emlak Kiralama Rehberi
          </a>
        </ul>
        <ul>
          <a className={`${styles.SifirAracA} ${styles.oto360A}`} href="/">
            Emlak Satış Rehberi
          </a>
        </ul>
      </div>
    </div>
  );
}
