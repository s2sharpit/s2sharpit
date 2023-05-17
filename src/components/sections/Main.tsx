import { MdArrowDownward } from "react-icons/md";
import Link from "next/link";
import { Scroll, Title, Section, Subtle } from "@/components/ui";
import { Svg } from "@/components/Svg";
import profileData from "@/data/profileData";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

export default function Main() {
  return (
    <Section id="home">
      <div className="grid gap-10">
        <div className="grid gap-y-12 gap-x-5 md:gap-x-9 lg:gap-x-12 grid-cols-[0.5fr_2fr] sm:grid-cols-[10vw_repeat(2,1fr)] md:grid-cols-[65px_1fr_max-content] pt-14 sm:pt-24 items-center">
          <div className="grid gap-6 w-fit">
            {profileData.map((data) => (
              <Link
                key={data.name}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "text-[1.7rem]"
                )}
                aria-label={data.name}
                href={data.url}
              >
                {data.icon}
              </Link>
            ))}
          </div>

          <div className="max-xs:ml-0 max-sm:ml-6 bg-[url('../../public/s2sharpit.jpeg')] bg-no-repeat bg-center bg-cover shadow-profile sm:shadow-smProfile sm:order-1 sm:justify-self-center w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 animate-profile -scale-x-100"></div>

          <div className="max-xs:mx-4 max-sm:mx-6 max-sm:col-span-3">
            <Title size={"lg"} className="mb-3">
              Tushar Saini
              <Svg.Hand />
            </Title>
            <Subtle variant={'special'}>
              Software Engineer
            </Subtle>
            <h3 className="font-medium my-1 md:my-2">Bhubaneswar, Bharat</h3>
            <p className="max-w-sm text-justify mb-10 md:mb-12 text-text-color">
              I like creating <b>delightful, magical,</b> and <b>accessible</b>{" "}
              art with code.
            </p>
            <Scroll to="contact" size={"lg"}>
              Say Hello <Svg.Arrow />
            </Scroll>
          </div>
        </div>

        <div className="ml-[7.5rem] md:ml-28 max-sm:hidden">
          <Scroll to="about" variant={"link"} className="group">
            <Svg.Mouse />
            <span className="ml-0.5">
              Scroll Down
            </span>
            <MdArrowDownward className="text-title-color text-xl ml-1" />
          </Scroll>
        </div>
      </div>
    </Section>
  );
}
