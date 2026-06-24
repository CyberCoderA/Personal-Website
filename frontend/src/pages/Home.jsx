import { Bars3Icon, ChevronDownIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon, PencilIcon, BookOpenIcon } from "@heroicons/react/24/solid";
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
            <section className="overflow-y-hidden h-screen w-full pt-5 px-5 flex flex-col gap-8 items-center justify-between md:justify-between md:gap-0" id="home">
                <nav className="bg-primary w-full h-15 md:h-20 p-5 rounded-3xl flex justify-between items-center lg:h-25">
                    <div>
                        <ThemeToggle />
                    </div>

                    {/* Nav Links */}
                    <div>
                        <Bars3Icon className="size-12 text-white hover:cursor-pointer md:hidden" />
                        <ul className="h-full w-full hidden md:flex md:flex-row md:gap-6 md:items-center lg:gap-10">
                            <li><button className="text-2xl text-primary font-semibold py-3 px-3 rounded-full bg-white hover:cursor-pointer">Home</button></li>
                            
                            <li><button className="text-2xl py-3 px-3 rounded-full text-white hover:bg-white hover:text-primary hover:cursor-pointer hover:font-semibold" onClick={() => scrollToId("#about")}>About</button></li>

                            <li><button className="text-2xl py-3 px-3 rounded-full text-white  hover:bg-white hover:text-primary hover:cursor-pointer hover:font-semibold" onClick={() => scrollToId("#skills")}>Skills</button></li>

                            <li><button className="text-2xl py-3 px-3 rounded-full text-white  hover:bg-white hover:text-primary hover:cursor-pointer hover:font-semibold">Projects</button></li>
                            
                            <li><button className="text-2xl py-3 px-3 rounded-full text-white  hover:bg-white hover:text-primary hover:cursor-pointer hover:font-semibold">Contact</button></li>
                        </ul>
                    </div>

                </nav>
                
                <div className="h-full w-full flex flex-col gap-15 md:flex-row-reverse">
                    <div className="h-full lg:w-4/2 flex flex-col gap-10 lg: lg:gap-15 md:justify-center">
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
                        <img src={Portrait} alt="portrait" className="h-full w-full md:h-[60%] lg:h-[62%]" />
                    </div>
                </div>

                <button className="absolute flex items-center justify-center rounded-full shadow-2xl shadow-black bg-primary h-16 w-16 bottom-2 hover:cursor-pointer hover:scale-110 transition-transform ease-in-out" onClick={() => scrollToId("#about")}>
                    <ChevronDownIcon className="size-9 text-white" />
                </button>
            </section>

            {/* About Me */}
            <section className="bg-primary h-screen w-full p-5 gap-6 flex flex-col md:p-10 md:flex-row md:justify-between lg:p-10 lg:gap-10" id="#about">
                <div className="w-full flex flex-col gap-5 md:w-1/2 lg:gap-12">
                    <div className="w-full flex flex-col justify-start items-start lg:gap-2">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold mb-4">Know About Me</h1>
                        <span className="h-1 bg-white w-[40%]"></span>
                    </div>
                    
                    <div className="w-full flex flex-col gap-2 md:gap-5 lg:gap-10">
                        <p className="text-gray-100 text-sm font-light italic md:text-2xl lg:text-3xl lg:leading-snug">
                            "Highly motivated and detail-oriented aspiring software developer with a strong passion for technology and programming. Proficient in JavaScript, Python, C#, and Java, with hands-on experience gained through projects and coursework. Eager to apply technical and problem-solving skills while continuously learning and contributing to innovative software solutions."
                        </p>
                        
                        <h2 className="text-white text-md font-medium md:text-2xl lg:text-5xl">- Adrian Pueblo</h2>
                    </div>
                </div>

                <div className="h-full w-full flex flex-col gap-5 md:gap-10 md:w-1/2 lg:justify-around">
                    <div className="w-full flex flex-col gap-3 px-2 md:px-5 md:gap-6">
                        <h2 className="text-white text-xl font-medium md:text-2xl lg:text-4xl">Experience</h2>
                        <div className="w-full flex flex-row items-center gap-2">
                            <ComputerDesktopIcon className="size-10 md:size-14 lg:size-16 text-white" />
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-sm font-medium md:text-xl lg:text-2xl">Cybersecurity Intern</h2>
                                <p className="text-white text-sm font-light md:text-lg lg:text-xl">Seaoil Philippines Inc. | November 2025 - May 2026</p>
                            </div>
                        </div>

                        <span className="h-0.5 bg-white w-[40%] lg:h-1"></span>
                    </div>

                    <div className="h-full w-full p-2 bg-[#FBFBFB] rounded-2xl flex flex-col gap-1 md:gap-3 lg:gap-5 md:p-5 lg:h-6/8">
                        <h2 className="text-black text-lg font-medium md:text-2xl lg:text-4xl">Education</h2>

                        <div className="h-full w-full flex flex-col justify-around">
                            <div className="w-full flex flex-row items-center gap-2 md:gap-5">
                                <AcademicCapIcon className="size-12 md:size-30 text-gray-900" />
                                <div className="flex flex-col gap-1">
                                    <h2 className="w-full text-gray-800 text-[11px] font-medium md:text-xl lg:text-2xl">Bachelor of Science in Information Technology - Mobile and Web Programming</h2>
                                    <p className="text-gray-800 text-[10px] font-light md:text-lg lg:text-xl">NU MOA | 2026</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-row items-center gap-2 md:gap-5">
                                <PencilIcon className="size-10 md:size-26 text-gray-900" />
                                <div className="flex flex-col gap-1">
                                    <h2 className="w-full text-gray-800 text-[11px] font-medium md:text-xl lg:text-2xl">Secondary Education (Highschool & Senior Highschool) - ICT Strand</h2>
                                    <p className="text-gray-800 text-[10px] font-light md:text-lg lg:text-xl">Pasay City North Highschool - MDC | 2026</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-row items-center gap-2 md:gap-5">
                                <BookOpenIcon className="size-10 md:size-22 text-gray-900" />
                                <div className="flex flex-col gap-1">
                                    <h2 className="w-full text-gray-800 text-[11px] font-medium md:text-xl lg:text-2xl">Primary/Elementary Education</h2>
                                    <p className="text-gray-800 text-[10px] font-light md:text-lg lg:text-xl">P. Villanueva Elementary School | 2016</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="h-screen w-full">

            </section>
        </div>
    )
}