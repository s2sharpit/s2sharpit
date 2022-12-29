import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";

export default function Social() {
  return (
    <div className='grid gap-4 w-fit'>
        <Link target='_blank' className="text-title-color hover:text-title-color-dark" href="https://www.linkedin.com/in/s2sharpit"><LinkedIn /></Link>
        <Link target='_blank' className="text-title-color hover:text-title-color-dark" href="https://github.com/s2sharpit"><GitHub /></Link>
        <Link target='_blank' className="text-title-color hover:text-title-color-dark" href="https://twitter.com/s2sharpit"><Twitter /></Link>
        <Link target='_blank' className="text-title-color hover:text-title-color-dark" href="https://www.instagram.com/s2sharpit"><Instagram /></Link>
    </div>
  )
}
