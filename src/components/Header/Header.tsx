import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Max Barros</div>

            <nav className={styles.nav}>
                <div className={styles.leftNav}>
                    <NavItem to="/" label="home" active={isActive('/')} />
                    <NavItem to="/about" label="about me" active={isActive('/about')} />
                    <NavItem
                        to="/projects"
                        label="my projects"
                        active={isActive('/projects')}
                    />
                </div>
                <NavItem
                    to="/contact"
                    label="contact"
                    active={isActive('/contact')}
                    extraClass={styles.contactNav}
                />
            </nav>
        </header>
    );
};

type NavItemProps = {
    to: string;
    label: string;
    active: boolean;
    extraClass?: string;
};

const NavItem = ({ to, label, active, extraClass }: NavItemProps) => (
    <Link
        to={to}
        className={`${styles.navItem} ${active ? styles.active : styles.inactive} ${extraClass || ''}`}
    >
        {label}
        {active && (
            <motion.span
                layoutId="underline"
                className={styles.underline}
            />
        )}
    </Link>
);

export default Header;
