import dhlogo from '/dhlogo.jpg';
import diologo from '/diologo.png';
import aluralogo from '/aluralogo.png';

function Formacao() {
    return (
        <section className="formacao bg-[#D4E4FA] pt-4 my-4">
            <h1 className='text-3xl font-semibold text-center my-4'>Formação Acadêmica</h1>
            <div className="containerr ">
                <ul className='flex flex-wrap gap-4 justify-center'>

                    <li className="formacoes">
                        <div>
                            <img className=' w-20 md:w-30 xl:w- object-contain' src={dhlogo} alt="Digital house" />
                        </div>
                        <h2 className='font-semibold'>Desenvolvimento Web Full Stack </h2>
                        <p>Digital House - 2023 </p>
                    </li>

                    <li className="formacoes">
                        <div>
                            <img className=' w-20 md:w-30 xl:w- object-contain' src={diologo} alt="DIO" />
                        </div>
                        <h2 className='font-semibold'>UX/UI Design</h2>
                        <p>DIO - 2023 </p>
                    </li>

                    <li className="formacoes">
                        <div>
                            <img className=' w-20 md:w-30 xl:w- object-contain' src={aluralogo} alt="Alura" />
                        </div>
                        <h2 className='font-semibold'>Desenvolvimento Web Front-End</h2>
                        <p>Alura e Oracle - Em andamento</p>
                    </li>

                </ul>
            </div>
        </section>
    )
}

export default Formacao;