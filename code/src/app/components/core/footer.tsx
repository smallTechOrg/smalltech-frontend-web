import Link from "next/link";
import Image from "next/image";
const BLOG_URL = "https://aiblog.smallTech.in";

export default function Footer({ className = "" }) {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={`flex items-center justify-center ${className}`}>
             <div className="flex flex-col text-xs space-y-2 font-[200]  md:flex-row md:space-x-6 md:text-center md:items-center md:justify-center md:text-lg ">
          <Link
            href={BLOG_URL}
            className="flex hover:underline space-x-2 items-center"
          >
            <Image src="./blog.png" width={15} height={15} alt="blog" className="opacity-60 md:w-6 md:h-6" />
            <span className=" text-ink ">blog</span>
          </Link>
          <Link
            href="mailto:contact@smalltech.in"
            className="flex items-center hover:underline space-x-2"
          >
            <Image src="./email.png" width={15} height={15} alt="email" className="opacity-60 md:w-6 md:h-6"/>
            <span className="text-ink ">mail</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <Image src="./copyright.png" width={17} height={17} alt="copyright" className="opacity-60 md:w-6 md:h-6"/>
            <span className="text-ink">{currentYear} madhyamakist pvt ltd</span>
          </div>
        </div>

        </footer>
    );
}