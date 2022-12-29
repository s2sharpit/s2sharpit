import { BusinessCenterOutlined, CloseOutlined, GridViewOutlined, HomeOutlined, ImageOutlined, PersonOutlined, SendOutlined, TextSnippetOutlined } from '@mui/icons-material';
import { useState } from 'react';

export default function Header() {
    const [menu, showMenu] = useState(false);

    return (
        <header className="w-full fixed max-md:bottom-0 md:top-0 left-0 righ z-50 bg-container-color md:bg-body-color">
            <nav className="max-w-4xl mx-4 sm:mx-6 lg:m-auto h-12 md:h-16 flex justify-between items-center gap-4 bg-inherit">
                <a href="index.html" className="text-title-color font-medium">s2sharpit</a>

                <div className={(menu ? "bottom-0" : "-bottom-full") + " fixed md:static left-0 w-full bottom-0 md:w-fit bg-body-color pt-8 md:pt-0 px-2 sm:px-6 md:px-0 pb-14 md:pb-0 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] md:shadow-none rounded-t-3xl md:rounded-none transition-all md:transition-none duration-300"}>
                    <ul className="grid grid-cols-3 md:flex gap-4 md:gap-8">
                        <li className=""><a href="#home" className={link + " text-title-color-dark"}><HomeOutlined fontSize="small" className='block md:hidden' /> Home</a></li>
                        <li className=""><a href="#about" className={link}><PersonOutlined fontSize="small" className='block md:hidden' /> About</a></li>
                        <li className=""><a href="#skills" className={link}><TextSnippetOutlined fontSize="small" className='block md:hidden' /> Skills</a></li>
                        <li className=""><a href="#services" className={link}><BusinessCenterOutlined fontSize="small" className='block md:hidden' /> Services</a></li>
                        <li className=""><a href="#projects" className={link}><ImageOutlined fontSize="small" className='block md:hidden' /> Projects</a></li>
                        <li className=""><a href="#contact" className={link}><SendOutlined fontSize="small" className='block md:hidden' /> Contact</a></li>
                    </ul>
                    <CloseOutlined onClick={()=>showMenu(!menu)} fontSize="medium" className='block md:hidden absolute right-5 bottom-3 cursor-pointer text-title-color hover:text-title-color-dark' />
                </div>
                <GridViewOutlined onClick={()=>showMenu(!menu)} fontSize="small" className='text-title-color font-medium block md:hidden' />
            </nav>
        </header>
    )
}

const link = "flex flex-col items-center text-sm text-title-color font-medium transition duration-300 hover:text-title-color-dark";