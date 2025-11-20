
import {
  mobile,
  backend,
  creator,
  web,
  coursera,
  fcc,
  hr,
  cp,
  ideas,
  concepts,
  designs,
  code,
} from "../assets";

import entornosUniversitarios from "../assets/Illustrations/Colores With Shader.jpg";
import furinaFanArt from "../assets/Illustrations/Furina.jpg";
import anomaliaMesoamericana from "../assets/Illustrations/Anomalia.jpeg";
import teselacionMesoamericana from "../assets/Illustrations/Teselación.jpeg";
import escorpionGeometrizado from "../assets/Illustrations/Escorpion.jpg";
import expulsionAves from "../assets/Illustrations/Expulsar a las Aves.jpeg";
import shinobu from "../assets/Illustrations/Shinobu Pintura.jpg";
import rumboDesconocido from "../assets/Illustrations/Rumbo Hacia lo Desconocido.jpeg";

import animacionFinal from "../assets/Animations/Animación Final Tercer Corte.mp4";
import armilla from "../assets/Animations/Armilla Ciudad Invisible.MP4";
import dragonSofa from "../assets/Animations/Año del Dragon Sofa.MP4";
import cortoAnimado from "../assets/Animations/Corto Animado - Un Espectaculo para entretenerse.mp4";
import guerraCampal from "../assets/Animations/Guerra campal - Stop Motión (1).mp4";
import rotoscopia from "../assets/Animations/Rotoscopia Baile 10S.mp4";


export const navLinks = [
  {
    id: "about",
    title: "Sobre mí",
  },
  {
    id: "achievement",
    title: "Logros",
  },
  {
    id: "animations",
    title: "Animaciones",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Ilustrador",
    icon: web,
  },
  {
    title: "Animador 2D",
    icon: mobile,
  },
  {
    title: "Diseñador de Personajes",
    icon: backend,
  },
  {
    title: "Artista de Storyboard",
    icon: creator,
  },
];

const achievements = [
  {
    title: ["Concurso de Animación"],
    company_name: "Animake",
    icon: fcc,
    iconBg: "#383E56",
    date: "Mayo 2023",
    points: ["Ganador del primer lugar en la categoría de cortometraje de animación."],
    credential: ["#"],
  },
];

const projects = [
  {
    name: "Ilustraciones de Entornos Universitarios",
    description:
      "Ilustraciones inspiradas en entornos reales de mi universidad, desarrolladas a partir de un proceso que inicia con el boceto base (sketch), seguido por la aplicación de colores planos y la incorporación de detalles finales para lograr una composición visual equilibrada y atractiva. El enfoque se centró en mantener una estética limpia y profesional, evitando la sobrecarga de texturas y efectos para resaltar la claridad del diseño y la armonía.",
    tags: [
      { name: "Sketch", color: "blue-text-gradient" },
      { name: "Illustration", color: "green-text-gradient" },
      { name: "Drawing", color: "pink-text-gradient" },
      { name: "DigitalArt", color: "orange-text-gradient" },
      { name: "Environment", color: "violet-text-gradient" },
      { name: "Background", color: "blue-text-gradient" },
    ],
    image: entornosUniversitarios,
    source_code_link: "https://www.behance.net/gallery/238223781/Ilustraciones-de-Entornos-Universitarios",
  },
  {
    name: "Furina FanArt",
    description:
      "Ilustración del personaje Furina, inspirada en el estilo visual de juegos gacha. El diseño destaca líneas limpias, detalles finos y una armoniosa combinación entre su cabello blanco ondulado y su atuendo azul. La expresión dulce y confiada, junto con los ojos azules llamativos, refuerza su elegancia. Las sombras suaves y los detalles en las manos aportan sofisticación, mientras que el fondo simple centra toda la atención en el personaje. La pieza busca transmitir una estética fresca, serena y equilibrada.",
    tags: [
      { name: "FanArt", color: "blue-text-gradient" },
      { name: "Illustration", color: "green-text-gradient" },
      { name: "DigitalArt", color: "pink-text-gradient" },
      { name: "Drawing", color: "orange-text-gradient" },
      { name: "GenshinImpact", color: "violet-text-gradient" },
      { name: "Anime", color: "blue-text-gradient" },
    ],
    image: furinaFanArt,
    source_code_link: "https://www.behance.net/gallery/223323341/Furina-FanArt",
  },
  {
    name: "Anomalia Mesoamericana",
    description:
      "Una anomalía realizada a base de una cultura mesoamericana, conformada por estatuas de piedra de color verde, donde dos anomalías de diferente color y forma se pueden encontrar, lo que sorprenderá al lector al descubrir esas diferencias en la arquitectura mesoamericana.",
    tags: [
      { name: "Illustration", color: "blue-text-gradient" },
      { name: "DigitalArt", color: "green-text-gradient" },
      { name: "Adobe Illustrator", color: "pink-text-gradient" },
    ],
    image: anomaliaMesoamericana,
    source_code_link: "https://www.behance.net/gallery/223765151/Anomalia-Mesoamericana",
  },
  {
    name: "Teselación mesoamericana",
    description:
      "Una teselación realizada a base de una cultura mesoamericana, conformada por serpientes de diferentes colores, acompañada de un fondo café con patrones de trazos que se encuentran en arquitecturas y repisas mesoamericanas.",
    tags: [
      { name: "Illustration", color: "blue-text-gradient" },
      { name: "DigitalArt", color: "green-text-gradient" },
      { name: "Adobe Illustrator", color: "pink-text-gradient" },
    ],
    image: teselacionMesoamericana,
    source_code_link: "https://www.behance.net/gallery/223764457/Teselacion-mesoamericana",
  },
  {
    name: "Escorpión Geometrizado",
    description:
      "Silueta de un escorpión diseñada con un estilo geométrico, compuesta por patrones ornamentales simétricos en negro sobre fondo blanco. Las formas curvas y angulares decoran todo el cuerpo del escorpión, dándole un aspecto simbólico y estilizado que evoca arte precolombino o tatuajes polinesios.",
    tags: [
      { name: "Drawing", color: "blue-text-gradient" },
      { name: "Illustration", color: "green-text-gradient" },
      { name: "ArtWork", color: "pink-text-gradient" },
      { name: "Geometric", color: "orange-text-gradient" },
      { name: "Shapes", color: "violet-text-gradient" },
      { name: "Animal", color: "blue-text-gradient" },
      { name: "BlackAndWhite", color: "green-text-gradient" },
    ],
    image: escorpionGeometrizado,
    source_code_link: "https://www.behance.net/gallery/225106047/Escorpion-Geometrizado",
  },
  {
    name: "Expulsión de las aves del Estínfalo",
    description:
      "Esta obra, inspirada en una de las tareas de Hércules —la expulsión de las aves del Estínfalo—, reinterpreta el mito desde una mirada contemporánea. Con un estilo de mosaico y una paleta vibrante, se representa a la izquierda un grupo de aves multicolores que simbolizan la libertad, la vida y la diversidad. A la derecha, una figura humana levanta su brazo en un gesto de autoridad, aludiendo al héroe mitológico, pero en un entorno marcado por el control y la rigidez. La composición invita a reflexionar sobre la relación entre humanidad y naturaleza, y cuestiona si es justo expulsar lo vivo de lo que consideramos “ordenado”.",
    tags: [
      { name: "Colorful", color: "blue-text-gradient" },
      { name: "Illustration", color: "green-text-gradient" },
      { name: "Drawing", color: "pink-text-gradient" },
      { name: "ArtWork", color: "orange-text-gradient" },
      { name: "Painting", color: "violet-text-gradient" },
    ],
    image: expulsionAves,
    source_code_link: "https://www.behance.net/gallery/223763059/Expulsion-de-las-aves-del-Estinfalo",
  },
  {
    name: "FanArt de Shinobu Kochō – Kimetsu no Yaiba",
    description:
      "Ilustración digital inspirada en el personaje ficticio Shinobu Kochō, perteneciente al anime Kimetsu no Yaiba. Esta obra fue creada utilizando una paleta limitada de 24 colores cuidadosamente seleccionados, lo que le otorga una estética estilizada que recuerda a una pintura digital con apariencia cel-shading. La composición busca capturar tanto la gracia visual del personaje como la atmósfera serena y etérea que la rodea en la serie. Las texturas, el contraste de luces y sombras, y el uso deliberado del color enfatizan su presencia delicada pero poderosa.",
    tags: [
      { name: "Illustration", color: "blue-text-gradient" },
      { name: "DigitalArt", color: "green-text-gradient" },
      { name: "Artwork", color: "pink-text-gradient" },
      { name: "FanArt", color: "orange-text-gradient" },
      { name: "Anime", color: "violet-text-gradient" },
      { name: "Kimetsu no Yaiba", color: "blue-text-gradient" },
    ],
    image: shinobu,
    source_code_link: "https://www.behance.net/gallery/228112981/FanArt-de-Shinobu-Kocho-Kimetsu-no-Yaiba",
  },
  {
    name: "Rumbo Hacia lo Desconocido",
    description:
      'Ilustración analogá de contraste en positivo y negativo, titulada "Rumbo Hacia lo Desconocido" donde un barco escondido en la oscuridad es alumbrado por un faro que muestra la silueta del barco. El espacio negativo (las áreas blancas) está utilizado para crear formas y detalles como las nubes, el faro, las olas y algunas áreas del barco. El espacio positivo (las áreas negras) define los elementos principales como el barco, las aves y el faro.',
    tags: [
      { name: "Drawing", color: "blue-text-gradient" },
      { name: "Illustration", color: "green-text-gradient" },
      { name: "Analog", color: "pink-text-gradient" },
      { name: "BlackAndWhite", color: "orange-text-gradient" },
    ],
    image: rumboDesconocido,
    source_code_link: "https://www.behance.net/gallery/223747243/Rumbo-Hacia-lo-Desconocido",
  },
];

const animations = [
  {
    name: "Baile entre la nieve y el hielo",
    description: "Una animación increíble.",
    tags: [{ name: "2D Animation", color: "blue-text-gradient" }],
    video: animacionFinal,
    source_code_link: "https://www.behance.net/gallery/238641501/Baile-entre-la-nieve-y-el-hielo-(Animacion)",
  },
  {
    name: "Armilla Ciudad Invisible",
    description: "Una animación increíble.",
    tags: [{ name: "2D Animation", color: "green-text-gradient" }],
    video: armilla,
    source_code_link: "https://www.behance.net/gallery/225209379/Ciudad-Invisible-Armilla",
  },
  {
    name: "Año del Dragon Sofa",
    description: "Una animación increíble.",
    tags: [{ name: "2D Animation", color: "pink-text-gradient" }],
    video: dragonSofa,
    source_code_link: "https://www.behance.net/gallery/225208995/Ano-nuevo-del-Dragon-de-Fuego",
  },
  {
    name: "Corto Animado - Un Espectaculo para entretenerse",
    description: "Una animación increíble.",
    tags: [{ name: "2D Animation", color: "orange-text-gradient" }],
    video: cortoAnimado,
    source_code_link: "https://www.behance.net/gallery/237059885/Animacion-Un-Espectaculo-para-Entretenerse",
  },
  {
    name: "Guerra campal - Stop Motión",
    description: "Una animación increíble.",
    tags: [{ name: "Stop Motion", color: "violet-text-gradient" }],
    video: guerraCampal,
    source_code_link: "https://www.behance.net/gallery/233894029/Guerra-Campal-Stop-Motion",
  },
  {
    name: "Rotoscopia Baile",
    description: "Una animación increíble.",
    tags: [{ name: "Rotoscoping", color: "blue-text-gradient" }],
    video: rotoscopia,
    source_code_link: "https://www.behance.net/gallery/234826373/Animacion-Rotoscopia-10-Segundos",
  },
];


const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Conceptos",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Diseños",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Arte", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Conceptos", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Diseños", imgPath: designs, font: "'Georgia', serif" },
  { text: "Arte", imgPath: code, font: "'Source Code Pro', monospace" },
];

export { achievements, projects, services, words, animations };
