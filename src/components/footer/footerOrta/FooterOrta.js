import styles from "./orta.module.css";
import guven from "../../../assets/guvenDamgasi.png";

export default function FooterOrta() {
  return (
    <div className={styles.footerOrtaContainer}>
      <div>
        <ul className={styles.footerOrtaUl}>
          <li className={`${styles.li} ${styles.callCenterLi}`}>
            <p>7/24 Müşteri Hizmetleri</p>
            <span>0 850 222 44 44</span>
          </li>

          <li className={`${styles.li} ${styles.helpCenterLi}`}>
            <p>Yardım Merkezi</p>
            <a
              href="https://yardim.sahibinden.com/hc/tr"
              title="yardim.sahibinden.com"
            >
              yardim.sahibinden.com
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.languageDiv}>
          <div className={styles.currentLanguage}>
            <div className={styles.label}>Dil Seçimi (Language)</div>
            <div className={styles.selectedTextTr}>Türkçe (Turkish)</div>
          </div>
        </div>
        <div>
          <img className={styles.guvenLogo} src={guven} alt="güven damgası" width={42} height={42} />
        </div>
      </div>
    </div>
  );
}
