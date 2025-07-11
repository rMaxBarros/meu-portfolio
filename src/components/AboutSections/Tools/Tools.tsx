import styles from './Tools.module.css';

import {
    SiReact, SiJavascript, SiHtml5, SiCss3,
    SiTypescript, SiMysql, SiBootstrap, SiWordpress,
    SiPhp, SiFigma, SiPython, SiTailwindcss, SiAngular,
    SiGithub
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { FaChevronDown } from 'react-icons/fa';

const Tools = () => {
    return (
        <div className={styles.section}>
            <h3 className={styles.title}>
                < FaChevronDown size={13} /> Ferramentas que domino:</h3>
            <div className={styles.icons}>
                <div className={styles.react}>
                    <SiReact />
                </div>
                <div className={styles.javaScript}>
                    <SiJavascript />
                </div>
                <div className={styles.html5}>
                    <SiHtml5 />
                </div>
                <div className={styles.css3}>
                    <SiCss3 />
                </div>
                <div className={styles.github}>
                    <SiGithub />
                </div>
            </div>

            <h3 className={styles.title}>
                < FaChevronDown size={13} /> Outras tecnologias que mando bem:</h3>
            <div className={styles.icons}>
                <div className={styles.typeScript}>
                    <SiTypescript />
                </div>
                <div className={styles.mySQL}>
                    <SiMysql />
                </div>
                <div className={styles.bootstrap}>
                    <SiBootstrap />
                </div>
                <div className={styles.wordpress}>
                    <SiWordpress />
                </div>
                <div className={styles.php}>
                    <SiPhp />
                </div>
                <div className={styles.figma}>
                    <SiFigma />
                </div>
            </div>

            <h3 className={styles.title}>
                < FaChevronDown size={13} /> No back-end:</h3>
            <div className={styles.icons}>
                <div className={styles.python}>
                    <SiPython />
                </div>
                <div className={styles.java}>
                    <DiJava />
                </div>

            </div>

            <h3 className={styles.title}>
                < FaChevronDown size={13} /> Estou só começando...</h3>
            <div className={styles.icons}>
                <div className={styles.tailwind}>
                    <SiTailwindcss />
                </div>
                <div className={styles.angular}>
                    <SiAngular />
                </div>
            </div>
        </div>
    );
};

export default Tools;
