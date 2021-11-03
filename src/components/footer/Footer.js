import FooterAlt from "./footerAlt/FooterAlt";
import FooterOrta from "./footerOrta/FooterOrta";
import FooterUst from "./footerUst/FooterUst";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.secondContainer}>
            <FooterUst />
            <FooterOrta />
            <FooterAlt />
            </div>
        </div>
    )
}
