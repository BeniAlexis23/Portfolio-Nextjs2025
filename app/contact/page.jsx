"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    { icon: <FaPhoneAlt />, title: "Celular", description: "+51 910922963" },
    { icon: <FaEnvelope />, title: "Email", description: "balh201317@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: "Dirección", description: "Av. Mariscal Benavides N° 322 San Vicente de Cañete" },
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.5, ease: "easeIn" } }}
            className="py-12 px-4 sm:px-8 lg:px-16 overflow-hidden"
        >
            <div className="container max-w-[1200px] mx-auto">
                <div className="flex flex-col xl:flex-row gap-10">

                    {/* Formulario */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-8 md:p-10 lg:p-12 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-[#00ff99]">Trabajemos juntos</h3>
                            <p className="text-white/60">Escríbeme para contratar mis servicios profesionales de ingeniería de sistemas.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="Nombres" />
                                <Input type="text" placeholder="Apellidos" />
                                <Input type="email" placeholder="Email" />
                                <Input type="tel" placeholder="Celular" />
                            </div>

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecciona un Servicio" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Servicios</SelectLabel>
                                        <SelectItem value="web">Desarrollo Web</SelectItem>
                                        <SelectItem value="uiux">Diseño UI/UX</SelectItem>
                                        <SelectItem value="logo">Diseño de Logo</SelectItem>
                                        <SelectItem value="facturacion">Facturación Electrónica</SelectItem>
                                        <SelectItem value="consultoria">Consultoría</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea className="h-[200px]" placeholder="Escribe tu mensaje..." />
                            <Button size="md" className="max-w-40">Enviar</Button>
                        </form>
                    </div>

                    {/* Información de Contacto */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#00ff99] rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
