import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import PFP from "../assets/pfp.jpg";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Link as ScrollLink } from "react-scroll"; 

export default function Hero() {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.overlay} />
      <img src={PFP} alt="Profile" className={styles.pfp} />

      <div className={styles.text}>
        <h1>Zainab Asim</h1>
        <p className={styles.role}>
          Software Engineer | Turning Complex Ideas into Seamless Solutions
        </p>
        <p className={styles.remote}>📍 Open to global remote opportunities</p>
        <div className={styles.socials}>
          <a href="mailto:zainabasim980@gmail.com">
            <Mail size={28} color="#cc397b" />
          </a>
          <a
            href="https://wa.me/923271661140"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
          >
            <MessageCircle size={28} color="#25D366" />
          </a>
          <a href="tel:+923271661140" title="Call Zainab">
            <Phone size={28} color="#cc397b" />
          </a>
        </div>

        <div className={styles.buttons}>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={600}
            offset={-60}
            className={styles.cta}
          >
             View My Work ↓
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-60}
            className={styles.reach}
          >
            ✉️ Let's Connect
          </ScrollLink>
        </div>
        

      </div>
    </motion.section>
  );
}
