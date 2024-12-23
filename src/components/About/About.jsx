
import styles from './About.module.css'
import aboutImg from '/assets/about/aboutImage.png'
import cursorIcon from '/assets/about/cursorIcon.png'
import serverIcon from '/assets/about/serverIcon.png'

function About(){
    return(
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={aboutImg} alt='Me sitting with my laptop' className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src={cursorIcon} alt='Cursor Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I’m a frontend developer with experience in building responsive and optimized sites</p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}><img src={serverIcon} alt='Server Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing Fast and optimized back-end system and APIs</p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default About