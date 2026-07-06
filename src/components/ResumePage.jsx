import React from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"

import cv from "../assets/AI_ML_Engineer.pdf"

const ResumePage = () => {
    const experiences = [
        {
          id: 1,
          title: "AI-powered Plant Disease Detection System",
          company: "Agrovision",
          period: "Nov 2024 - Dec 2024",
          responsibilities: [
            "MobileNetV2-based AI system classifying 200+ images/min with 88% accuracy",
            "Reduced manual inspection time by 60% by automating disease detection in crops",
            "working on make it as continues learning model"
          ],
        },
        {
          id: 2,
          title: "Virtual Paint using Hand gestures",
          company: "Virtual Paint",
          period: "Aug 2024 - Sep 2024",
          responsibilities: [
            "Built a machine learning system to recognize handwritten digits with over 75% accuracy",
            "Processed 150+ digits/min, reducing classification errors significantly",
          ],
        },
        {
          id: 3,
          title: "Amazon Laptop Price Dataset (Kaggle)",
          company: "Kaggle",
          period: "Jun 2024 - July 2024",
          responsibilities: [
            "Created and published a structured dataset using Amazon API",
            "Performed data cleaning and NLP-based feature engineering for price prediction and classification tasks",
            "Improved data preprocessing, API handling, and ML pipeline experience",
          ],
        },
        {
          id: 4,
          title: "Sanket: Sign to Speech Translator",
          company: "Personal Project",
          period: "Jan 2025 - Apr 2025",
          responsibilities: [
            "Developed an AI-powered sign language recognition system using MediaPipe, MobileNetV2, Multi-Head Attention, and BiLSTM, achieving ~87% accuracy across 32 sign classes",
            "Implemented video preprocessing, frame normalization, data augmentation, and pose-based feature extraction to improve model robustness and real-world performance",
            "Built an end-to-end sign-to-speech pipeline using the WLASL dataset for real-time gesture recognition and speech translation",
        ],
      },
    ];
    
      const education = [
        {
          id: 1,
          degree: "Bachelor of Technology in Computer Science and Engineering",
          institution: "NIST University, Berhampur",
          year: "2022 - 2026",
          achievements: [
            "Participated in Smart India Hackathon 2024 with a focus on agricultural innovations",
            "Consistently ranked among the top 5 students in Academics",
          ],
        },
      ];
    
      const skills = [
        "Python",
        "C",
        "C#",
        "SQL",
        ".NET Framework",
        "WCF Services",
        "Web APIs",
        "SQL Server",
        "OpenCV",
        "TensorFlow & Keras",
        "Scikit-learn",
        "NumPy & Pandas",
        "Git",
        "GitHub",
        "AWS (S3, EC2, Bedrock)",
        "Language Model Fine-tuning",
        "Debugging",
        "Production Support",
      ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="min-h-screen bg-orange-50 md:pt-20 pt-0 pb-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}  
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-orange-50 shadow-lg rounded-lg overflow-hidden"
        >
          <div className="md:p-8 p-4">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="md:text-3xl text-xl font-bold text-gray-800">S Charan</h1>
                <p className="md:text-xl text-base text-gray-600">Aspiring AI and ML Engineer</p>
              </div>
              <motion.a
                href={cv}
                download="AI_ML_Engineer.pdf"
                className="flex items-center px-3 md:px-4 text-xs md:text-lg py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} className="mr-2 hidden md:inline" />
                Download <span className="md:inline hidden md:ml-2">CV</span>
              </motion.a>
            </div>

            <motion.section {...fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              {experiences.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">
                    {exp.company} | {exp.period}
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="text-gray-700">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.section>

            <motion.section {...fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600">
                    {edu.institution} | {edu.year}
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-700">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.section>

            <motion.section {...fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ResumePage

