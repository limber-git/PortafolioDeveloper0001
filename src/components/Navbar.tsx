import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-11/12 py-4 rounded-full shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 hover:scale-105">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold">
        <Link href="/">Mi Portafolio</Link>
        </div>
        <ul className="flex gap-8 text-lg">
        <li>
          <Link href="/about" className="hover:text-yellow-400 transition duration-300">Sobre mí</Link>
        </li>
        <li>
          <Link href="/skills" className="hover:text-yellow-400 transition duration-300">Habilidades</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-yellow-400 transition duration-300">Proyectos</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-yellow-400 transition duration-300">Contacto</Link>
        </li>
        </ul>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
