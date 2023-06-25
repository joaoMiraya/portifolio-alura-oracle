

function Footer() {
    const date = new Date();
    const anoAtual = date.getFullYear();
    const nome = "João Miraya"

    return (
        <footer className="bg-black flex justify-center p-2 mt-4">
            <p>Desenvolvido por {nome + ' '+ '-' + ' ' + anoAtual}</p>
        </footer>
    )
}

export default Footer;