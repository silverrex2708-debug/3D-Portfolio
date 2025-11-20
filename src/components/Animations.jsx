import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import Slider from "react-slick";
import { SiBehance } from "react-icons/si";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
  source_code_link,
}) => {
  return (
    <motion.div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#111522] p-5 rounded-2xl w-full sm:max-w-4xl mx-auto"
      >
        <div className="relative w-full aspect-video bg-black rounded-xl">
          <video
            src={video}
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              title="Ver en Behance"
            >
              <SiBehance
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
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

      <div className="mt-20">
        <Slider {...settings}>
          {animations.map((anim, index) => (
            <AnimationCard key={`animation-${index}`} index={index} {...anim} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper(Animations, "animations");
