import { Close, GridViewOutlined } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import navData from "../data/navData";
import { useTheme } from "next-themes"

export default function Header() {
    const {theme, setTheme} = useTheme();
    // const currentTheme = theme === 'system' ? systemTheme : theme;

    const [menu, setMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [activeNav, setActiveNav] = useState<string>("home");
    
    useEffect(() => {
        window.addEventListener('scroll', function () {
            const header = document.querySelector('#header');
            if (this.scrollY >= 80) header?.classList.add("shadow-header");
            else header?.classList.remove("shadow-header");
        })
        if (!menu) return;
        const handleClose = (e: any) => {
            if (menuRef.current && !menuRef.current?.contains(e.target)) {
                setMenu(false);
            }
        }
        window.addEventListener("click", handleClose);
        window.addEventListener("scroll", handleClose);
        return () => {
            window.removeEventListener("click", handleClose);
            window.removeEventListener("scroll", handleClose);
        }
    }, [menu]);

    return (
        <header id='header' ref={menuRef} className="max-md:shadow-header w-full fixed max-md:bottom-0 md:top-0 left-0 z-50 bg-container-color md:bg-body-color">
            <nav className="max-w-4xl px-4 md:mx-auto h-14 md:h-16 flex justify-between items-center gap-4 bg-inherit">
                <abbr title='Change Theme' onClick={()=>setTheme(theme === 'light' ? "dark" : "light")} className="text-title-color font-medium hover:text-title-color-dark cursor-pointer no-underline">s2sharpit</abbr>

                <div className={(menu ? "bottom-0" : "-bottom-full") + " fixed md:static left-0 w-full bottom-0 md:w-fit bg-body-color pt-8 md:pt-0 px-2 sm:px-6 md:px-0 pb-16 md:pb-0 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] md:shadow-none rounded-t-3xl md:rounded-none transition-all md:transition-none duration-300"}>
                    <ul className="grid grid-cols-3 md:flex gap-4 md:gap-8">
                        {navData.map(data => (
                            <li key={data.name}><a href={"#" + data.name} onClick={()=>{setMenu(false);setActiveNav(data.name)}} className={(activeNav === data.name && "text-title-color-dark") + " flex flex-col items-center text-sm text-title-color font-medium transition duration-300 hover:text-title-color-dark capitalize"}><span className='md:hidden'>{data.icon}</span> {data.name}</a></li>
                        ))}
                    </ul>
                    <span className="md:hidden"><Close onClick={()=>setMenu(false)} fontSize="large" className='absolute right-4 bottom-3 cursor-pointer text-title-color hover:text-title-color-dark p-1' /></span>
                </div>
                <span className="md:hidden"><GridViewOutlined onClick={()=>setMenu(true)} fontSize="large" className='text-title-color font-medium p-1' /></span>
            </nav>
        </header>
    )
}