import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import { animations } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const AnimationCard = ({
  index,
  name,
  description,
  tags,
  video,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#111522] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[200px]">
          <video
            src={video}
            className="w-full h-full object-cover rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Animations = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mi portafolio de</p>
        <h2 className={`${styles.sectionHeadText}`}>Animaciones.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          A continuación, una muestra de mis animaciones. Cada proyecto es una oportunidad para contar una historia y explorar nuevas técnicas. Desde animaciones 2D hasta stop motion, me apasiona dar vida a las ideas.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {animations.map((anim, index) => (
          <AnimationCard key={`animation-${index}`} index={index} {...anim} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Animations, "animations");
