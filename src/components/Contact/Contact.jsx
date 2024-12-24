

import styles from "./Contact.module.css";
import emailImg from "/assets/contact/emailIcon.png"
import linkedinImg from "/assets/contact/linkedinIcon.png"
import githubImg from "/assets/contact/githubIcon.png"


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailImg} alt="Email icon" />
          <a href="mailto:simrankasare5@gmail.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinImg}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/simran-kasare-46a221220/">linkedin.com/simrankasare</a>
        </li>
        <li className={styles.link}>
          <img src={githubImg} alt="Github icon" />
          <a href="https://github.com/KasareSimran">github.com/simrankasare</a>
        </li>
      </ul>
    </footer>
  );
};