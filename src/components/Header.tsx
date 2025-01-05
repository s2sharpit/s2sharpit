import socials from "@/data/socials";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div className="min-w-max w-96 grid">
        <Image
          src="/s2sharpit.png"
          alt=""
          width={220}
          height={220}
          className="h-52 w-52 rounded-full mb-8 ml-8"
        />
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Tushar Saini
        </h1>
        <h2 className="mt-3 ml-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          ML Enthusiast
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I like building delightful, magical, and accessible art with code.
        </p>
      </div>

      <ul
        className="ml-1 mt-8 flex items-center gap-6"
        aria-label="Social media"
      >
        {socials.map((social) => (
          <li key={social.name} className="shrink-0 text-xs">
            <Link
              className="block hover:text-slate-200 text-2xl"
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.name} (opens in a new tab)`}
              title={social.name}
            >
              <span className="sr-only">{social.name}</span>
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
