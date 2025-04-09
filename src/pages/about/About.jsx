import yo from "../../assets/yo3.png";
import AnimatedBorder from "../../components/animatedBorder/AnimatedBorder";

const About = () => {
  return (
    <div className="mb-12 lg:mb-0">
      <h1 className="border-b-2 border-zinc-400 pb-1 text-xl font-semibold">Sobre mí</h1>
      <div className="lg:flex lg:items-start lg:gap-8 border border-bgColor bg-bgColor p-4 bg-opacity-60 rounded-lg mt-10 ">
        <div className=" space-y-4">
          <p>
            Hola, me llamo Alejandro y siempre me han gustado dos cosas: la economía y la programación. Decidí hacer el grado de economía en la universidad y al cabo de los años empecé a mirar cosas sobre programación por curiosidad. Cuantas más cosas iba aprendiendo, más me iba gustando, hasta que al final tomé la decisión de invertir todos mis recursos en formarme para poder dedicarme a esto, realizando un bootcamp en desarrollo front end y varios cursos más.
          </p>
          <p>
            Uso herramientas como <strong>VS Code</strong>, <strong>Git</strong> y <strong>GitHub</strong> para el control de versiones, y <strong>Node.js</strong> como entorno para gestionar mis proyectos y dependencias. Además, estoy especializado en <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong> y <strong>Tailwind</strong>.
          </p>
          <p>
            Me considero una persona tranquila, metódica y resolutiva. Me gusta trabajar con un orden claro e intentar siempre que haya un buen ambiente general. No me afecta nada trabajar bajo presión o estrés.
          </p>
          <p>
            Desde hace más de un año, he estado desarrollando proyectos personales sin parar, enfocándome siempre en la mejora y el aprendizaje. Gracias a esto, a día de hoy me siento más que preparado para dar el paso al mundo profesional como desarrollador front end. Estoy convencido de que puedo aportar valor tanto a nivel técnico como humano, trabajando en equipo y contribuyendo al crecimiento de los proyectos en los que participe.
          </p>
        </div>
        <div className="">
          <AnimatedBorder rounded="rounded-lg" variant="blue" paddingEffect="p-[2px]">
            <img
              src={yo}
              alt="Foto personal"
              className="w-54 h-54 rounded-lg object-cover"
            />

          </AnimatedBorder>
          </div>
      </div>
    </div>
  )
}

export default About
