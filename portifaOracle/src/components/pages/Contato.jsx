import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import contatoimg from '../../../public/contatoimg.jpg';



function Contato() {



    const refName = useRef(null);
    const refNameLabel = useRef(null);

    const refEmail = useRef(null);
    const refEmailLabel = useRef(null);

    const refAssunto = useRef(null);
    const refAssuntoLabel = useRef(null);

    const refMensagem = useRef(null);
    const refMensagemLabel = useRef(null);


    const handleFocusName = () => {
        refName.current.classList.add('border-focus')
        refNameLabel.current.classList.add('label-focus')
    };

    const handleBlurName = () => {
        refName.current.classList.remove('border-focus')
        refNameLabel.current.classList.remove('label-focus')
    };

    const handleFocusEmail = () => {
        refEmail.current.classList.add('border-focus')
        refEmailLabel.current.classList.add('label-focus')
    };

    const handleBlurEmail = () => {
        refEmail.current.classList.remove('border-focus')
        refEmailLabel.current.classList.remove('label-focus')
    };

    const handleFocusAssunto = () => {
        refAssunto.current.classList.add('border-focus')
        refAssuntoLabel.current.classList.add('label-focus')
    };

    const handleBlurAssunto = () => {
        refAssunto.current.classList.remove('border-focus')
        refAssuntoLabel.current.classList.remove('label-focus')
    };

    const handleFocusMensagem = () => {
        refMensagem.current.classList.add('border-focus')
        refMensagemLabel.current.classList.add('label-focus')
    };

    const handleBlurMensagem = () => {
        refMensagem.current.classList.remove('border-focus')
        refMensagemLabel.current.classList.remove('label-focus')
    };

    const form = useRef();
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                setNome('')
                setEmail('')
                setAssunto('')
                setMensagem('')
                console.log(result);
            }, (error) => {
                console.log(error.text);
                alert("Ocorreu algum erro")
            });
    };

    return (

        <section className='bg-[#D4E4FA] mt-4 px-6'>
            <div className="containerr flex justify-center gap-2">
                <img className='hidden md:flex w-72 object-cover' src={contatoimg} alt="Entre em contato" />
                <form ref={form} onSubmit={sendEmail}>
                    <div className='flex flex-col gap-2 w-4/5 md:w-full mb-4'>
                        <h2 className='font-semibold text-2xl'>Contato</h2>
                        <p className=' text-sm'>Quer entrar em contato comigo? <br />
                            Preencha o formulário ao lado e entrarei em contato o mais rápido possível.</p>
                    </div>
                    <div className='flex flex-col px-6 '>
                        <label ref={refNameLabel} className='text-[10px] relative top-4 left-2 z-10 text-gray-400' htmlFor="nome">Nome</label>
                        <input
                            ref={refName}
                            onFocus={handleFocusName}
                            onBlur={handleBlurName}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className=' rounded-sm px-2 pt-4 outline-none h-10 relative'
                            name='nome'
                            id='nome'
                            type="text"
                        />

                        <label ref={refEmailLabel} className='text-[10px] relative top-4 left-2 z-10 text-gray-400' htmlFor="email">Email</label>
                        <input
                            ref={refEmail}
                            onFocus={handleFocusEmail}
                            onBlur={handleBlurEmail}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='rounded-sm px-2 pt-4 outline-none h-10'
                            name='email'
                            id='email'
                            type="email"
                        />

                        <label ref={refAssuntoLabel} className='text-[10px] relative top-4 left-2 z-10 text-gray-400' htmlFor="assunto">Assunto</label>
                        <input
                            ref={refAssunto}
                            onFocus={handleFocusAssunto}
                            onBlur={handleBlurAssunto}
                            value={assunto}
                            onChange={(e) => setAssunto(e.target.value)}
                            className='rounded-sm px-2 pt-4 outline-none h-10'
                            name='assunto'
                            id='assunto'
                            type="text"
                        />

                        <label ref={refMensagemLabel} className='text-[10px] relative top-4 left-2 z-10 text-gray-400' htmlFor="mensagem">Mensagem</label>
                        <textarea
                            ref={refMensagem}
                            onFocus={handleFocusMensagem}
                            onBlur={handleBlurMensagem}
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            className='outline-none pt-4 pl-2'
                            name="mensagem"
                            id='mensagem'
                            cols="30"
                            rows="05">
                        </textarea>
                    </div>
                    <button className='btn-primary-mobile mt-4'>Enviar mensagem</button>
                </form>
            </div>
        </section>
    )
}

export default Contato;