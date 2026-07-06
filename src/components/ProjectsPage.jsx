import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/thekeepnotes2.png';
import img2 from '../assets/virtual paint.png';
import img3 from '../assets/picaura.png'
import img4 from '../assets/Plant disease detection.png'
import img5 from '../assets/openroom-image.png';
import img7 from '../assets/Sanket.png';
import img8 from '../assets/laptop.png';
const projects = [
  {
    id: 1,
    title: 'Plant Disease Detection 🌿',
    description: 'Web app with an AI model using MobileNetV2 to detect crop diseases with 91% accuracy. Added early exit concept to reduce computational power and provide faster results by exiting the model pipeline when confident predictions are made.',
    image: img4,
    tags: ['MobileNetV2', 'Computer Vision', 'TensorFlow', 'Early Exit', 'Agritech', 'Web App'],
    github: 'https://github.com/yourusername/plant-disease-detector',
    link: 'https://agrovision-sih.vercel.app/'
  },
  {
    id: 2,
    title: 'Virtual Painter Using Hand Gestures 🎨',
    description: 'Built an interactive air-drawing app using OpenCV and MediaPipe. Users can draw, switch colors, adjust brush size, and clear the screen using only hand gestures — no touch or stylus needed!',
    image: img2,
    tags: ['Computer Vision', 'Gesture Recognition', 'OpenCV', 'MediaPipe', 'Python'],
    github: 'https://github.com/charansravana/Virtualpaint',
    link: 'https://youtu.be/XTVOZFPk7nI?si=2uF7gcTBEEYaxEDu'
  },
  {
  id: 3,
  title: "Sanket: Sign to Speech Translator 🤟",
  description:
    "Built a real-time sign-to-speech translator using WLASL, MediaPipe, MobileNetV2, Multi-Head Attention and BiLSTM, achieving ~87% accuracy across 32 sign classes.",
  image: img7, 
  tags: [
    "Deep Learning",
    "Computer Vision",
    "MediaPipe",
    "MobileNetV2",
    "BiLSTM",
    "Multi-Head Attention",
    "TensorFlow",
    "Sign Language"
  ],
  github: "https://github.com/yourusername/sanket-sign-to-speech",
  link: 'https://sanket-sih.vercel.app/'
},
 {
    id: 4,
    title: 'Amazon Price Prediction 🛒',
    description: 'Scraped product data using Amazon API, cleaned and engineered features using NLP for price prediction and category classification.',
    image: img8,
    tags: ['NLP', 'Data Scraping', 'Pandas', 'Machine Learning'],
    link: 'https://www.kaggle.com/datasets/sravanacharan/amazon-us-laptop-dataset2025'
  },

  // {
  //   id: 4,
  //   title: 'Early Exit in Deep Learning 🚀',
  //   description: 'Implemented early exit strategies in deep neural networks to reduce computational cost and latency. The model outputs predictions early when high confidence is achieved, saving resources and providing quicker responses.',
  //   image: img3,
  //   tags: ['Deep Learning', 'Early Exit', 'Efficiency', 'PyTorch', 'Research'],
  //   github: 'https://github.com/yourusername/early-exit-dnn',
  //   link: 'https://github.com/yourusername/early-exit-dnn'
  // },

];

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden h-[550px]"
  >
    <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-[200px] object-cover aspect-square" />
    <div className="px-6 py-2">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-200 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
      >
        Live Demo
      </a>
    </div>
  </motion.div>
);

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-orange-50 md:pb-1 px-4 md:pt-24 pt-5 pb-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

