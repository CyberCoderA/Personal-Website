import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import DownloadCVButton from "../components/DownloadCVButton";
import ThemeToggle from "../components/ThemeToggle";
import Portrait from "../assets/portrait.png"

export default function Home() {
    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="h-screen w-full">
            {/* Home */}
            <section className="h-screen w-full pt-5 px-5 flex flex-col gap-8 items-center md:justify-between md:gap-0" id="home">
                <nav className="bg-primary w-full h-15 md:h-20 p-5 rounded-3xl flex justify-between items-center lg:h-25">
                    <div>
                        <ThemeToggle />
                    </div>

                    {/* Nav Links */}
                    <div>
                        <Bars3Icon className="size-12 text-white hover:cursor-pointer md:hidden" />
                        <ul className="h-full w-full hidden md:flex md:flex-row md:gap-10 md:items-center lg:gap-10">
                            <li><button className="text-2xl text-primary font-semibold py-3 px-5 rounded-full bg-white hover:cursor-pointer">Home</button></li>
                            
                            <li><button className="text-2xl py-3 px-5 rounded-full text-white hover:bg-white hover:text-primary hover:cursor-pointer hover:font-semibold" onClick={() => scrollToId("#about")}>About</button></li>

                            <li><button className="text-2xl py-3 px-5 rounded-full text-white  hover:bg-white hover:text-primary hover:cursor-pointer hover:font-semibold" onClick={() => scrollToId("#skills")}>Skills</button></li>

                            <li><button className="text-2xl py-3 px-5 rounded-full text-white  hover:bg-white hover:text-primary hover:cursor-pointer hover:font-semibold">Projects</button></li>
                            
                            <li><button className="text-2xl py-3 px-5 rounded-full text-white  hover:bg-white hover:text-primary hover:cursor-pointer hover:font-semibold">Contact</button></li>
                        </ul>
                    </div>

                </nav>
                
                <div className="h-full w-full flex flex-col gap-8 md:flex-row-reverse">
                    <div className="h-full flex flex-col gap-6 lg: lg:gap-15 md:justify-center">
                        <div className="flex flex-col items-center md:items-end">
                            <div className="flex gap-1 md:gap-2 lg:gap-4">
                                <h1 className="text-2xl font-semibold md:text-4xl lg:text-6xl">Hello, I'm</h1>
                                <h1 className="text-primary text-2xl font-bold md:text-4xl lg:text-6xl">Adrian Pueblo</h1>
                            </div>
                            <h1 className="text-2xl font-semibold md:text-4xl lg:text-6xl">Aspiring Developer!</h1>
                        </div>

                        <p className="text-sm text-gray-600 font-light text-center md:text-end md:text-xl lg:text-4xl">I am a motivated and detail-oriented professional seeking to leverage my technical skills in a dynamic organization to contribute a positive impact. My ability to handle tasks under pressure will be a great addition to any organization I’m part of.</p>

                        <div className="w-full flex justify-center gap-15 lg:gap-30 md:justify-end">
                            <DownloadCVButton />

                            <button className="border-3 px-5 text-sm font-semibold border-primary text-primary rounded-full transition-transform ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-primary hover:text-white lg:text-2xl lg:px-10">Contact Me</button>
                        </div>
                    </div>

                    {/* Portrait */}
                    <div className="h-full w-full flex justify-center md:justify-start md:items-end">
                        <img src={Portrait} alt="portrait" className="h-[70%] md:h-[60%] lg:h-[62%]" />
                    </div>
                </div>

                <button className="absolute flex items-center justify-center rounded-full shadow-2xl shadow-black bg-primary h-16 w-16 bottom-2">
                    <ChevronDownIcon className="size-9 text-white" />
                </button>
            </section>

            {/* About Me */}
            <section className="h-screen w-full p-10 flex bg-primary" id="#about">
                <div className="h-screen w-full md:w-1/2">
                    <div className="w-full flex flex-col justify-start items-start">
                        <h1 className="text-2xl lg:text-6xl text-white font-bold mb-4">Know About Me</h1>
                        <span className="h-1 bg-white w-[40%]"></span>
                    </div>
                </div>

                <div>
                    
                </div>
            </section>

            <section className="h-screen w-full">

            </section>
        </div>
    )
}