import Link from "next/link";
import { Scroll, Section, Button } from "@/components/ui";
import { Svg } from "@/components/Svg";
import profileData from "@/data/profileData";

export default function Hero() {
  return (
    <Section id="home" className="grid gap-10">
      <div className="grid gap-y-12 gap-x-5 md:gap-x-9 lg:gap-x-12 grid-cols-[0.5fr_2fr] sm:grid-cols-[10vw_repeat(2,1fr)] md:grid-cols-[65px_1fr_max-content] pt-14 sm:pt-24 items-center">
        <div className="grid gap-6 w-fit">
          {profileData.map(({ icon: Icon, ...data }) => (
            <Button size="icon" variant="ghost" key={data.name}>
              <Link
                target="_blank"
                className="text-[1.7rem]"
                aria-label={data.name}
                href={data.url}
              >
                <Icon className="size-" />
              </Link>
            </Button>
          ))}
        </div>

        <div className="max-xs:ml-0 max-sm:ml-6 bg-[url('/s2sharpit.png')] bg-no-repeat bg-center bg-cover shadow-profile sm:shadow-smProfile sm:order-1 sm:justify-self-center w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 animate-profile -scale-x-100"></div>

        <div className="max-xs:mx-4 max-sm:mx-6 max-sm:col-span-3">
          <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold mb-3">
            Tushar Saini
            <Svg.Hand />
          </h1>
          <h2 className="relative text-muted-foreground text-xl pl-14 md:pl-20 before:content-start before:absolute before:w-10 md:before:w-16 before:h-px before:bg-muted-foreground before:left-0 before:top-3 md:before:top-4">Software Engineer</h2>
          <h3 className="font-medium my-1 md:my-2">Kolkata, Bharat</h3>
          <p className="max-w-sm text-justify mb-10 md:mb-12 text-text-color">
            I like creating <b>delightful, magical,</b> and <b>accessible</b>{" "}
            art with code.
          </p>
          <Scroll to="contact" size={"xl"} className="text-base">
            Say Hello <Svg.Arrow />
          </Scroll>
        </div>
      </div>
    </Section>
  );
}
