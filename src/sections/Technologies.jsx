import { Element } from 'react-scroll';
import styles from './Technologies.module.css';
import JUnit from "../assets/junit5-logo.png"; 

const tools = [
  // Frontend
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Vite', src: 'https://vitejs.dev/logo.svg' },

  // Backend
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'JWT', src: 'https://cdn-icons-png.flaticon.com/512/5968/5968866.png' },
  { name: 'Postman', src: 'https://cdn.worldvectorlogo.com/logos/postman.svg' },

  // SQA
  { name: 'JUnit', src: `${JUnit}` },

  // Project Management
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Jira', src: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
  { name: 'MS Project', src: 'https://cdn-icons-png.flaticon.com/512/888/888879.png' },
];

export default function Technologies() {
  return (
    <Element name="technologies" className={styles.toolsSection}>
      <div className="container">
        <h2 className={styles.heading}>Tools & Technologies I Work With</h2>
        <div className={styles.grid}>
          {tools.map((tool, i) => (
            <div className={styles.card} key={i}>
              <img src={tool.src} alt={tool.name} className={styles.icon} />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
