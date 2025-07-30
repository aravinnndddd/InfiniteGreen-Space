import styles from "./loader.module.css";

const GreenSpaceLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.logoWrapper}>
        <img className={styles.brand} src="./logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default GreenSpaceLoader;
