"use client"

import { FaJava, FaJs, FaReact, FaVuejs, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNuxtdotjs } from "react-icons/si";

const about = {
    title: "Sobre Mi",
    description: "Ingeniero de Sistemas de la Universidad Nacional de Cañete, estudiante de posgrado en la Universidad Privada del Norte, Web Developer, Gestión de Calidad, Ciberseguridad, Transformación Digital, valores de responsabilidad, puntualidad, solidaridad y honestidad.",
    info: [
        {
            fieldName: "Nombre:",
            fieldValue: "Beni Luyo"
        },
        {
            fieldName: "Celular:",
            fieldValue: "+51 910922963"
        },
        {
            fieldName: "Experiencia:",
            fieldValue: "5+ años"
        },
        {
            fieldName: "Steam:",
            fieldValue: "Smart.jsx"
        },
        {
            fieldName: "Nacionalidad:",
            fieldValue: "Peruano"
        },
        {
            fieldName: "Email:",
            fieldValue: "balh201317@gmail.com"
        },
        {
            fieldName: "Freelance:",
            fieldValue: "Disponible"
        },
        {
            fieldName: "Leguajes:",
            fieldValue: "Español, Ingles"
        },
    ]
};

const experience = {
    icon: "/assets/resumen/badge.svg",
    title: "Mi Experiencia",
    description: "He trabajado en una variedad de roles en el campo de la Ingeniería y Tecnología. A continuación, se presentan algunos de los aspectos más destacados de mi experiencia laboral.",
    items: [
        {
            company: "Universidad Nacional de Cañete",
            position: "Responsable de Calidad y Desarrollador Web",
            duration: "2022 - Present",
        },
        {
            company: "INEL SOLUCIONES TI E.I.R.L.",
            position: "CTO - Chief Technology Officer",
            duration: "2024 - Present",
        },
        {
            company: "Ministerio de Salud",
            position: "Administrador de Plataforma Educativa",
            duration: "2021 - 2022",
        },
        {
            company: "Proyecto: Smart Cities Simulation",
            position: "Asistente Informatico",
            duration: "2018 - 2020",
        },
    ]
};

const education = {
    icon: "/assets/resumen/cap.svg",
    title: "Mi Educación",
    description: "Cuento con una sólida formación en Ingeniería de Sistemas e Informática. A continuación, se presentan algunos de los aspectos más destacados de mi formación.",
    items: [
        {
            institution: "Universidad Privada del Norte",
            degree: "Maestría en Ingeniería de Sistemas con Mención en Gerencia de Sistemas de Información.",
            duration: "2023 - 2024",
        },
        {
            institution: "Universidad Nacional de Cañete",
            degree: "Ingeniería de Sistemas",
            duration: "2014 - 2018",
        },
        {
            institution: "Universidad Privada del Norte",
            degree: "Especialista en Liderazgo para la Transformación Digital",
            duration: "2024",
        },
        {
            institution: "Udemy",
            degree: "React desde cero",
            duration: "2024",
        },
        {
            institution: "Universidad Privada del Norte",
            degree: "Especialista en Transformación Digital y Ciencia de Datos.",
            duration: "2024",
        },
        {
            institution: "Udemy",
            degree: "Full Stack JavaScript Developer en Español.",
            duration: "2023",
        },
        {
            institution: "IBM",
            degree: "Data Fundamentals.",
            duration: "2023",
        },
        {
            institution: "Udemy",
            degree: "Fundamentos de VueJS 3.",
            duration: "2021",
        },
        {
            institution: "Udemy",
            degree: "Vue 3 desde cero.",
            duration: "2021",
        },
        {
            institution: "Instituto para la Calidad - PUCP",
            degree: "Curso - Taller en Interpretación de Estándares 7 y 8 SINEACE y su Relación con la ISO 21001.",
            duration: "2020",
        },
        {
            institution: "Instituto para la Calidad - PUCP",
            degree: "Curso - Taller en Interpretación de los Indicadores RAI y su Relación con la ISO 14001:2015.",
            duration: "2020",
        },
        {
            institution: "ED Team",
            degree: "Git desde cero 2020.",
            duration: "2020",
        },
        {
            institution: "Google Activate",
            degree: "Curso Cloud Computing.",
            duration: "2019",
        },
        {
            institution: "UTEC - Universidad de Ingeniería y Tecnología",
            degree: "Big Data.",
            duration: "2019",
        },
    ]
};

const skills = {
    title: "Mis Skills",
    description: "Tengo experiencia trabajando con diversas tecnologías y frameworks. A continuación, se presentan algunos de mis puntos fuertes.",
    skillsList: [
        {
            icon: <SiNuxtdotjs />,
            name: "Nuxt JS",
        },
        {
            icon: <FaVuejs />,
            name: "Vue JS",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next JS",
        },
        {
            icon: <FaReact />,
            name: "React JS",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <FaNode />,
            name: "Node JS",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.5, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto px-6 xl:px-0 xl:max-w-[1280px]">

                <Tabs defaultValue="experience" className="flex flex-col lg:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experiencia</TabsTrigger>
                        <TabsTrigger value="education">Educación</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">Acerca de mi</TabsTrigger>
                    </TabsList>
                    {/* Content */}
                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-[#00ff99]">{item.duration}</span>
                                                    <h3 className="max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-[#00ff99]">{item.duration}</span>
                                                    <h3 className="max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillsList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-[#00ff99] transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-between xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume
