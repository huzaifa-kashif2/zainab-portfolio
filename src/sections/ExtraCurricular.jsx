import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import styles from './ExtraCurricular.module.css';
import gdscLogo from '../assets/gdscfastlahore_logo.jpg';
import ccsLogo from '../assets/ccs_logo.svg';
import softecLogo from '../assets/softecnu_logo.jpg';
import fmsLogo from '../assets/fms_logo.jpg';


const logos = {
  gdsc: gdscLogo,
  ccs: ccsLogo,
  softec: softecLogo,
  fms: fmsLogo
};

const activities = [
  {
    title: 'Head of Research and Planning – GDSC FAST',
    date: 'Feb 2024 – Dec 2024',
    logo: logos.gdsc,
    description:
      "Led research & planning at GDSC FAST, aligning events with student needs and tech trends. Developed frameworks and supported event execution."
  },
  {
    title: 'Head of Team Liaison – Career Counselling Society',
    date: 'Jan 2024 – Nov 2024',
    logo: logos.ccs,
    description:
      'Coordinated logistics and communication for large-scale career events. Managed liaison teams and speaker relations.'
  },
  {
    title: 'Volunteer Team Liaison – Career Counselling Society',
    date: 'Feb 2023 – Dec 2023',
    logo: logos.ccs,
    description:
      'Supported execution of professional events. Strengthened team coordination, public relations, and internal communications.'
  },
  {
    title: 'Volunteer – Decor Team, SOFTEC',
    date: 'Jan 2022 – Dec 2022',
    logo: logos.softec,
    description:
      'Executed creative setups and visual themes for one of the biggest student-run tech events in the region.'
  },
  {
    title: 'Volunteer – FAST Music Society',
    date: 'Nov 2021 – May 2022',
    logo: logos.fms,
    description:
      'Contributed to the university’s music society through singing, rehearsal participation, and fostering musical culture.'
  }
];

export default function ExtraCurricular() {
  return (
    <Element name="extracurricular" className="extracurricular">
      <motion.section
        className={styles.extracurricular}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <h2>Extra Curricular Activities</h2>

          <div className={styles.grid}>
            {activities.map((activity, idx) => (
              <div className={styles.card} key={idx}>
                <div className={styles.header}>
                  <img src={activity.logo} alt="logo" className={styles.logo} />
                  <div>
                    <h3>{activity.title}</h3>
                    <p className={styles.date}>{activity.date}</p>
                  </div>
                </div>
                <p className={styles.description}>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </Element>
  );
}
