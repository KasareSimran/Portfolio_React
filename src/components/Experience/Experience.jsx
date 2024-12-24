
import styles from './Experience.module.css'
import skills from '../../data/skills.json'
function Experience(){
    return(
        <section id='experience'>
            <h2>Experience</h2>
            <div>
                <div>
                    {
                        skills.map((skill,id)=>{
                            return (
                            <div key={id} >
                                <div><img src={skill.imageSrc} alt={skill.title}/></div>
                                <p>{skill.title}</p>   
                            </div>

                            )
                        })
                    }
                </div>
                <ul></ul>
            </div>
        </section>
    )
}
export default Experience