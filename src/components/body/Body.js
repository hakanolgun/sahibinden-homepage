import ContentArea from "./contentArea/ContentArea";
import LeftSideBar from "./leftSideBar/LeftSideBar";
import styles from "./body.module.css";

export default function Body() {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.secondContainer}>
        <LeftSideBar />
        <ContentArea />
      </div>
    </div>
  );
}
