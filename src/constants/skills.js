import photoshop from "../assets/Photoshop Logo.png";
import illustrator from "../assets/Illustrator Logo.png";
import figma from "../assets/tech/figma.svg";
import blender from "../assets/tech/blender.svg";
import clipstudiopaint from "../assets/Clip Studios Logo.png";
import aftereffects from "../assets/After Logo.png";
import canva from "../assets/tech/canva.svg";
import word from "../assets/Word Logo.png";
import excel from "../assets/Excel Logo.png";
import powerpoint from "../assets/Power Point Logo.png";
import premierepro from "../assets/Premiere Pro Logo.png";
import audition from "../assets/Audition Logo.png";

// Skill names enum
export const SkillNames = {
  PHOTOSHOP: "photoshop",
  ILLUSTRATOR: "illustrator",
  FIGMA: "figma",
  BLENDER: "blender",
  CLIP_STUDIO_PAINT: "clipstudiopaint",
  AFTER_EFFECTS: "aftereffects",
  CANVA: "canva",
  WORD: "word",
  EXCEL: "excel",
  POWERPOINT: "powerpoint",
  PREMIERE_PRO: "premierepro",
  AUDITION: "audition",
};

// Skill type (for reference)
// id: number, name: string, label: string, shortDescription: string, color: string, icon: string

export const SKILLS = {
  [SkillNames.PHOTOSHOP]: {
    id: 1,
    name: SkillNames.PHOTOSHOP,
    label: "Photoshop",
    shortDescription: "Software de edición de imágenes y diseño gráfico.",
    color: "#31A8FF",
    icon: photoshop,
  },
  [SkillNames.ILLUSTRATOR]: {
    id: 2,
    name: SkillNames.ILLUSTRATOR,
    label: "Illustrator",
    shortDescription: "Software de diseño de gráficos vectoriales.",
    color: "#FF9A00",
    icon: illustrator,
  },
  [SkillNames.FIGMA]: {
    id: 3,
    name: SkillNames.FIGMA,
    label: "Figma",
    shortDescription: "Herramienta de diseño de interfaces y prototipado.",
    color: "#F24E1E",
    icon: figma,
  },
  [SkillNames.BLENDER]: {
    id: 4,
    name: SkillNames.BLENDER,
    label: "Blender",
    shortDescription: "Software de modelado, animación y renderizado 3D.",
    color: "#E87D0D",
    icon: blender,
  },
  [SkillNames.CLIP_STUDIO_PAINT]: {
    id: 5,
    name: SkillNames.CLIP_STUDIO_PAINT,
    label: "Clip Studio Paint",
    shortDescription: "Software para ilustración, cómic y animación.",
    color: "#1898E6",
    icon: clipstudiopaint,
  },
  [SkillNames.AFTER_EFFECTS]: {
    id: 6,
    name: SkillNames.AFTER_EFFECTS,
    label: "After Effects",
    shortDescription: "Software de motion graphics y efectos visuales.",
    color: "#9999FF",
    icon: aftereffects,
  },
  [SkillNames.CANVA]: {
    id: 7,
    name: SkillNames.CANVA,
    label: "Canva",
    shortDescription: "Plataforma de diseño gráfico simplificado.",
    color: "#00C4CC",
    icon: canva,
  },
  [SkillNames.WORD]: {
    id: 8,
    name: SkillNames.WORD,
    label: "Word",
    shortDescription: "Procesador de textos de Microsoft Office.",
    color: "#2B579A",
    icon: word,
  },
  [SkillNames.EXCEL]: {
    id: 9,
    name: SkillNames.EXCEL,
    label: "Excel",
    shortDescription: "Hoja de cálculo de Microsoft Office.",
    color: "#217346",
    icon: excel,
  },
  [SkillNames.POWERPOINT]: {
    id: 10,
    name: SkillNames.POWERPOINT,
    label: "PowerPoint",
    shortDescription: "Software de presentaciones de Microsoft Office.",
    color: "#B7472A",
    icon: powerpoint,
  },
  [SkillNames.PREMIERE_PRO]: {
    id: 11,
    name: SkillNames.PREMIERE_PRO,
    label: "Premiere Pro",
    shortDescription: "Software de edición de video profesional.",
    color: "#9999FF",
    icon: premierepro,
  },
  [SkillNames.AUDITION]: {
    id: 12,
    name: SkillNames.AUDITION,
    label: "Audition",
    shortDescription: "Software de edición y postproducción de audio.",
    color: "#9999FF",
    icon: audition,
  },
};
