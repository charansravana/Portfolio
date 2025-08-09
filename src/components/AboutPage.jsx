import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Card, CardHeader } from "@/components/ui/card";

import { motion } from 'framer-motion';


const AboutPage = () => {
  const skills = [
    {
      name: " Tensor Flow ",
      icon: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M1.5 12L12 1.5 22.5 12 18 16.5v-6L12 6 6 10.5v9L1.5 15zM13.5 22.5v-9l4.5-3v9z" />
    </svg>
      )
    },
    {
      name: "Scikit learn",
      icon: (
    <svg viewBox="0 0 256 256" className="w-5 h-5 fill-current">
      <path d="M128 0C57.306 0 0 57.306 0 128s57.306 128 128 128 128-57.306 128-128S198.694 0 128 0zm0 20c59.555 0 108 48.445 108 108s-48.445 108-108 108S20 187.555 20 128 68.445 20 128 20z" />
    </svg>
      )
    },
    {
      name: "Python",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" />
        </svg>
      )
    },
    {
      name: "Pandas",
      icon: (
      <svg viewBox="0 0 256 256" className="w-5 h-5 fill-current">
      <path d="M64 0h16v256H64V0zm56 64h16v128h-16V64zm56-32h16v192h-16V32z" />
      </svg>

      )
    },
    {
      name: "PyTorch",
      icon: (
      <svg viewBox="0 0 256 256" className="w-5 h-5 fill-current">
      <path d="M127.9 0l-.6 92.2-47.1 47.1c-19.2 19.2-19.2 50.2 0 69.4s50.2 19.2 69.4 0 19.2-50.2 0-69.4l-10.6-10.6 16.9-16.9 10.6 10.6c28.4 28.4 28.4 74.5 0 103s-74.5 28.4-103 0-28.4-74.5 0-103L127.9 0z" />
    </svg>
      )
    },
    {
      name: "HTML/CSS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      )
    },
    {
      name: "Java",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
        </svg>
      )
    }
  ];

  const education = [
    {
      year: "2022-2026",
      degree: "B.Tech in Computer Science",
      institution: "NIST University",
      description: "Currently pursuing with focus on machine learning and software engineering"
    },
    {
      year: "2018-2020",
      degree: "12th Grade (Senior Secondary)",
      institution: "Dhatri Junior college",
      description: "Completed with 82% marks in Science stream"
    },
    {
      year: "2018",
      degree: "10th Grade",
      institution: "Swarna Bharathi English Medium High School",
      description: "Completed with 92% marks"
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 z-50 p-8 pb-28 md:pb-8 md:pt-32">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold">About Me</motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="text-xl text-gray-600">
            Hi i am Sravana Charan , an engineering student and aspiring Machine Learning Engineer with a passion for developing intelligent systems, leveraging data to build impactful, real-world solutions.
          </motion.h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  ">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="text-2xl font-semibold mb-4">My Journey</motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="text-gray-600 leading-relaxed">
                Currently pursuing my engineering degree while actively developing practical machine learning solutions. I specialize in building high-speed image classifiers for crop disease detection, handwritten digit recognition, and NLP-based price prediction using real-world datasets. Passionate about creating scalable, data-driven AI applications.
              </motion.h1>
            </div>

            {/* Education Timeline */}
            <div className="mt-8">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="text-2xl font-semibold mb-6">Education</motion.h1>
              <div className="space-y-6 ">
                {education.map((edu, index) => (
                  <Card key={index} className="relative border-l-4 border-black pl-4 hover:shadow-lg transition-all cursor-pointer">
                    <CardHeader className="space-y-1 p-4">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }} className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">{edu.degree}</h3>
                          <p className="text-sm text-gray-600">{edu.institution}</p>
                        </div>
                        <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded">
                          {edu.year}
                        </span>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }} className="text-sm text-gray-600">{edu.description}</motion.p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Skills</h2>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }} className="p-2 bg-white rounded-md shadow-sm">
                      {skill.icon}
                    </motion.div>
                    <span className="text-xs md:text-base font-semibold">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
              <div className="flex space-x-4">
                <a href='https://github.com/charansravana' target='_blank' className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
                  <Github className="w-6 h-6" />
                </a>

                <a href='https://www.linkedin.com/in/sravana-charan-b02700292/' target='_blank' className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:charansravana2003@gmail.com" target='_blank' className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xl font-medium">Interested in working together?</p>
            <a href="/projects">
            <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              View My Work
              <ExternalLink className="w-4 h-4" />
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;