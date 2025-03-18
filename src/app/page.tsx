import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido a mi Portafolio!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Explora mis habilidades, proyectos y formas de contacto.
      </p>
      <Link
        href="/hero"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Explorar
      </Link>
    </div>
  );
}
