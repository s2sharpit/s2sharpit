import { CloseOutlined, GridViewOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { useState } from 'react';
import navData from "../data/navData";
import { useTheme } from "next-themes"

export default function Header() {
    const [menu, showMenu] = useState(false);
    
    const {theme, setTheme} = useTheme();
    // const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <header id='header' className="w-full fixed max-md:bottom-0 md:top-0 left-0 z-50 bg-container-color md:bg-body-color">
            <nav className="max-w-4xl md:px-4 mx-4 sm:mx-6 md:m-auto h-12 md:h-16 flex justify-between items-center gap-4 bg-inherit">
                <abbr title='Change Theme' onClick={()=>setTheme(theme === 'light' ? "dark" : "light")} className="text-title-color font-medium hover:text-title-color-dark cursor-pointer no-underline">s2sharpit</abbr>

                <div className={(menu ? "bottom-0" : "-bottom-full") + " fixed md:static left-0 w-full bottom-0 md:w-fit bg-body-color pt-8 md:pt-0 px-2 sm:px-6 md:px-0 pb-14 md:pb-0 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] md:shadow-none rounded-t-3xl md:rounded-none transition-all md:transition-none duration-300"}>
                    <ul className="grid grid-cols-3 md:flex gap-4 md:gap-8">
                        {navData.map(data => (
                            <li key={data.name}><a href={"#" + data.name} className="flex flex-col items-center text-sm text-title-color font-medium transition duration-300 hover:text-title-color-dark capitalize"><span className='md:hidden'>{data.icon}</span> {data.name}</a></li>
                        ))}
                    </ul>
                    <span className="md:hidden"><CloseOutlined onClick={()=>showMenu(!menu)} fontSize="medium" className='absolute right-5 bottom-3 cursor-pointer text-title-color hover:text-title-color-dark' /></span>
                </div>
                <span className="md:hidden"><GridViewOutlined onClick={()=>showMenu(!menu)} fontSize="small" className='text-title-color font-medium' /></span>
            </nav>
        </header>
    )
}