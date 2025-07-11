import { motion } from 'framer-motion'
import styles from './Experience.module.css'
import { Element } from 'react-scroll'

export default function Experience() {
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
        <div>
          <h3>Mindrift (Remote) — Domain Expert</h3>
          <p className={styles.date}>June 2024 – Present</p>
          <ul>
            <li>Improved domain efficiency and AI prompt quality.</li>
            <li>Proposed actionable optimizations and guided domain management.</li>
            <li>Enhanced prompt quality for AI outputs.</li>
          </ul>
        </div>
      </div>
    </motion.section>
    </Element>
  )
}
