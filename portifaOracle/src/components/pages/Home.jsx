import photo from '/photo_2023-01-13_11-16-12.jpg';
import curriculum from '/Curriculum.pdf';
import { useEffect, useRef } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

function Home() {

    const textRef = useRef(null);

    function typeWriter(element) {
        const text = textRef.current.innerHTML;
        if (!text) {
            return;
        }
        const textArray = text.split('');
        element.innerHTML = '';
        textArray.forEach((letra, i) => {
            setTimeout(() => {
                if (element) { // verifica se o elemento ainda existe
                    element.innerHTML += letra;
                }
            }, 75 * i);
        });
    }

    useEffect(() => {
        typeWriter(textRef.current);
    }, []);

    return (
        <>
            <section>
                <div className="containerr md:flex md:flex-row md:justify-evenly flex flex-col-reverse">
                    <div className="text-center md:w-1/2">
                        <h1 id='titleAnimation' ref={textRef} className="text-xl md:text-2xl xl:text-3xl font-semibold">Olá, meu nome é João Miraya e construo páginas na Web</h1>
                        <p className=" my-4">Eu sou um desenvolvedor web full stack e atualmente estou participando no Projeto ONE na Alura</p>
                        <ul className='flex gap-4 mt-4 flex-wrap justify-center'>
                            <a target='_blank' rel='noreferrer' href="https://github.com/joaomiraya"><li className="rede-social-links hover:underline flex cursor-pointer">Github <BsArrowUpRight /></li></a>
                            <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/joaomiraya/"><li className="rede-social-links hover:underline flex cursor-pointer">Linkedim <BsArrowUpRight /></li></a>
                            <a target='_blank' rel='noreferrer' href="https://www.instagram.com/joaomiraya/"><li className="rede-social-links hover:underline flex cursor-pointer">Instagram <BsArrowUpRight /></li></a>
                            <a href={curriculum} download={true}><li className="rede-social-links hover:underline flex cursor-pointer">Currículo <BsArrowUpRight /></li></a>
                        </ul>
                    </div>
                    <img className='xl:w-72 xl:h-72 md:w-64 md:h-64 h-32 w-32 mix-blend-multiply' src={photo} alt="JoãoMiraya" />
                </div>
            </section>
        </>
    )
}

export default Home;