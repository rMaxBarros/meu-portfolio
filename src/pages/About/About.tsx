import styles from './About.module.css';

const About = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Oi! Obrigado por estar aqui</h1>
            <h2>Essa tela ainda está em construção! O projeto tá bacana né?</h2>
            <p>
                Estou realizando alguns projetos que surgiram mas logo termino aqui! (De verdade!)
            </p>
            <p>Última atualização: 04/07/2025</p>
            <p>Você pode acessar o repositório desse projeto clicando no botão abaixo:</p>
            <a
                className={styles.button}
                href='https://github.com/rMaxBarros/meu-portfolio'
                target='_blank'
            >
                Projeto no GitHub
            </a>
        </main>
    );
};

export default About;
