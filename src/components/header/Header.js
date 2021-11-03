import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.secondContainer}>
        <div className={styles.logoContainer}>
          <a className={styles.logo} href="https://www.sahibinden.com"> </a>
        </div>
        <div className={styles.searchContainer}>
          <form action="">
            <input
              type="search"
              placeholder="Kelime, ilan no veya mağaza adı ile ara"
            />
            <button className={styles.searchBtn}></button>
            <button className={styles.xBtn}>x</button>
            <a className={styles.detayliArama} href="/">
              Detaylı Arama
            </a>
          </form>
        </div>
        <div className={styles.rightContainer}>
          <ul>
            <li>
              <a className={styles.girisveuyeollink} href="/">
                Giriş Yap
              </a>
            </li>
            <li>
              <a
                className={`${styles.girisveuyeollink} ${styles.uyeol}`}
                href="/"
              >
                Üye Ol
              </a>
            </li>
            <li>
              <a className={styles.ucretsizilanlink} href="/">
                Ücretsiz* İlan Ver
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
