import { CloseOutlined, GridViewOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { useState } from 'react';
import navData from "../data/navData";

export default function Header() {
    const [menu, showMenu] = useState(false);

    return (
        <header id='header' className="w-full fixed max-md:bottom-0 md:top-0 left-0 righ z-50 bg-container-color md:bg-body-color">
            <nav className="max-w-4xl mx-4 sm:mx-6 lg:m-auto h-12 md:h-16 flex justify-between items-center gap-4 bg-inherit">
                <Link href="" className="text-title-color font-medium hover:text-title-color-dark">s2sharpit</Link>

                <div className={(menu ? "bottom-0" : "-bottom-full") + " fixed md:static left-0 w-full bottom-0 md:w-fit bg-body-color pt-8 md:pt-0 px-2 sm:px-6 md:px-0 pb-14 md:pb-0 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] md:shadow-none rounded-t-3xl md:rounded-none transition-all md:transition-none duration-300"}>
                    <ul className="grid grid-cols-3 md:flex gap-4 md:gap-8">
                        {navData.map(data => (
                            <li key={data.name}><a href={"#" + data.name} className="flex flex-col items-center text-sm text-title-color font-medium transition duration-300 hover:text-title-color-dark capitalize">{data.icon} {data.name}</a></li>
                        ))}
                    </ul>
                    <CloseOutlined onClick={()=>showMenu(!menu)} fontSize="medium" className='block md:hidden absolute right-5 bottom-3 cursor-pointer text-title-color hover:text-title-color-dark' />
                </div>
                <GridViewOutlined onClick={()=>showMenu(!menu)} fontSize="small" className='text-title-color font-medium block md:hidden' />
            </nav>
        </header>
    )
}