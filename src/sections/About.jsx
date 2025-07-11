import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

import styles from './About.module.css';

export default function About() {
  return (
    <Element name="about" className="about">
    <motion.section
      className={styles.about}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">
        <h2>About Me</h2>
        <p className={styles['about-p']}>I’m Zainab Asim, a passionate and results-driven Software Engineer focused on creating scalable, impactful solutions for real-world problems. With strong experience in backend development, API integrations, and system optimization, I build efficient, reliable products that deliver value across diverse industries. I am constantly exploring evolving technologies and applying them to projects that drive meaningful change. My work is driven by clean code, practical problem-solving, and a commitment to user-centered solutions. I thrive in global remote teams and dynamic environments, taking full ownership of my work and continuously learning to create technology that makes a difference worldwide.
        </p>
      </div>
    </motion.section>
    </Element>
  );
}
