import Link from "next/link";
import { Button, Scroll } from "@/components/ui";
import profileData from "@/data/profileData";
import navData from "@/data/navData";

export default function Footer() {
  return (
    <footer id="footer" className="bg-card border-t">
      <div className="max-w-4xl mx-auto pt-8 pb-24 flex flex-col justify-center items-center">
        <Scroll to="home" variant="link" className="text-2xl">
          Tushar Saini
        </Scroll>
        <ul className="flex justify-center gap-x-4 md:gap-x-6 my-6">
          {navData.map((name) => (
            <li key={name.name}>
              <Scroll to={name.name} variant="ghost" size="sm">
                {name.name}
              </Scroll>
            </li>
          ))}
        </ul>
        <div className="flex justify-center  gap-x-5">
          {profileData.map(({ icon: Icon, ...data }) => (
            <Button size="icon" asChild key={data.name}>
              <Link target="_blank" aria-label={data.name} href={data.url}>
                <Icon className="size-5" />
              </Link>
            </Button>
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
