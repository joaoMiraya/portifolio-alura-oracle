import { FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
function Skills() {
    return (
        <section className="skills">
            <h1 className='text-3xl font-semibold text-center mt-6'>Skills</h1>
            <div className="containerr ">
                <ul className='flex flex-wrap justify-center gap-4'>
                    <li className="commum-box"><SiJavascript size={40} />JavaScript</li>
                    <li className="commum-box"><SiReact size={40} />ReactJs</li>
                    <li className="commum-box"><SiTailwindcss size={40} />TailWindCSS</li>
                    <li className="commum-box"><FaNodeJs size={40} />NodeJs</li>
                    <li className="commum-box"><SiPostgresql size={40} />PostgreSQL</li>
                    <li className="commum-box"><GrMysql size={40} />MySQL</li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;