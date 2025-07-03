import styles from './Footer.module.css';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>Onde você pode me encontrar:</p>
            <div className={styles.icons}>
                <a
                    href="https://github.com/rMaxBarros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                >
                    <SiGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/max-barros/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                >
                    <SiLinkedin />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
