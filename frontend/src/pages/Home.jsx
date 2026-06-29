import { useEffect, useState } from "react";
import { Bars3Icon, ChevronDownIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon, PencilIcon, BookOpenIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import DownloadCVButton from "../components/DownloadCVButton";
import ThemeToggle from "../components/ThemeToggle";
import Portrait from "../assets/portrait.png"
import JavaBadge from "../assets/java_badge.png"
import CybersecBadge from "../assets/cybersec_badge.png"
import Medicore_IMG from "../assets/medicore_img.png"
import FLICKD_IMG from "../assets/flickd_img.png"
import BITBOOKS_IMG from "../assets/bitbooks_img.png"

export default function Home() {
    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    const projects = [
        {
            title: "Medicore",
            image: Medicore_IMG,
            description: "A Hospital Management System that integrates JWT-based authentication, CRUD operations, and multiple business related processes.",
            link: "https://github.com/search?q=Medicore"
        },
        {
            title: "Flickd",
            image: FLICKD_IMG,
            description: "A movie review sharing inspired by letterbox. I worked on the frontend development using React and integrated the backend my team mate developed using Node.js and Express.",
            link: "https://github.com/search?q=Flickd"
        },
        {
            title: "BitBooks",
            image: BITBOOKS_IMG,
            description: "A digital reading and library management experience designed for organized, user-friendly book browsing.",
            link: "https://github.com/CyberCoderA/flask_book_recommender"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // For automatically changing the active project every 3 seconds
    useEffect(() => {
        const interval = globalThis.setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => globalThis.clearInterval(interval);
    }, [projects.length]);

    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const openProject = () => {
        window.open(activeProject.link, "_blank", "noopener,noreferrer");
    };

    const activeProject = projects[activeIndex];

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

                            <li><button className="text-2xl py-3 px-3 rounded-full text-white  hover:bg-white hover:text-primary hover:cursor-pointer hover:font-semibold" onClick={() => scrollToId("#projects")}>Projects</button></li>
                            
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
                        <h1 className="text-xl md:text-4xl lg:text-6xl text-white font-bold mb-4">Know About Me</h1>
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

            <section className="h-screen w-full flex flex-col justify-between p-3 md:p-5 lg:justify-around" id="#skills">
                <div className="w-full flex flex-col gap-2 items-center md:gap-3.5 lg:gap-5">
                    <h1 className="text-gray-700 text-xl font-bold md:text-4xl lg:text-6xl">My Skills</h1>
                    <span className="h-0.5 bg-gray-900 w-[12%] lg:h-1"></span>
                </div>

                <div className="w-full flex flex-col gap-2 lg:gap-5">
                    <h2 className="text-gray-500 text-xl font-semibold md:text-2xl lg:text-4xl">Certifications</h2>
                    <div className="w-full flex flex-col gap-4 md:flex-row md:gap-5 lg:gap-10">
                        <a href="https://www.credly.com/badges/19970429-f5f2-480c-b2fd-8f31d2fb7150/" target="_blank" rel="noopener noreferrer" className="h-25 md:h-50 lg:h-60 w-full md:w-6/12 lg:w-6/14">
                            <div className="h-full bg-[#E9E9E9] shadow-xl flex flex-row items-start gap-2 p-2 rounded-2xl md:p-5 md:gap-5 transition-transform hover:scale-105 hover:cursor-pointer">
                                <img src={JavaBadge} alt="java-badge" className="h-full" />
                                <div className="h-full flex flex-col justify-around">
                                    <div>
                                        <h3 className="text-gray-800 text-sm font-medium md:text-lg lg:text-2xl">IT Specialist - Java</h3>
                                        <p className="text-gray-600 text-xs font-light md:text-base lg:text-xl">Issued by Certiport</p>
                                    </div>

                                    <p className="text-gray-600 text-xs font-light md:text-base lg:text-lg overflow-y-hidden">Earners of this badge demonstrate that they can recognize, write, and debug Java code that will logically solve a problem.</p>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.credly.com/badges/ae3abd00-13a6-45bb-8609-c43526cee6b1/linked_in?t=te6vxh" target="_blank" rel="noopener noreferrer" className="h-25 md:h-50 lg:h-60 w-full md:w-6/12 lg:w-6/11">
                                <div className="h-full bg-[#E9E9E9] shadow-xl flex flex-row items-start gap-2 p-2 rounded-2xl md:p-5 md:gap-5 transition-transform hover:scale-105 hover:cursor-pointer">
                                <img src={CybersecBadge} alt="java-badge" className="h-full" />
                                <div className="h-full flex flex-col justify-around">
                                    <div>
                                        <h3 className="text-gray-800 text-sm font-medium md:text-lg lg:text-2xl">IT Specialist - Cybersecurity</h3>
                                        <p className="text-gray-600 text-xs font-light md:text-base lg:text-xl">Issued by Certiport</p>
                                    </div>

                                    <p className="text-gray-600 text-xs font-light md:text-base lg:text-lg overflow-y-scroll">Earners of this badge are starting their journey in the cybersecurity field. This exam assesses their understanding of key security paradigms, terminology, and mindset. Badge earners have a keen awareness of the importance of security and the threats to a business when security procedures are not followed. They are willing to teach others about security concerns. They are developing the investigative and implementation skills necessary to succeed in the field.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-2 lg:gap-5">
                    <h2 className="text-gray-500 text-xl font-semibold md:text-2xl lg:text-4xl">Technical Skills Breakdown</h2>
                    <div className="w-full flex flex-col gap-3 md:flex-row md:gap-5 lg:gap-10">
                        <div className="h-23 w-full px-2 py-1 flex flex-col bg-[#E9E9E9] rounded-2xl shadow-xl md:h-60 lg:h-100 lg:p-5">
                            <h3 className="text-gray-800 text-sm font-medium md:text-xl lg:text-2xl">Coding Languages</h3>
                            <div className="w-full flex flex-row flex-wrap gap-1 items-center justify-start mt-2 md:mt-5 lg:mt-10 lg:gap-3">
                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">Java</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">Python</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">JavaScript</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">C++</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">Dart</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">SQL</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">MongoDB</h4>
                                </div>
                            </div>
                        </div>

                        <div className="h-23 w-full px-2 py-1 bg-[#E9E9E9] rounded-2xl shadow-xl md:h-60 lg:h-100 lg:p-5">
                            <h3 className="text-gray-800 text-sm font-medium md:text-lg lg:text-2xl">Web Tech</h3>
                            <div className="w-full flex flex-row flex-wrap gap-1 items-center justify-start mt-2 md:mt-5 lg:mt-10 lg:gap-3">
                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">Node</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">Flask</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">CSS</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">Tailwind</h4>
                                </div>

                                 <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">React</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">Springboot</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">JQuery</h4>
                                </div>
                            </div>
                        </div>

                        <div className="h-18 px-2 w-full flex flex-col bg-[#E9E9E9] rounded-2xl shadow-xl md:p-2 md:h-60 lg:h-100 lg:p-5">
                            <h3 className="text-gray-800 text-sm font-medium md:text-lg lg:text-2xl">Mobile Tech</h3>
                            <div className="w-full flex flex-row flex-wrap gap-1 items-center justify-start mt-2 md:mt-5 lg:mt-10 lg:gap-3">
                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">Flutter</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">Android/Java</h4>
                                </div>

                                <div className="h-6 px-3 flex items-center bg-[#CCC] rounded-lg lg:h-12 lg:px-6 lg:rounded-2xl">
                                    <h4 className="text-sm text-gray-800 lg:text-2xl">React Native</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-screen w-full flex flex-col p-3 md:p-5" id="#projects">
                <div className="h-1/3 w-full flex flex-col gap-6">
                    <div className="w-full flex flex-col gap-5">
                        <h2 className="text-gray-800 text-6xl font-bold">My Projects</h2>
                        <span className="h-1.5 bg-gray-800 w-[15%]"></span>
                    </div>

                    <p className="w-1/2 text-gray-600 text-xs font-light md:text-base lg:text-xl lg:font-medium lg:text-gray-500">Below are some of my complete projects. Feel free to download the source code from my GitHub and tinker with it.</p>
                </div>

                {/* Carousel */}
                <div className="h-1/2 w-full flex flex-col items-center justify-center gap-5">
                    <div className="relative h-full w-full md:w-3/4 lg:w-1/2 flex items-center justify-center overflow-hidden">
                        <button
                            type="button"
                            onClick={goToPrev}
                            className="absolute left-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 hover:bg-black/80 hover:cursor-pointer"
                            aria-label="Previous project"
                        >
                            <ChevronLeftIcon className="size-6 text-white" />
                        </button>

                        <div className="relative h-full w-full overflow-hidden rounded-4xl">
                            <div className="pointer-events-none absolute inset-0 z-10 rounded-4xl bg-black/45 flex flex-col items-center justify-center gap-4 lg:gap-10 p-6 md:p-10">
                                <h2 className="text-white text-2xl md:text-4xl font-bold text-center">{activeProject.title}</h2>

                                <p className="w-full md:w-3/4 text-white text-base md:text-2xl text-center font-light">{activeProject.description}</p>
                                
                                <button
                                    type="button"
                                    onClick={openProject}
                                    className="pointer-events-auto px-5 py-2 text-sm font-semibold border-2 border-white text-white rounded-full transition-transform ease-in-out z-40 hover:scale-105 hover:cursor-pointer hover:bg-white hover:text-primary md:text-lg md:px-10"
                                >
                                    View Project
                                </button>
                            </div>

                            <img src={activeProject.image} alt={activeProject.title} className="h-full w-full rounded-4xl object-cover" />
                        </div>

                        <button
                            type="button"
                            onClick={goToNext}
                            className="absolute right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 hover:bg-black/80 hover:cursor-pointer"
                            aria-label="Next project"
                        >
                            <ChevronRightIcon className="size-6 text-white" />
                        </button>
                    </div>

                    <div className="flex gap-2">
                        {projects.map((project, index) => (
                            <button
                                key={project.title}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                className={`h-3 w-3 rounded-full transition-colors ${index === activeIndex ? "bg-primary" : "bg-gray-300"}`}
                                aria-label={`Show ${project.title}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}