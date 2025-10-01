import { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import styles from './Header.module.css'

export default function Header() {
    const [pageScrolled, setPageScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setPageScrolled(window.scrollY >= 1);
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return (
        <>

            <header

                className={`${styles.header_main_div} ${pageScrolled ? styles.setHeaderBorder : ""}`}
                style={{
                    borderBottom: pageScrolled ? "1px solid grey" : "none"
                }}

            >
                <div
                >
                    <p
                        className={styles.headerLogoName}
                    >
                        <span className={styles.spanText}>
                            CAREERS
                        </span>
                        AFRICA
                    </p>
                </div>

                <div style={{ height: "100%" }}>
                    <NavBar />
                </div>

                <div>
                    <button
                        className={styles.headerBtn}
                    >Get In Touch</button>
                </div>

            </header>
            <div
                style={{
                    height:"10vh"
                }}
            >

            </div>
        </>
    )
}