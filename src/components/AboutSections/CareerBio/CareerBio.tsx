import { FaChevronDown } from 'react-icons/fa';
import styles from './CareerBio.module.css';

const CareerBio = () => {
    return (
        <div className={styles.section}>
            <h3 className={styles.title}>< FaChevronDown size={13} /> Bio sobre a minha carreira</h3>
            <p className={styles.comment}>
                /**<br />
                * Minha carreira: <br />
                * Sou um Desenvolvedor Front-End proativo, orientado a<br />
                * resultados e a construir interfaces de usuário modernas,<br />
                * funcionais e responsivas.<br />
                * Tenho experiência prática com React, JavaScript, HTML, CSS,<br />
                * WordPress e PHP, além de conhecimento complementar em<br />
                * Python e Java para scripts e integrações back-end.<br />
                */
            </p>
        </div>
    );
};

export default CareerBio;
