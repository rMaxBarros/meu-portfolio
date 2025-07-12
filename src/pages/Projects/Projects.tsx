import styles from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { FaChevronDown } from 'react-icons/fa';

const Projects = () => {
    const projectList = [
        {
            title: 'Portfólio Profissional',
            year: '2025',
            repoUrl: 'https://github.com/rMaxBarros/meu-portfolio',
            description: `// Projeto pessoal criado com React, TypeScript e animações usando Framer Motion.\n// Contém páginas com transições suaves, layout responsivo e foco em performance.\n// Vite para otimizar o tempo de build e melhorar o desenvolvimento.`,
        },
        {
            title: 'Holiday Hideaways',
            year: '2025',
            repoUrl: 'https://github.com/rMaxBarros/holiday-hideaways',
            description: `// projeto consistiu na criação de um sistema completo para locação de temporada, abrangendo desde o desenvolvimento da API REST em Python até a construção do front-end interativo em React.\n// A API foi projetada para gerenciar reservas, usuários e propriedades, enquanto o front-end ofereceu uma experiência de usuário fluida e responsiva.`,
        },
        {
            title: 'Editor de Perfil',
            year: '2025',
            repoUrl: 'https://github.com/rMaxBarros/user-profile',
            description: `// O projeto é uma aplicação de perfil de usuário simples e eficiente, desenvolvida com React para o frontend e PHP com MySQL para o backend.\n// Ele permite que os usuários visualizem e editem suas informações de perfil, incluindo nome, email e foto de perfil.\n// A aplicação utiliza o Axios para comunicação com a API, garantindo uma experiência fluida e responsiva.`,
        },
        {
            title: 'Python PowerUp',
            year: '2025',
            repoUrl: 'https://github.com/rMaxBarros/python-power-up',
            description: `// Repositório dedicado a projetos realizados em Python.\n//Contém 4 projetos distintos, cada um demonstrando diferentes aspectos da linguagem e suas bibliotecas.\n// Os projetos incluem desde automação de tarefas simples até aplicações mais complexas, como análise de dados, desenvolvimento web e Inteligência Artificial.`,
        },

    ];

    return (
        <main className={styles.main}>
            <h2 className={styles.sectionTitle}>< FaChevronDown size={13} /> Meus Projetos</h2>

            <div className={styles.grid}>
                {projectList.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        year={project.year}
                        repoUrl={project.repoUrl}
                        description={project.description}
                    />
                ))}
            </div>
        </main>
    );
};

export default Projects;
