
function Header({ handleBackToProjects, handleBackToAbout, handleBackToSkills, handleBackToHobbies, handleBackToFormation }) {
    return (
        <nav className="p-2">
            <div className="containerr flex justify-between items-center h-20">
                <a href="/">  <h1 className=" text-xl md:text-2xl xl:text-3xl ">João Miraya</h1></a>
                <ul className=" flex gap-4">
                    <li onClick={handleBackToAbout} className="nav-links hover:underline cursor-pointer hidden md:flex">Sobre Mim</li>
                    <li onClick={handleBackToSkills} className="nav-links hover:underline cursor-pointer hidden md:flex">Skills</li>
                    <li onClick={handleBackToHobbies} className="nav-links hover:underline cursor-pointer hidden md:flex">Hobbies</li>
                    <li onClick={handleBackToFormation} className="nav-links hover:underline cursor-pointer hidden md:flex">Formação</li>
                    <li onClick={handleBackToProjects} className="nav-links hover:underline cursor-pointer hidden md:flex">Projetos</li>
                    <a href="mailto:joaomiraya01@gmail.com?subject=Assunto do Email"><p className="font-bold text-sm md:text-xl ">joaomiraya01@gmail.com</p></a>
                </ul>
            </div>
        </nav>
    )
}

export default Header;