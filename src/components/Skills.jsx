import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { SKILLS } from "../constants/skills";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCard = ({ index, name, icon, label, shortDescription }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={name}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {label}
        </h3>
        <p className='text-secondary text-[14px] text-center'>
          {shortDescription}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Skills = () => {
  const skillsArray = Object.values(SKILLS);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mis habilidades</p>
        <h2 className={styles.sectionHeadText}>Tecnologías.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Aquí hay un resumen de las tecnologías y herramientas que domino. Siempre estoy aprendiendo y ampliando mi conjunto de habilidades.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {skillsArray.map((skill, index) => (
          <SkillCard key={skill.name} index={index} {...skill} />
        ))}
      </div>
      
      <span id="projects"></span>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
