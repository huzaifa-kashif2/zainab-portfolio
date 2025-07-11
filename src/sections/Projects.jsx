import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import styles from './Projects.module.css';

import {
  FaHtml5, FaCss3Alt, FaJs, FaNodeJs,
  FaPhp, FaJava, FaReact,
} from 'react-icons/fa';
import {
  SiCplusplus, SiMongodb, SiMysql, SiNextdotjs,
  SiSqlite, SiCamunda,
} from 'react-icons/si';
import { VscFileCode } from 'react-icons/vsc'; 

const projects = [
  {
    title: 'Candy Crush',
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <SiCplusplus />],
    desc: 'Simplified Candy Crush clone with C++ game‑logic and a web‑based UI.',
  },
  {
    title: 'LESCO Management System',
    tech: [<SiCplusplus />],
    desc: 'Console app to manage customer billing & distribution tasks for LESCO.',
  },
  {
    title: 'Nadra Token System',
    tech: [<FaJava />, <SiCamunda />, <FaHtml5 />, <FaCss3Alt />, <FaJs />],
    desc: 'Automated Nadra’s token workflow using Camunda BPM and a Java backend.',
  },
  {
    title: 'Ottomate',
    tech: [<SiNextdotjs />, <FaNodeJs />, <SiMongodb />],
    desc: 'Notion‑style collaborative workspace built with the MERN / Next.js stack.',
  },
  {
    title: 'Waave Music App',
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <SiMysql />],
    desc: 'Responsive music‑streaming web app with playlist & audio controls.',
  },
  {
    title: 'Facebook Console Clone',
    tech: [<SiCplusplus />],
    desc: 'OOP‑driven simulation of Facebook core features in a C++ CLI.',
  },
  {
    title: 'Car Rental System',
    tech: [<FaPhp />, <FaHtml5 />, <FaCss3Alt />, <FaJs />, <SiMysql />],
    desc: 'Full‑stack booking platform for vehicle rentals with secure admin panel.',
  },
  {
    title: 'Travel Planner App',
    tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <SiMysql />],
    desc: 'Trip organizer that suggests destinations, budgets & itineraries.',
  },
  {
    title: 'Nimbus Weather App',
    tech: [<FaJava />, <VscFileCode  />, <SiSqlite />],
    desc: 'Location‑aware weather service using Java Servlets, JSP, and SQLite.',
  },
];

export default function Projects() {
  return (
    <Element name="projects" className="projects">
      <motion.section
        className={styles.projects}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <h2>Projects</h2>

          <div className={styles.grid}>
            {projects.map(({ title, tech, desc }, i) => (
              <motion.div
                key={i}
                className={styles.card}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <h3>{title}</h3>

                <div className={styles.techIcons}>
                  {tech.map((Icon, idx) => (
                    <span key={idx} className={styles.icon}>
                      {Icon}
                    </span>
                  ))}
                </div>

                <p className={styles.desc}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </Element>
  );
}
