import Link from "next/link";
export default function Navbar() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Mi Portafolio</h1>
                <ul className="flex space-x-6">
                    <li><Link href="#about" className="hover:text-gray-300">Sobre mí</Link></li>
                    <li><Link href="#skills" className="hover:text-gray-300">Habilidades</Link></li>
                    <li><Link href="#projects" className="hover:text-gray-300">Proyectos</Link></li>
                    <li><Link href="#contact" className="hover:text-gray-300">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}