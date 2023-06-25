
import { useState } from 'react';
import mockupChps from '../../../public/mockup.png';


function Experiencia() {

    const [isHidden, setIsHidden] = useState(true);

    const handleDescription = () => {
        if (isHidden) {
            setIsHidden(false)
        } else {
            setIsHidden(true)
        }
    };

    return (
        <section className="experiencia">
            <h1 className='text-3xl mx-4 font-semibold whitespace-normal text-center my-6'>Experiência profissional</h1>
            <div className="containerr">
                <div className='flex flex-col items-center gap-4'>
                    <img src={mockupChps} alt="Mockup" />

                    <div className='flex gap-6'>
                        <a href='https://github.com/joaoMiraya/lancheAPP' target='_blank' rel='noreferrer' className='btn-secondary cursor-pointer'>Repositório</a>
                        <button onClick={handleDescription} className='btn-primary'>{`${isHidden ? 'Ver descrição' : 'Esconder'}`}</button>
                    </div>
                    <div className={`${isHidden ? 'hidden' : ' '}`}>
                        <p>O projeto é um sistema de entrega desenvolvido em JavaScript utilizando ReactJS e outras bibliotecas.
                            Os usuários têm a opção de fazer um cadastro completo ou fazer um pedido rápido,
                            sem a necessidade de cadastro. Todos os pedidos e informações dos usuários são armazenados
                            em um banco de dados. Em breve, o sistema será lançado para uso público.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experiencia;