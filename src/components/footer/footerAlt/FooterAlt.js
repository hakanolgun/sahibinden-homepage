import styles from "./alt.module.css";
import barkod from "../../../assets/barkod.png";

export default function FooterAlt() {
  return (
    <div className={styles.FooterAltContainer}>
      <div className={styles.yaziVeCopyright}>
        <p className={styles.uzunYazi}>
          sahibinden.com'da yer alan kullanıcıların oluşturduğu tüm içerik,
          görüş ve bilgilerin doğruluğu, eksiksiz ve değişmez olduğu,
          yayınlanması ile ilgili yasal yükümlülükler içeriği oluşturan
          kullanıcıya aittir. Bu içeriğin, görüş ve bilgilerin yanlışlık,
          eksiklik veya yasalarla düzenlenmiş kurallara aykırılığından
          sahibinden.com hiçbir şekilde sorumlu değildir. Sorularınız için ilan
          sahibi ile irtibata geçebilirsiniz. Yer Sağlayıcı Belge No : 581
        </p>

        <div className={styles.enAltYaziLar}>
          <p>Copyright © 2000-2021 sahibinden.com</p>
          <p>
            (*) Bireysel üyeler için, limitli adetlerde, belirli kategorilerde
            ve belirli tekliflerde
          </p>
        </div>
      </div>

      <div>
        <img src={barkod} alt="" width={80} height={93} />
      </div>
    </div>
  );
}
