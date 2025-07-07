import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <h4 className="text-3xl font-bold font-sans">
          Travel<span className="text-green-50">exa</span>.
        </h4>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 hover:text-transparent hover:bg-clip-text"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Sign In"
          icon="/user.svg"
          variant="btn_dark_green hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 hover:shadow-lg transition-all duration-300 text-white font-semibold rounded-full px-6 py-2"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
