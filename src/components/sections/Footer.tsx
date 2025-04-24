import Link from "next/link";
import { Scroll } from "@/components/ui";
import profileData from "@/data/profileData";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import navData from "@/data/navData";

export default function Footer() {
  return (
    <footer id="footer" className="bg-card border-t">
      <div className="max-w-4xl mx-auto pt-8 pb-24 flex flex-col justify-center items-center">
        <Scroll to="home" variant="link" className="text-2xl font-medium mb-4">
          Tushar Saini
        </Scroll>
        <ul className="flex justify-center gap-x-4 md:gap-x-6 mb-6">
          {navData.map((name) => (
            <li key={name.name}>
              <Scroll to={name.name} variant="link">
                {name.name}
              </Scroll>
            </li>
          ))}
        </ul>
        <div className="flex justify-center  gap-x-5">
          {profileData.map((data) => (
            <Link
              key={data.name}
              target="_blank"
              className={cn(buttonVariants(), "text-xl md:text-2xl")}
              aria-label={data.name}
              href={data.url}
            >
              {data.icon}
            </Link>
          ))}
        </div>
        <span className="block mt-16 text-sm">
          &#169; <span className="max-sm:hidden">s2sharpit - </span>Tushar
          Saini. All rights reserved
        </span>
      </div>
    </footer>
  );
}
