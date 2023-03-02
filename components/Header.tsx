import { Close, GridViewOutlined } from '@mui/icons-material';
import { useCallback, useEffect, useRef, useState } from 'react';
import navData from "../data/navData";
import { useTheme } from "next-themes"

export default function Header() {
    const { theme, setTheme } = useTheme();
    // const currentTheme = theme === 'system' ? systemTheme : theme;

    const [menu, setMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [activeNav, setActiveNav] = useState<string>("home");

    const handleClickClose = useCallback((event: any, id: string) => {
        // event.preventDefault();
        document.getElementById(id)?.scrollIntoView();
        setMenu(false);
        setActiveNav(id);
    }, []);
    
    const handleClose = useCallback((e: any) => {
        if (menuRef.current && !menuRef.current?.contains(e.target)) {
            setMenu(false);
        }
    }, [menuRef]);
    

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('#header');
            header?.classList.toggle("shadow-header", window.scrollY >= 80);

            const sectionIds = Array.from(document.querySelectorAll("section[id]")).map(section => section.getAttribute("id") || "home");
            const currentSectionId = sectionIds.find(sectionId => {
                const section = document.getElementById(sectionId);
                if (!section) return false;
                const sectionTop = section.offsetTop - 200;
                const sectionBottom = sectionTop + section.offsetHeight;
                return window.scrollY >= sectionTop && window.scrollY <= sectionBottom;
            }) || "home";

            setActiveNav(currentSectionId);
        };

        window.addEventListener('scroll', handleScroll);
        
        if (!menu) return;
        window.addEventListener("click", handleClose);
        window.addEventListener("scroll", handleClose);

        return () => {
            window.removeEventListener('click', handleClose);
            window.removeEventListener('scroll', handleClose);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleClose, menu]);

    return (
        <header id='header' ref={menuRef} className="max-md:shadow-header w-full fixed max-md:bottom-0 md:top-0 left-0 z-50 bg-container-color md:bg-body-color">
            <nav className="max-w-4xl px-4 md:mx-auto h-14 md:h-16 flex justify-between items-center gap-4 bg-inherit">
                <abbr title='Change Theme' onClick={() => setTheme(theme === 'light' ? "dark" : "light")} className="text-title-color font-medium hover:text-title-color-dark hover:cursor-pointer no-underline">s2sharpit</abbr>

                <div className={`${menu ? "bottom-0" : "-bottom-full"} fixed md:static left-0 w-full md:w-fit bg-body-color pt-8 md:pt-0 px-2 sm:px-6 md:px-0 pb-16 md:pb-0 shadow-header md:shadow-none rounded-t-3xl md:rounded-none  md:transition-none duration-300`}>
                    <ul className="grid grid-cols-3 md:flex gap-4 md:gap8 justify-between md:w-[28rem]">
                        {navData.map(data => (
                            <li key={data.name} onClick={event => handleClickClose(event, data.name)} className={`${activeNav === data.name && "text-title-color-dark font-semibold"} flex flex-col items-center text-sm text-title-color font-medium transition duration-300 hover:text-title-color-dark capitalize hover:cursor-pointer`}><span className='md:hidden'>{data.icon}</span> {data.name}</li>
                        ))}
                    </ul>
                    <span className="md:hidden"><Close onClick={() => setMenu(false)} fontSize="large" className={`absolute right-4 bottom-3 text-title-color hover:text-title-color-dark p-1 hover:cursor-pointer`} /></span>
                </div>
                <span className="md:hidden"><GridViewOutlined onClick={() => setMenu(true)} fontSize="large" className='text-title-color font-medium p-1 hover:cursor-pointer' /></span>
            </nav>
        </header>
    )
}