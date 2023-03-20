import Head from 'next/head'
import { Poppins } from '@next/font/google'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '400'],
    variable: '--font-poppins',
})

export default function Page404() {

    const router = useRouter();
    const [timer, setTimer] = useState(5);

    if (timer === 1) router.push("/");

    useEffect(() => {
        setTimeout(() => setTimer(timer - 1), 1000);
    }, [timer]);

    return (
        <>
            <Head>
                <title>404 Page</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={`${poppins.variable} font-sans flex flex-col gap-8 h-screen justify-center items-center bg-body-color text-sm`}>
                <div className="flex items-center gap-4">
                    <span className="text-2xl">404</span>
                    <span className="text-6xl font-thin text-border-color/60">|</span>
                    This page could not be found.
                </div>
                <div className="text-xl [word-spacing:0.25rem]">Redirecting to Home Page in {timer}s . . .</div>
                <div className="absolute bottom-12 lg:bottom-16">&copy; s2sharpit - Tushar Saini</div>
            </div>
        </>
    )
}