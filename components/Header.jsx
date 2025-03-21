import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-6 xl:py-6 text-white">
            <div className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8">
                {/* Logo */}
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold">
                        Smart<span className="text-[#00ff99]">.jsx</span>
                    </h1>
                </Link>
                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>
                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
