"use client"

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/services" },
    { name: "Resumen", path: "/resume" },
    { name: "Trabajos", path: "/work" },
    { name: "Contacto", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className='text-[32px] text-[#00ff99]' />
            </SheetTrigger>
            <SheetContent className="flex flex-col px-8 py-6">
                {/* Agregar DialogTitle para accesibilidad */}
                <VisuallyHidden>
                    <DialogTitle>Navegación Móvil</DialogTitle>
                </VisuallyHidden>
                {/* Logo */}
                <div className='mt-16 mb-20 text-center text-2xl'>
                    <Link href={"/"}>
                        <h1 className='text-4xl font-semibold'>Smart<span className='text-[#00ff99]'>.jsx</span></h1>
                    </Link>
                </div>
                {/* Nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname ? 'text-[#00ff99] border-b-2 border-[#00ff99]' : ''} text-xl capitalize hover:text-[#00ff99] transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
