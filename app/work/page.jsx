"use client"

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Proyecto Frontend",
        title: "Project 1",
        description: "Mi portafolio web personal construido con Next.js y Tailwind CSS.",
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
        image: "/assets/work/thumb1.png",
        live: "https://landing-next-2025.netlify.app/",
        github: "https://github.com/BeniAlexis23/Next-landing",
    },
    {
        num: "02",
        category: "Proyecto Full Stack",
        title: "Project 2",
        description: "Sistema web desarrollado para la Facultad de Ingeniería de la UNDC, utilizando React, Tailwind CSS, Mongo DB y Node JS.",
        stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "Mongo DB" }, { name: "Node.js" }],
        image: "/assets/work/thumb2.png",
        live: "https://fi.undc.edu.pe/",
        github: "https://github.com/BeniAlexis23/Sistema-FI-UNDC-2024",
    },
    {
        num: "03",
        category: "Proyecto Backend",
        title: "Project 3",
        description: "CRUD web utilizando APIs con Java, Sprint Boot y Oracle.",
        stack: [{ name: "Java" }, { name: "Sprint Boot" }, { name: "Oracle DB" }],
        image: "/assets/work/thumb3.png",
        live: "#",
        github: "https://github.com/BeniAlexis23/CRUD-java-oracle",
    },
]

const Work = () => {

    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.5, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 px-4 sm:px-8 lg:px-16"
        >
            <div className="container max-w-[1200px] mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500 capitalize">{project.category}</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-[#00ff99]">{item.name}{index !== project.stack.length - 1 && ","}</li>
                                    )
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                {/*live project button */}
                                <Link href={project.live} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-[#00ff99]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Demo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/*github project button */}
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-[#00ff99]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Repositorio Github</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-ful h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/*buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-[#00ff99] hover:bg-[#00ff99]-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work