import styles from "./contentarea.module.css";
import otomobil from "../../../assets/otomobil.jpg";
import Projeler from "./projeler/Projeler";
import S360 from "./s360/s360";

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
      <S360 />
      <Projeler />
    </div>
  );
}
