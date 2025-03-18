export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Sobre mí</h1>

        <p className="text-lg text-gray-700 mb-8">
          ¡Hola! Soy un desarrollador web apasionado por crear soluciones eficientes y elegantes. Actualmente estoy
          trabajando en un proyecto web llamado <strong>ACS</strong> para el CBA, utilizando tecnologías como React,
          Vue y Node.js. A lo largo de mi carrera, he aprendido a dominar herramientas como Tailwind CSS, JavaScript y
          Git. Mi enfoque está en la creación de aplicaciones web interactivas y optimizadas.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Experiencia Profesional</h2>
          <ul className="list-inside list-disc text-left text-gray-700">
            <li>
              <strong>Desarrollador Full Stack</strong> - <span className="italic">CBA - Proyecto ACS</span> (2025 - presente)
              <p>Desarrollando un sistema de asistencia con tecnologías como React, Vue, Node.js y Express.</p>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Educación</h2>
          <ul className="list-inside list-disc text-left text-gray-700">
            <li>
              <strong>Ingenieria de Sistemas</strong> - <span className="italic">Universidad Privada Domingo Savio</span> (2018-2024)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Habilidades</h2>
          <ul className="list-inside list-disc text-left text-gray-700">
            <li>React</li>
            <li>Vue</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>Git</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
