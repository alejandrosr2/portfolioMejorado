import { useState } from "react";
import proyecto from "../../assets/proyectoCoin.png";
import proyecto2 from "../../assets/proyectoDiario.png";
import proyecto3 from "../../assets/proyectoGallery.png";
import AnimatedBorder from "../../components/animatedBorder/AnimatedBorder";
import { Github } from "lucide-react";

const proyects = [
  { "img": proyecto, "title": "CoinObs", "tech": "JavaScript", "tech2": "React", "tech3": "Tailwind", "href": "https://coinobs.vercel.app/", "description": "CoinObs es una aplicación que consume datos en tiempo real desde una API para ofrecer información detallada sobre criptomonedas. Permite a los usuarios guardar activos en listas personalizadas, ya sea en favoritos o en su portafolio. Al añadir una criptomoneda al portafolio, se pueden ingresar datos como la fecha de compra, cantidad adquirida y más, lo que facilita un seguimiento preciso de la inversión. En la sección de portafolio, los usuarios pueden modificar el nombre de su cartera, añadir o eliminar monedas y visualizar la evolución de su balance general, así como la de cada activo en específico. CoinObs incluye un buscador avanzado en el navbar, que permite filtrar monedas dentro del Top 100, gestionado a través de un contexto global. Además, cuenta con herramientas como una calculadora de riesgo y un comparador de criptomonedas, que permite estimar el valor de un activo si tuviera la misma capitalización que otro. Al hacer clic en cualquier activo, el usuario es dirigido a una página individual con información detallada sobre la criptomoneda seleccionada. La aplicación es totalmente responsive, asegurando una experiencia fluida tanto en dispositivos móviles como en pantallas más grandes." },
  { "img": proyecto2, "title": "Planify", "href": "https://planify-drab.vercel.app/", "description": "Aplicación para gestionar tus tareas y proyectos de forma efectiva." },
  { "img": proyecto3, "title": "GalleryMood", "href": "https://galleymood.vercel.app/", "description": "Una galería interactiva para explorar imágenes según tu estado de ánimo." },
]

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <h1 className="border-b-2 border-zinc-400 pb-1 text-lg font-semibold">Proyectos</h1>
      <div className="pt-10 flex justify-between gap-2">
        {proyects.map((proyect, i) => {
          return (
            <div 
              key={i} 
              className="w-[32%] cursor-pointer" 
              onClick={() => handleProjectSelect(proyect)} 
            >
              <h2 className="text-center font-semibold pb-1">{proyect.title}</h2>
              <img 
                src={proyect.img} 
                alt={proyect.title} 
                className="rounded-lg border border-zinc-400 w-full h-full object-cover" 
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
                  href={proyect.href} 
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
        className={`mt-36 font-semibold bg-bgColor bg-opacity-50 p-2 rounded-lg ${selectedProject === null ?"text-center" : ""}`}>
        {selectedProject === null ? (
          <p>Selecciona un proyecto</p>
        ) : (
          <div>
            <div>
              <ul className="flex justify-center gap-8">
                <AnimatedBorder width="w-auto" variant="neon" animationSpeed="5s">
                  <li className="border rounded-full px-2 py-1 max-w-max">{selectedProject.tech}</li>
                </AnimatedBorder>
                <AnimatedBorder width="w-auto" variant="neon" animationSpeed="5s">
                  <li className="border rounded-full px-2 py-1 max-w-max">{selectedProject.tech2}</li>
                </AnimatedBorder>
                <AnimatedBorder width="w-auto" variant="neon" animationSpeed="5s">
                  <li className="border rounded-full px-2 py-1 max-w-max">{selectedProject.tech3}</li>  
                </AnimatedBorder>
              </ul>
            </div>
            <p className="mt-4">{selectedProject.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
