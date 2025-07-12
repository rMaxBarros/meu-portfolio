import styles from './ProjectCard.module.css';
import { TbFolderSymlink } from "react-icons/tb";

interface ProjectCardProps {
    title: string;
    year: string;
    repoUrl: string;
    description: string;
}

const ProjectCard = ({ title, year, repoUrl, description }: ProjectCardProps) => {
    return (
        <main>
            <div className={styles.header}>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.year}>{year}</p>
                </div>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <TbFolderSymlink className={styles.icon} />
                    <span>Acesse o repositório</span>
                </a>
            </div>
            <div className={styles.card}>

                <div className={styles.descriptionBox}>
                    <code className={styles.code}>
                        {description}
                    </code>
                </div>
            </div>
        </main>
    );
};

export default ProjectCard;
