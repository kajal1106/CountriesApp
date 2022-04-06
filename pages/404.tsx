import Link from "next/link";
import AppNavBar from "../components/AppNavBar/AppNavBar";
import styles from "../styles/404.module.scss";

const ErrorPage = () => {
  return (
    <div
      className=
      {`${styles.pageSection} ${styles.Page404} ${styles.AnimateEntry}`}
    >
       <AppNavBar />
      <div className={styles.container}>
        <h1>404</h1>
        <h2>
          <Link as="/countries" href={"/countries"}>
            <a >
              Go To Home Page
            </a>
          </Link>
        </h2>
        <p>Sorry, the content you are looking for could not be found.</p>
      </div>
    </div>
  );
};

export default ErrorPage;