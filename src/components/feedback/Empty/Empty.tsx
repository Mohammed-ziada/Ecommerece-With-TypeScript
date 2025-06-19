import styles from "./Empty.module.css";

interface IProps {
  message?: string;
  logoSrc?: string;
}

const Empty = ({ message = "Empty", logoSrc }: IProps) => {
  return (
    <div className={styles.emptyContainer}>
      {logoSrc && (
        <img src={logoSrc} alt="Empty" className={styles.emptyLogo} />
      )}
      <p className={styles.emptyMessage}>{message}</p>
    </div>
  );
};

export default Empty;
