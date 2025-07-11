import { FaChevronDown } from 'react-icons/fa';
import styles from './PersonalInfo.module.css';

const PersonalInfo = () => {
    return (
        <div className={styles.section}>
            <h3 className={styles.title}>< FaChevronDown size={13} /> Informações Pessoais</h3>
            <p className={styles.comment}>
                /**<br />
                * Sobre mim:<br />
                * Estou no mundo da programação há 4 anos!<br />
                * Mas a minha paixão pelo front-end só teve<br />
                * início no fim de 2023.<br />
                * Desde então, venho aprimorando as minhas<br />
                * habilidades e chegamos no resultado que você<br />
                * está vendo hoje!<br />
                *<br />
                * Tive muitos desafios no processo, mas o apoio,<br />
                * amor e ensinamentos das pessoas que amo me<br />
                * impulsionaram e me ajudaram a nunca desistir!<br />
                */</p>
        </div>
    );
};

export default PersonalInfo;
