import Link from "next/link";
import Image from "next/image";
import { CleaningIcon, Sparks } from "@/components/Icons";
export default function AppHeader() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 bg-slate-100">
      <Link className="flex items-center justify-center gap-2" href="/">
        <Image
          src="/sparks-bubbles.svg"
          alt="Sparkle Clean Logo"
          width={40}
          height={40}
        />
        <span className="text-2xl">Meridian Perla</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#servicii"
        >
          Servicii
        </Link>
        {/* <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#why-us"
        >
          Why Us
        </Link> */}
        {/* <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#preturi"
        >
          Preturi
        </Link> */}
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
