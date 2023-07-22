import { useRouteError } from "react-router-dom";
import styles from './PopupPage.module.css';

export default function ErrorPage() {
  const error = useRouteError() as {
    statusText: string,
    message: string
  };

  return (
    <div className={styles.Popup}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}