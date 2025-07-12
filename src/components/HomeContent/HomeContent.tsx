import styles from './HomeContent.module.css';
import { motion } from 'framer-motion';
import codeSnippetsImage from '../../assets/images/code-snippets.png';

const HomeContent = () => {
    return (
        <section className={styles.container}>
            <div className={styles.textContent}>
                <h3 className={styles.startTitle}>Olá, eu sou o</h3>

                <motion.h1
                    className={styles.title}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    Max Barros
                </motion.h1>

                <h2 className={styles.subtitle}>&gt; Engenheiro de Software</h2>
                <h2 className={styles.subtitle}>&gt; Desenvolvedor Front-End</h2>
                <p className={styles.description}>
                    // Aqui, você encontra o que precisa sobre minha carreira.
                </p>
                <p className={styles.description}>
                    // Bora lá?! :)
                </p>
                <p className={styles.mobileMessage}>// Para dar uma olhada na versão completa do site, acesse por um disposito com tela maior.</p>
                <p className={styles.mobileMessage}>// Aperte abaixo para entrar em contato comigo no LinkedIn!</p>
                <p className={styles.linkedInHome}>
                    <span className={styles.textConst}>const</span>
                    <span className={styles.textContactMe}> contactMe</span>
                    <span className={styles.textLinkedIn}> = </span>
                    <a className={styles.textLinkedInURL}
                        href='https://linkedin.com/in/max-barros'
                        target='_blank'
                    >
                        “<span className={styles.linkLinkedin}>https://linkedin.com/in/max-barros</span>”
                    </a>
                    ;
                </p>
            </div>

            <div className={styles.imageContainer}>
                <img
                    src={codeSnippetsImage}
                    alt='Imagem mostrando várias linhas de código'
                    className={styles.image}
                />
            </div>
        </section>
    );
};

export default HomeContent;
