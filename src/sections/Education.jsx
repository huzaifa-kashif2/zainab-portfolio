import { motion } from 'framer-motion'
import styles from './Education.module.css'
import { Element } from 'react-scroll'

const schools = [
  {
    name: "FAST NUCES – BS Software Engineering",
    details: "2021 – 2025 | Lahore, Pakistan",
  },
  {
    name: "KIPS College – Pre-Engineering",
    details: "2019 – 2021 | 1032/1100 (A+)",
  },
  {
    name: "KIPS Girls School – Science Group",
    details: "Up to 2019 | 1014/1100 (A+)",
  },
]

export default function Education() {
  return (
    <Element name="education" className="education">
    <motion.section
      className={styles.education}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">
        <h2>Education</h2>
        {schools.map((s, i) => (
          <div key={i} className={styles.item}>
            <h3>{s.name}</h3>
            <p>{s.details}</p>
          </div>
        ))}
      </div>
    </motion.section>
    </Element>
  )
}
