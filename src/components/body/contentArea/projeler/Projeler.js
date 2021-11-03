import styles from "./projeler.module.css";
import proje01 from "../../../../assets/proje01.jpg";
import proje02 from "../../../../assets/proje02.jpg";

export default function Projeler() {
  return (
    <div className={styles.projelerContainer}>
      <div className={styles.projelerHeaderContainer}>
        <p>Projeler</p>
        <a href="/">Tüm vitrin ilanlarını göster</a>
      </div>

      <div className={styles.projelerFlexContainer}>
        <div>
          <img src={proje01} alt="proje" width={411} height={174} />
          <h4>Büyükyalı (İstanbul / Zeytinburnu)</h4>
          <p>
            {" "}
            <span>m2:</span> 103 m2 - 208 m2
          </p>
          <p>
            <span>Teslim Tarihi:</span> HemenTeslim
          </p>
        </div>
        <div>
          <img src={proje02} alt="proje" width={411} height={174} />
          <h4>Passa Nova (İzmir / Bornova)</h4>
          <p>
            {" "}
            <span>m2:</span> 93 m2 - 198 m2
          </p>
          <p>
            <span>Teslim Tarihi:</span> Mart 2023
          </p>
        </div>
      </div>
    </div>
  );
}
