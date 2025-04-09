import { useState } from "react";
import proyecto from "../../assets/proyectoCoin.png";
import proyecto2 from "../../assets/proyectoDiario.png";
import proyecto3 from "../../assets/proyectoGallery.png";
import AnimatedBorder from "../../components/animatedBorder/AnimatedBorder";
import { Github } from "lucide-react";

const proyects = [
  { 
    "img": proyecto, 
    "title": "CoinObs", 
    "techs": ["JavaScript", "React", "Tailwind"], 
    "href": "https://coinobs.vercel.app/", 
    "hrefCode": "https://github.com/alejandrosr2/coinobs", 
    "description": "Aplicación que muestra información en tiempo real consumiendo una API. Permite guardar activos en diferentes listas, ver el balance y evolución histórica de los activos seleccionados, compararlos y tiene una calculadora para calcular el riesgo en una posición de un trade. Usa un contexto para filtrar activos en el dashboard y es totalmente responsive." 
  },
  { 
    "img": proyecto2, 
    "title": "Planify", 
    "techs": ["JavaScript", "React", "Tailwind"], 
    "href": "https://planify-drab.vercel.app/", 
    "hrefCode": "https://github.com/alejandrosr2/planify", 
    "description": "App para gestionar tareas y proyectos de forma sencilla. Permite organizar actividades con fechas y prioridades, ademas de contar con un calendario donde apuntar tu rutina semanal. Cuenta con verificación de usuario y tiene varias cuentas entre las que puedes cambiar en todo momento. Es totalmente responsive." 
  },
  { 
    "img": proyecto3, 
    "title": "GalleryMood", 
    "techs": ["JavaScript", "React", "Tailwind"], 
    "href": "https://galleymood.vercel.app/", 
    "hrefCode": "https://github.com/alejandrosr2/galleryMood", 
    "description": "Es una web que cambia el tema según los colores predominantes de las fotografías. Cuenta con una opción para subir fotos, pausar o reanudar el paso de imágenes y ajustar la velocidad del cambio.Cuenta con un contexto para pasar los colores a todos los componentes y así poder aplicarlos o modificarlos de una forma más sencilla" 
  },
];

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <h1 className="border-b-2 border-zinc-400 pb-1 text-lg font-semibold">Proyectos</h1>
      <div className="pt-10 grid grid-cols-2 lg:flex lg:justify-between gap-2">
        {proyects.map((proyect, i) => {
          return (
            <div 
              key={i} 
              className="lg:w-[32%] cursor-pointer min-h-[220px]" 
              onClick={() => handleProjectSelect(proyect)} 
            >
              <h2 className="text-center font-semibold pb-1">{proyect.title}</h2>
              <img 
                src={proyect.img} 
                alt={proyect.title} 
                className="rounded-lg border border-zinc-400 w-full aspect-[4/3] object-cover" 
              />
              <div className="flex justify-center gap-6 mt-2">
                <a 
                  href={proyect.href} 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-center rounded-lg p-2 bg-bgColor bg-opacity-50 duration-300 flex gap-1 border border-bgColor"
                >
                    Visita la web
                </a>
                <a 
                  href={proyect.hrefCode} 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-center rounded-lg p-2 bg-bgColor bg-opacity-50 duration-300 flex gap-1 border border-bgColor"
                >
                  Code<Github/>
                </a>
              </div>
            </div>
          );
        })}
      </div>   
      <div 
        className={`mt-[70px] font-semibold  ${selectedProject === null ?"text-center" : ""}`}>
        {selectedProject === null ? (
          <p className="bg-bgColor bg-opacity-50 p-2 rounded-lg ">Selecciona un proyecto</p>
        ) : (
          <div>
            <div>
              <ul className="flex justify-center gap-8 mb-4">
                  {selectedProject.techs.map((tech, i) => (
                    <AnimatedBorder key={i} width="w-auto" variant="neon" animationSpeed="5s" paddingEffect="p-[0.3px]">
                      <li className="border rounded-full px-2 py-1 max-w-max">{tech}</li>
                    </AnimatedBorder>
                  ))}
              </ul>
            </div>   
            <div className="bg-bgColor bg-opacity-50 p-2 rounded-lg ">
              <p className="">{selectedProject.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
