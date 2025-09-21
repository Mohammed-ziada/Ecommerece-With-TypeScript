import { Button } from "react-bootstrap";
import styles from "./Empty.module.css";
import { Link } from "react-router-dom";

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
      {/* <button>Home</button> */}
      <Button>
        <Link to="/" className="text-white text-decoration-none">
          Home
        </Link>
      </Button>
    </div>
  );
};

export default Empty;
