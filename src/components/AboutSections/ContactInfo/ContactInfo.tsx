import { FaChevronDown } from 'react-icons/fa';
import styles from './ContactInfo.module.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
    return (
        <div className={styles.section}>
            <h3 className={styles.title}>< FaChevronDown size={13} /> Entre em contato</h3>
            <p className={styles.comment}><MdEmail /> rmaxbarros@gmail.com</p>

            <h3 className={styles.title}>< FaChevronDown size={13} /> Todas as minhas redes</h3>
            <p className={styles.comment}>
                <FaExternalLinkAlt size={13} /> <a
                    href='https://www.linkedin.com/in/max-barros/'
                    target='_blank' >LinkedIn
                </a>
            </p>
            <p className={styles.comment}>
                <FaExternalLinkAlt size={13} /> <a
                    href='https://github.com/rMaxBarros'
                    target='_blank'>GitHub
                </a>
            </p>
            <p className={styles.comment}>
                <FaExternalLinkAlt size={13} /> <a
                    href='https://www.instagram.com/maxloam'
                    target='_blank'>Instagram
                </a>
            </p>
        </div>
    );
};

export default ContactInfo;
