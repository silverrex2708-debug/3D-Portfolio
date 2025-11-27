import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { achievements } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/styles";
import { textVariant } from "@/utils/motion";
import sergioLogo from "@/assets/sergio-logo.png";

const AchievementCard = ({ achievement }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#111522",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={achievement.year}
      iconStyle={{
        background: "#050816",
        border: "2px solid #fff",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={sergioLogo} 
            alt="Universidad Sergio Arboleda Logo" 
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[#8eadff] text-[24px] font-bold">{achievement.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {achievement.place}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Achievement = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Lo que he logrado hasta ahora
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Logros.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={`achievement-${index}`}
              achievement={achievement}
            />
          ))}
        </VerticalTimeline>
      </div>
      
      <span id="skills"></span>
    </>
  );
};

export default SectionWrapper(Achievement, "achievement");
