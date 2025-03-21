import Link from "next/link";

import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/BeniAlexis23" },
    { icon: <FaTwitter />, path: "https://x.com/SmartVue_23" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/beni.lh23/" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/b-luyo23/" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles} target="_blank" >
                    {item.icon}
                </Link>
            ))}
        </div>
    )
}

export default Social
