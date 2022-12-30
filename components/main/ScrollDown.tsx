import { ArrowDownward } from "@mui/icons-material";
import Link from "next/link";

export default function ScrollDown() {
    return (
        <div className="ml-28 md:ml-36 max-sm:hidden">
            <a href="#about" className="scroll inline-flex items-center">
                <svg
                    width="32px"
                    height="32px"
                    className="home__scroll-mouse"
                    viewBox="0 0 247 390"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.5",
                    }}

                >
                    <path
                        className="wheel"
                        d="M123.359,79.775l0,72.843"
                        style={{
                            fill: "none",
                            stroke: "var(--title-color)",
                            strokeWidth: "20px",
                        }}
                    ></path>
                    <path
                        id="mouse"
                        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                        style={{
                            fill: "none",
                            stroke: "var(--title-color)",
                            strokeWidth: "20px",
                        }}
                    ></path>
                </svg>
                <span className="text-title-color font-medium ml-0.5 mr-1">Scroll Down</span>
                <ArrowDownward fontSize="small" className="text-title-color" />
            </a>
        </div>
    )
}