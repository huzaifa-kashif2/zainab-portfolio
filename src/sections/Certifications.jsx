import { motion } from 'framer-motion'
import styles from './Certifications.module.css'
import { Element } from 'react-scroll'

const certs = [
  "C++ for Programmers – Udacity (2021)",
  "Introduction to Frontend – Coursera (2022)",
  "HTML & CSS In-Depth – Coursera (2022)",
  "Foundations of Frontend Dev – Udemy (2023)",
  "Building No-Code Apps with AppSheet: Foundations – Google Cloud (2025)",
  "Building No-Code Apps with AppSheet: Implementation – Google Cloud (2025)",
  "Building No-Code Apps with AppSheet: Automation – Google Cloud (2025)",
]

export default function Certifications() {
  return (
    <Element name="certifications" className="certifications">
      <motion.section
        className={styles.certifications}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <h2>Certifications</h2>
          <ul>
            {certs.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </div>
      </motion.section>
    </Element>
  )
}