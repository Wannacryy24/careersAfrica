import styles from "./Footer.module.css";
// import logo from "@/assets/images/logo.png"; // replace with real logo

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Branding */}
            <div className={styles.footerTopDiv}>
                <div className={styles.brand}>
                {/* <img src={logo} alt="Careers Africa" /> */}
                <p
                    className={styles.headerLogoName}
                >
                    <span className={styles.spanText}>
                        CAREERS
                    </span>
                    AFRICA
                </p>
                <p>Building Careers. Connecting Opportunities. Driving Success.</p>
                <p>Your trusted recruitment partner in Africa & beyond.</p>
            </div>

            <div className={styles.rightFooterInnerDiv}>

                {/* Quick Links */}
                <div className={styles.links}>
                    <h4>Quick Links</h4>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/agreements">Agreements</a>
                    <a href="/partners">Partners</a>
                    <a href="/contact">Contact</a>
                </div>

                {/* Contact Info */}
                <div className={styles.contact}>
                    <h4>Contact Us</h4>
                    <p>📍 Delhi: H-23/7, Maujpur metro station</p>
                    <p>📍 Jaipur: +91 7568217767</p>
                    <p>📧 careersafrica9@gmail.com</p>
                    <p>📞 +91 9312370981 (Sachin Kumar)</p>
                    <p>📞 +91 7568217767 (Arvind Singh)</p>
                </div>
            </div>
            </div>

            {/* Legal / Social */}
            <div className={styles.legal}>
                <p>© {new Date().getFullYear()} Careers Africa. All rights reserved.</p>
                <div className={styles.socials}>
                    <a href="https://wa.me/919312370981" target="_blank">WhatsApp</a>
                    <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                </div>
                <div className={styles.policies}>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
}
