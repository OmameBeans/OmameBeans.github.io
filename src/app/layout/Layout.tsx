import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss"
import { Header } from "../../widgets/header";

export const Layout = () => {
    return (
        <div className={styles.app}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.main}>
                <div className={styles.outlet}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}