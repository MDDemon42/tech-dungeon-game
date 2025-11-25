import { useRouteError } from "react-router-dom";
import styles from './StartPage.module.css';

export default function ErrorPage() {
  const error = useRouteError() as {
    statusText: string,
    message: string
  };

  return (
    <div className={styles.Popup}>
      <h1>
        {chrome.i18n.getMessage('error_page_title')}
      </h1>
      <p>
        {chrome.i18n.getMessage('error_page_text')}
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}