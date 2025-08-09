import React from "react"
import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/dot-pattern"
import { LineShadowText } from "@/components/ui/line-shadow-text"


import { useTheme } from "next-themes"
import HyperText from "@/components/ui/hyper-text"
import { ShinyButton } from "@/components/ui/shiny-button"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { motion } from "framer-motion"
import myphoto from "../assets/myphoto.png"
import { Github, Linkedin } from "lucide-react"

function HomePage() {
  const theme = useTheme()
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black"

  return (
    <div>
      {/* hero */}
      <div className="flex flex-col lg:flex-row min-h-screen justify-center w-full md:pt-20 pt-0 pb-14 md:pb-0 px-4 lg:px-0">
        {/*left*/}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative bg-transparent flex h-full lg:h-[500px] w-full flex-col items-center lg:items-start justify-center overflow-hidden rounded-lg">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="z-50 lg:ml-48 whitespace-pre-wrap text-center text-xl font-medium tracking-tighter text-black dark:text-white"
            >
              Hello <span className="animate-pulse">👋</span>
            </motion.p>
            <p className="z-50 whitespace-pre-wrap flex flex-row lg:ml-48 text-center text-4xl lg:text-5xl font-medium font-sans md:items-baseline items-center tracking-tighter text-black dark:text-white">
              I'm <HyperText>Charan</HyperText>
            </p>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-balance z-50 bg-amber-100 rounded-tl-xl pr-0 rounded-tr-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:ml-48 mt-3 font-semibold leading-none tracking-tighter text-center lg:text-left"
            >
              <span className="pr-2">Machine Learning </span>
              <LineShadowText className="italic bg-orange-200 rounded-tr-3xl pr-4 pl-2" shadowColor={shadowColor}>
                Engineer
              </LineShadowText>
            </motion.h1>

            <div className="flex flex-row gap-4 items-center justify-center lg:justify-start lg:ml-48 mt-11 z-50">
              <a href="mailto:charansravana2003@gmail.com">
                <RainbowButton className="transition-all hover:rounded-2xl">
                  <ShinyButton className="text-white px-4 py-1">Hire Me</ShinyButton>
                </RainbowButton>
              </a>

              <a
                href="https://github.com/charansravana"
                target="_blank"
                className="bg-orange-100 hover:bg-orange-200 transition-all rounded-full p-2"
                rel="noreferrer"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/in/sravana-charan-b02700292"
                target="_blank"
                className="bg-orange-100 hover:bg-orange-200 transition-all rounded-full p-2"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </div>

            <DotPattern className={cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]")} />
          </div>
        </div>

        {/*right*/}
        <div className="flex justify-center lg:justify-start">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={myphoto}
            alt=""
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-b-4 border-green-900 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage

