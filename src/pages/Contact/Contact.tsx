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
                    <a className={styles.sendEmail} href="mailto:rmaxbarros@gmail.com">
                        <MdEmail className={styles.icon} /> Envie um e-mail</a>
                </div>
            </section>

            <h3 className={styles.subtitle}>< FaChevronDown size={13} /> Todas as minhas redes</h3>

            <section className={styles.links}>
                <div className={styles.linkItem}>
                    <a
                        href="https://linkedin.com/in/max-barros"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social}
                    >
                        <FaLinkedin className={styles.icon} /> LinkedIn
                    </a>
                </div>
                <div className={styles.linkItem}>
                    <a
                        href="https://github.com/rMaxBarros"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social}
                    >
                        <FaSquareGithub className={styles.icon} /> GitHub
                    </a>
                </div>
                <div className={styles.linkItem}>
                    <a
                        href="https://instagram.com/MaxLoam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social}
                    >
                        <FaSquareInstagram className={styles.icon} /> Instagram
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Contact;
