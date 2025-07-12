import { FaChevronDown } from 'react-icons/fa';
import styles from './Contact.module.css';
import { MdEmail } from 'react-icons/md';
import { FaSquareGithub, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
    return (
        <main className={styles.main}>
            <h2 className={styles.title}>< FaChevronDown size={13} /> Entre em contato</h2>
            <div className={styles.divider}></div>

            <section className={styles.contactInfo}>
                <div className={styles.item}>
                    <MdEmail className={styles.icon} />
                    <a className={styles.sendEmail} href="mailto:rmaxbarros@gmail.com">Envie um e-mail</a>
                </div>
            </section>

            <h3 className={styles.subtitle}>< FaChevronDown size={13} /> Todas as minhas redes</h3>

            <section className={styles.links}>
                <div className={styles.linkItem}>
                    <FaLinkedin className={styles.icon} />
                    <a
                        href="https://linkedin.com/in/max-barros"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social}
                    >
                        LinkedIn
                    </a>
                </div>
                <div className={styles.linkItem}>
                    <FaSquareGithub className={styles.icon} />
                    <a
                        href="https://github.com/seuusuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social}
                    >
                        GitHub
                    </a>
                </div>
                <div className={styles.linkItem}>
                    <FaSquareInstagram className={styles.icon} />
                    <a
                        href="https://instagram.com/seuusuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social}
                    >
                        Instagram
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Contact;
