"use client";

import CountUp from "react-countup";

const stats = [
    { num: 5, text: "Años de experiencia" },
    { num: 12, text: "Proyectos completados" },
    { num: 3, text: "Certificaciones" },
    { num: 500, text: "Commits en GitHub" }
];

const Stats = () => {
    return (
        <section className="pt-0 pb-10">
            <div className="container mx-auto px-6 xl:px-0 xl:max-w-[1280px]">
                <div className="flex flex-wrap gap-6 justify-center xl:justify-between">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 text-center xl:text-left"
                        >
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className="text-white/80 max-w-[120px]">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
