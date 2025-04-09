import { Link } from "react-router-dom"
import yo from "../../assets/yo3.png"
import html from "../../assets/html5.svg"
import css from "../../assets/css3.svg"
import js from "../../assets/javascript.svg"
import tailwind from "../../assets/tailwindcss.svg"
import react from "../../assets/react2.svg"
import proyecto from "../../assets/proyectoCoin2.png";
import proyecto2 from "../../assets/proyectoDiario2.png";
import proyecto3 from "../../assets/proyectoGallery2.png";
import { useEffect, useState } from "react"
import { Check, CornerDownRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import AnimatedBorder from "../../components/animatedBorder/AnimatedBorder"

const proyectos = [
  {
    img: proyecto,
    title: "CoinObs",
    shortDesc: "Consulta criptomonedas y tu portfolio",
  },
  {
    img: proyecto2,
    title: "Planify",
    shortDesc: "Organiza tus tareas y compromisos",
  },
  {
    img: proyecto3,
    title: "GalleryMood",
    shortDesc: "Cambia la temática de la web segun la foto",
  },
];

const HomePage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
  
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % proyectos.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [isHovered]);

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    };

  return (
    <div className="text-white ">
      {/* Bloque 1 */}
      <div className="lg:grid lg:grid-cols-2 flex flex-col gap-4">
        <div className="flex flex-col justify-between ">
          <div className="flex border justify-center border-zinc-400 bg-bgColor rounded-lg mb-4">
            <Link to={"/about"}>
              <div className="flex items-center gap-4 p-6 hover:scale-95 duration-500 cursor-pointer">
                <div>
                  <span className="relative inline-flex overflow-hidden rounded-full w-full p-[1px]">
                    {/* Borde animado */}
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51A7E8_0%,#1A4E8C_50%,#51A7E8_100%)]"></span>
                      <img
                        src={yo}
                        alt="Yo"
                        className="relative w-16 h-16 object-cover rounded-full border border-zinc-400"
                      />
                  </span>
                </div>
                <p className="text-2xl lg:text-3xl font-semibold ">
                  Hola, soy Alejandro
                </p>
              </div>
            </Link>
          </div>
          <div className="flex-1 h-full flex items-center justify-center p-4 border rounded-lg border-zinc-400 bg-bgColor  ">
            <div className="font-semibold">
              <p className="p-3 text-lg">
                Hola, me llamo Alejandro y soy un desarrollador front end junior. Estoy especializado en <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Tailwind</strong> y <strong>React</strong>. He realizado un bootcamp y varios cursos que me han  ayudado en mi formación. Desde hace más de un año estoy haciendo proyectos propios sin parar con la finalidad de afianzar mis conocimientos, mejorar mis fallos y ver donde tenía que poner mi empeño en mejorar. Por fin puedo decir a día de hoy que me siento preparado para aportar grandes cosas de valor en un entorno de trabajo. Si quieres saber más sobre mí, haz click <Link to={"/about"}><span className="font-bold cursor-pointer italic underline">aquí.</span></Link>
              </p>
            </div>
          </div>
        </div>
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative h-full w-full rounded-lg overflow-hidden group transition-all duration-500 border border-zinc-400 aspect-[4/3]  bg-bgColor">
          <img
            src={proyectos[currentIndex].img}
            alt={proyectos[currentIndex].title}
            className="w-full  h-full  object-center rounded-lg transition-opacity duration-500 group-hover:opacity-50"
          />
          {/* Overlay al hacer hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-center px-4">{proyectos[currentIndex].shortDesc}</p>
          </div>
        </div>
      </div>
      {/* Bloque 2 */}
      <div className="lg:grid lg:grid-cols-3 pt-4 gap-4">
        <div className="flex flex-col">
          {/*Relleno*/}
          <div className="flex-1 mb-4 lg:mb-2 flex items-center justify-center p-4 border rounded-lg border-zinc-400 bg-bgColor">
            <div className="text-xl font-semibold">
              <p>Junior</p>
              <p>Front End</p>
              <p>Developer</p>
            </div>
          </div>
          {/* Iconos */}
          <div className="flex flex-col border rounded-lg border-zinc-400 p-4 bg-bgColor mb-4 lg:mb-2">
            <div className="grid grid-cols-3 gap-4 place-items-center">
              <img src={html} alt="HTML5" className="w-8 h-8 filter invert hover:scale-110 duration-300" />
              <img src={css} alt="CSS3" className="w-8 h-8 filter invert hover:scale-110 duration-300" />
              <img src={js} alt="JavaScript" className="w-8 h-8 filter invert hover:scale-110 duration-300" />
            </div>
            <div className="grid grid-cols-2 gap-4 place-items-center mt-4">
              <img src={tailwind} alt="TailwindCSS" className="w-8 h-8 filter invert hover:scale-110 duration-300" />
              <img src={react} alt="React" className="w-8 h-8 filter invert hover:scale-110 duration-300" />
            </div>
          </div>
          <div className="flex items-center justify-center w-full mb-4 lg:mb-0">
            <AnimatedBorder variant="sonar" animationSpeed="6s" padding="p-1" paddingEffect="p-[2px]">
              <p className="text-center">Disponible para trabajar</p>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </AnimatedBorder>
          </div>
        </div>
        {/* Contacto */}
        <div className="bg-bgColor border border-zinc-400 rounded-lg flex justify-center p-4 mb-4 lg:mb-0">
          <div className="">       
            <h1 className="font-semibold text-lg">¿Quieres contactar conmigo?</h1>
            <ul className="mt-8 space-y-4">
              <li className="flex">
                  <button onClick={() => copyToClipboard('alejandro.solerr2@gmail.com')} className="hover:text-zinc-500 hover:scale-105 duration-300 flex font-semibold gap-5">
                      <Mail />Correo electrónico
                  </button>
                  {copied && <span className="flex items-center justify-center transition-all duration-300">¡Copiado!<Check className="size-4"/></span>}
              </li>
              <li>
                  <a href="https://github.com/alejandrosr2" className="hover:text-zinc-500 hover:scale-105 duration-300 flex font-semibold gap-5"><Github />GitHub</a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/alejandro-soler-rond%C3%A1n-10587b299/" className="hover:text-zinc-500 hover:scale-105 duration-300 flex font-semibold gap-5"><Linkedin />Linkedin</a>
              </li>
              <li>
                  <a href="https://github.com/alejandrosr2/curriculum/blob/main/CurriculumAlejandroSolerRondan.pdf" className="hover:text-zinc-500 hover:scale-105 duration-300 flex font-semibold gap-5"><FileText/>Currículum</a>
              </li>
            </ul>
          </div>
        </div>       
        <div className="border rounded-lg border-zinc-400 bg-bgColor flex justify-center items-center mb-20 lg:mb-0">
          <Link to={"/projects"}>
            <div className="hover:scale-105 duration-300">
              <p className="text-xl">
                Ver Proyectos
              </p>
              <p className=" flex justify-center">
                <CornerDownRight />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage

