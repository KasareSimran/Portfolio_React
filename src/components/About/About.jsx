
import styles from './About.module.css'
import aboutImg from '/assets/about/aboutImage.png'

function About(){
    return(
        <section>
            <h2>About</h2>
            <div>
                <img src={aboutImg} alt='Me sitting with my laptop'/>
            </div>
        </section>
    )
}
export default About