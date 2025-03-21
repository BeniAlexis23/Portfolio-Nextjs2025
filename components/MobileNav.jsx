"use client"

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className='text-[32px] text-[#00ff99]' />
            </SheetTrigger>
            <SheetContent className="flex flex-col px-8 py-6">
                {/*Logo */}
                <div className='mt-16 mb-20 text-center text-2xl'>
                    <Link href={"/"}>
                        <h1 className='text-4xl font-semibold'>Smart<span className='text-[#00ff99]'>.jsx</span></h1>
                    </Link>
                </div>
                {/*Nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathname ? 'text-[#00ff99] border-b-2 border-[#00ff99]' : ''} text-xl capitalize hover:text-[#00ff99] transition-all`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;
