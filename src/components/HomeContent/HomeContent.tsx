import styles from './HomeContent.module.css';
import codeSnippetsImage from '../../assets/images/code-snippets.png';

const HomeContent = () => {
    return (
        <section className={styles.container}>
            <div className={styles.textContent}>
                <h3 className={styles.startTitle}>Olá, eu sou o</h3>
                <h1 className={styles.title}>Max Barros</h1>
                <h2 className={styles.subtitle}>&gt; Engenheiro de Software</h2>
                <h2 className={styles.subtitle}>&gt; Desenvolvedor Front-End</h2>
                <p className={styles.description}>
                    // Aqui, você encontra o que precisa sobre minha carreira.
                </p>
                <p className={styles.description}>
                    // Bora lá?! :)
                </p>
                <p className={styles.linkedInHome}>
                    <span className={styles.textConst}>const</span>
                    <span className={styles.textContactMe}> contactMe</span>
                    <span className={styles.textLinkedIn}> = </span>
                    <a className={styles.textLinkedInURL}
                        href='https://linkedin.com/in/max-barros'
                        target='_blank'
                    >
                        “https://linkedin.com/in/max-barros”
                    </a>
                    ;
                </p>
            </div>

            <div className={styles.imageContainer}>
                <img
                    src={codeSnippetsImage}
                    alt='Code illustration'
                    className={styles.image}
                />
            </div>
        </section>
    );
};

export default HomeContent;
