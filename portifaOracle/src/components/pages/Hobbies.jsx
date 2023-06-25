
import { FaHeadphones } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { CgGym } from 'react-icons/cg';
import { ImBooks } from 'react-icons/im';
import { SiNetflix } from 'react-icons/si';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

function Hobbies() {


    return (
        <section className="hobbies">
            <h1 className='text-3xl font-semibold text-center mt-6'>Hobbies</h1>
            <div className="containerr">
                <ul className='flex justify-center gap-4 flex-wrap'>
                    <li className="commum-box"><FaHeadphones size={40} />Ouvir Música</li>
                    <li className="commum-box"><IoLogoGameControllerB size={40} />Jogar Jogos</li>
                    <li className="commum-box"><CgGym size={40} />Academia</li>
                    <li className="commum-box"><ImBooks size={40} />Ler Livros</li>
                    <li className="commum-box"><SiNetflix size={40} />Ver Series</li>
                    <li className="commum-box"><MdOutlineRestaurantMenu size={40} />Cozinhar</li>
                </ul>
            </div>
        </section>
    )
}

export default Hobbies;