export default function Projects() {
    return (
      <section id="projects" className="p-8 bg-gray-200">
        <h2 className="text-2xl font-semibold text-center">Proyectos</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold">Proyecto 1</h3>
            <p>Descripción del proyecto...</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold">Proyecto 2</h3>
            <p>Descripción del proyecto...</p>
          </div>
        </div>
      </section>
    );
  }
  