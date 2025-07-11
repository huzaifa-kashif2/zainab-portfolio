import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Linkedin } from 'lucide-react';
import { Element } from 'react-scroll';

export default function Contact() {
  return (
    <Element name="contact" className={styles.contact}>
    <motion.section
      id="contact"
      className={styles.contact}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className={styles.heading}>✨ Let's Connect</h2>
      <p className={styles.subheading}>
  Have an idea, opportunity, or question? Reach me directly through the links below.
</p>

      <div className={styles.details}>
        <a
          href="mailto:zainabasim980@gmail.com"
          className={styles.contactItem}
          target="_blank"
          rel="noreferrer"
        >
          <Mail size={20} color="#cc397b" />
          <span>zainabasim980@gmail.com</span>
        </a>

        <a
          href="tel:+923271661140"
          className={styles.contactItem}
          target="_blank"
          rel="noreferrer"
        >
          <Phone size={20} color="#cc397b" />
          <span>+92 327 1661140</span>
        </a>

        <a
          href="https://wa.me/923271661140"
          className={styles.contactItem}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={20} color="#25D366" />
          <span>Message on WhatsApp</span>
        </a>

        <a
          href="https://www.linkedin.com/in/zainabb-asimm"
          className={styles.contactItem}
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={20} color="#0A66C2" />
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </motion.section>
    </Element>
  );
}
