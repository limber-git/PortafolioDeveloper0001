// src/components/Skills.tsx

export default function Skills() {
    return (
      <section id="skills" className="p-8">
        <h2 className="text-2xl font-semibold text-center">Habilidades</h2>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          <div className="bg-white p-4 shadow rounded-lg text-center">
            <h3 className="font-bold">React</h3>
          </div>
          <div className="bg-white p-4 shadow rounded-lg text-center">
            <h3 className="font-bold">Node.js</h3>
          </div>
          <div className="bg-white p-4 shadow rounded-lg text-center">
            <h3 className="font-bold">Tailwind CSS</h3>
          </div>
        </div>
      </section>
    );
  }
  