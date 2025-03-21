import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-6 md:px-20">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-48 xl:pt-8 xl:pb-24">
          {/*text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Ingeniero de Sistemas</span>
            <h1 className="h1 mb-6">Hola! soy <br /> <span className="text-[#00ff99]">Beni Luyo</span></h1>
            <p className="max-w-[500px] mb-9 text-justify text-white/80">Desarrollador Front-end con 5 años de experiencia realizando interfaces de usuarios responsivas e interactivas consumiendo
              APIs, con conocimientos en los leguajes JavaScript y Python, frameworks como Vue, Nuxt js, Laravel y la biblioteca de React.
              También cuento con experiencia en SIG, Aceditación y Gestión de Calidad con estándares ISO. Tengo capacidad de rápido
              aprendizaje, trabajo en equipo y valores de respeto, solidaridad, puntualidad y responsabilidad.</p>
            {/* social buttons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://drive.google.com/file/d/1o6SRFHy_Frf0m--lyyPQZ_rSEKilOSRG/view?usp=sharing" target="_blank">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 cursor-pointer">
                  <span>Descarga mi CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-10 h-10 border border-[#00ff99] rounded-full flex justify-center items-center text-[#00ff99] text-base hover:bg-[#00ff99] hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/*photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
