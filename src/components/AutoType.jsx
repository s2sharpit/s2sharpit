import Typewriter from "typewriter-effect";

export default () => {
    
    return (
        <Typewriter
            options={{autoStart: true,
            loop: true,
            delay: 40,
            strings: ["Programmer", "Developer", "Designer"],
        }} />
    )
  }