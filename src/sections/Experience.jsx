import { motion } from 'framer-motion';
import styles from './Experience.module.css';
import { Element } from 'react-scroll';

export default function Experience() {
  const experiences = [
    {
      company: 'Mindrift (Remote)',
      role: 'Domain Expert',
      date: 'June 2024 – Present',
      points: [
        'Improved domain efficiency and AI prompt quality.',
        'Proposed actionable optimizations and guided domain management.',
        'Enhanced prompt quality for AI outputs.'
      ]
    },
    {
      company: 'Khantastic Ventures',
      role: 'Full-Stack Developer',
      date: 'Jan 2023 – May 2024',
      points: [
        'Spearheaded full-stack web development projects, delivering high-performance, responsive websites from concept to deployment.',
        'Designed and implemented robust front-end interfaces using React.js / Vue.js, ensuring optimal user experience across all devices.',
        'Engineered scalable and secure back-end solutions with Node.js / Express / MongoDB, streamlining data flow and functionality.',
        'Deployed production-ready applications on cloud platforms (e.g., AWS, Vercel, Netlify), ensuring high availability and minimal downtime.',
        'Collaborated with cross-functional teams to translate business goals into technical solutions, improving development cycles and client satisfaction.',
        'Maintained version control and CI/CD pipelines using Git and GitHub Actions, optimizing deployment efficiency.'
      ]
    }
  ];

  return (
    <Element name="experience" className="experience">
      <motion.section
        className={styles.experience}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <h2>Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index}>
              <h3>{exp.company} — {exp.role}</h3>
              <p className={styles.date}>{exp.date}</p>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>
    </Element>
  );
}
