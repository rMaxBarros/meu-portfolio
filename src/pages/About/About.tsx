import CareerBio from '../../components/AboutSections/CareerBio/CareerBio';
import ContactInfo from '../../components/AboutSections/ContactInfo/ContactInfo';
import PersonalInfo from '../../components/AboutSections/PersonalInfo/PersonalInfo';
import Tools from '../../components/AboutSections/Tools/Tools';
import styles from './About.module.css';

const About = () => {
    return (
        <main className={styles.main}>
            <div className={styles.grid}>
                <PersonalInfo />
                <Tools />
                <CareerBio />
                <ContactInfo />
            </div>
        </main>
    );
};

export default About;
