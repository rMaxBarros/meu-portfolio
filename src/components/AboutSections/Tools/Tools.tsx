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
                    <SiReact title={'React'} />
                </div>
                <div className={styles.javaScript}>
                    <SiJavascript title={'JavaScript'} />
                </div>
                <div className={styles.html5}>
                    <SiHtml5 title={'HTML5'} />
                </div>
                <div className={styles.css3}>
                    <SiCss3 title={'CSS3'} />
                </div>
                <div className={styles.github}>
                    <SiGithub title={'GitHub'} />
                </div>
            </div>

            <h3 className={styles.title}>
                < FaChevronDown size={13} /> Outras tecnologias que mando bem:</h3>
            <div className={styles.icons}>
                <div className={styles.typeScript}>
                    <SiTypescript title={'TypeScript'} />
                </div>
                <div className={styles.mySQL}>
                    <SiMysql title={'MySQL'} />
                </div>
                <div className={styles.bootstrap}>
                    <SiBootstrap title={'BootStrap'} />
                </div>
                <div className={styles.wordpress}>
                    <SiWordpress title={'WordPress'} />
                </div>
                <div className={styles.php}>
                    <SiPhp title={'PHP'} />
                </div>
                <div className={styles.figma}>
                    <SiFigma title={'Figma'} />
                </div>
            </div>

            <h3 className={styles.title}>
                < FaChevronDown size={13} /> No back-end:</h3>
            <div className={styles.icons}>
                <div className={styles.python}>
                    <SiPython title={'Python'} />
                </div>
                <div className={styles.java}>
                    <DiJava title={'Java'} />
                </div>

            </div>

            <h3 className={styles.title}>
                < FaChevronDown size={13} /> Estou só começando...</h3>
            <div className={styles.icons}>
                <div className={styles.tailwind}>
                    <SiTailwindcss title={'TailWind'} />
                </div>
                <div className={styles.angular}>
                    <SiAngular title={'Angular'} />
                </div>
            </div>
        </div>
    );
};

export default Tools;
