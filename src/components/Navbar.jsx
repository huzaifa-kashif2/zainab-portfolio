import styles from './NavBar.module.css';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Extra Curricular', to: 'extracurricular' },
    { name: 'Education', to: 'education' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Zainab Asim</div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className={`${styles.links} ${isOpen ? styles.show : ''}`}>
        {links.map(({ name, to }) => (
          <li key={to}>
            <Link
              to={to}
              smooth={true}
              duration={500}
              offset={-60}
              onClick={closeMenu}
              className={styles.link}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
