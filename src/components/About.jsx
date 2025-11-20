import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { RiBriefcase4Fill } from "react-icons/ri";
import { SiBehance, SiLinkedin } from "react-icons/si";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[255px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#111522] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className={`w-20 h-20 object-contain ${
            title === "Diseñador de Personajes" ? "relative left-2" : ""
          }`}
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Resumen.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Soy estudiante de octavo semestre de Diseño Digital y me apasiona la animación 2D, la ilustración y el arte conceptual. Trabajo principalmente con Clip Studio Paint y After Effects para dar vida a historias y personajes mediante animación cuadro por cuadro.

Estoy comprometido con la creatividad, la disciplina y la mejora continua, siempre en busca de soluciones visuales innovadoras. Actualmente estudio en la Universidad Sergio Arboleda, donde he fortalecido mis habilidades artísticas y técnicas en ilustración, animación y diseño.

En mi tiempo libre, trabajo en proyectos personales para enriquecer mi portafolio y estudio inglés y japonés para ampliar mis oportunidades en la industria creativa internacional.
      </motion.p>
      
      <div className="mt-10 flex flex-wrap gap-4">
        <button
          className="px-6 py-3 text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-cyan-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          onClick={() =>
            window.open(
              "/CV-JUANGARZON.pdf",
              "_blank"
            )
          }
        >
          <span className="font-semibold flex gap-1.5 items-center"><RiBriefcase4Fill />Descargar CV</span>
        </button>

        <button
          className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() =>
            window.open(
              "https://www.behance.net/juangarzon34",
              "_blank"
            )
          }
        >
          <span className="font-semibold flex gap-1.5 items-center"><SiBehance />Behance</span>
        </button>

        <button
          className="px-6 py-3 text-white bg-gradient-to-r from-sky-600 to-sky-800 rounded-md shadow-md hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/juan-garzon-778510223",
              "_blank"
            )
          }
        >
          <span className="font-semibold flex gap-1.5 items-center"><SiLinkedin />LinkedIn</span>
        </button>
      </div>
      
      <div className="mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
