import React, { useState } from "react";
import { useNavigate } from "react-router";
import Phone from "./phoneProject.jsx";
import Desktop from "./desktopProject.jsx";
import About from "./AboutMe.jsx";
import About2 from "./AboutMe2.jsx";
import { LuMoon } from "react-icons/lu";
import { FiSun } from "react-icons/fi";

function Home() {
    const [darkMode, setDarkMode] = useState(true); // Default is dark mode

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <div className={darkMode ? "bg-greenDark" : "bg-greenLight"}>
                {/* Header */}
                <div className={`bg-[url('/Portfolio/background.png')] bg-cover bg-center min-h-dvh border-b-solid border-b-4 ${darkMode ? 'border-b-accentGreen' : 'border-b-greenDark'}`}>
                    <div className="flex items-center justify-between py-6 px-5">
                        <a className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-2xl font-spaceMono underline hover:decoration-accentGreen duration-300 ease-in-out`} href="#aboutme">About Me</a>
                        <a className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-2xl font-spaceMono underline hover:decoration-accentGreen duration-300 ease-in-out`} href="#projects">Projects</a>
                        <a className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-2xl font-spaceMono underline hover:decoration-accentGreen duration-300 ease-in-out`} href="#contact">Contact</a>
                    </div>
                    <div className={`bg-accentGreen text-center items-center py-5`}>
                        <h1 className="text-greenLight text-5xl font-spaceMono font-bold">LUCAS VAN DE KOPPEL</h1>
                    </div>
                    <p className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-5xl font-spaceMono font-bold py-7 pl-5`}>Fullstack Developer</p>
                    <p className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-7xl text-center font-spaceMono font-bold py-28 pl-10`}>Front-End Developer</p>
                    <p className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-5xl text-right font-spaceMono font-bold py-7 pr-5`}>Author and Artist</p>
                    <button onClick={toggleDarkMode} className={`text-${darkMode ? 'greenLight' : 'greenDark'} fixed bottom-4`}>{darkMode ? <FiSun className="w-12 h-auto"/> : <LuMoon className="w-12 h-auto"/>}</button>
                </div>


                <div>
                    <h2 id="aboutme" className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-5xl font-bold font-spaceMono underline decoration-accentGreen pl-14 pt-14`}>ABOUT ME</h2>
                    <About2
                        darkMode={darkMode}
                        imageUrl="/Portfolio/Me.png"
                        title="Meet me"
                        pOne="
                        My name is Lucas. I enjoy creating, tinkering and bringing designs to life in programming.
                        I like finding solutions for programming problems I haven't quite figured out yet.
                        I focus my work on front-end development, but also love getting involved in anything full-stack.
                        I also like music (metal, rock, indie, pop, just about anything that sounds nice), alternative fashions,
                        reading, writing and making art.
                        I enjoy dad jokes, dry humour and fun spaces.
                        "
                        pTwo="
                        Feel free to check out my projects further in this portfolio or in my Github.
                        I have also linked my LinkedIn below. For ways to reach me check out the Contact tab.
                        "
                        githubUrl1="https://github.com/GhostyHobbit"
                        link1="My Github"
                        githubUrl2="https://www.linkedin.com/in/lucas-van-de-koppel-fullstack-dev/"
                        link2="My LinkedIn"
                    />
                    <About
                        darkMode={darkMode}
                        imageUrl="/Portfolio/CMGT.png"
                        title="Education"
                        pOne="Currently I am a second year student at Creative Media and Game Technologies at Hogeschool Rotterdam. I have made projects in PHP, Laravel, Javascript and React (Native). Here I also learned to use Tailwind CSS next raw CSS and HTML."
                        pTwo="Before this study I finished gymnasium with NT and NG packages."
                    />
                    <About2
                        darkMode={darkMode}
                        imageUrl="/Portfolio/art.png"
                        title="Art"
                        pOne="Next to programming I like to draw as a hobby. I recently started posting the art I make on Instagram. On the right is one of the pieces I made for that account."
                        pTwo="I mostly make sketches on paper and sometimes commit to making digital art pieces. I tend to combine my art with my writing skills, creating characters and their world."
                    />
                    <About
                        darkMode={darkMode}
                        imageUrl="/Portfolio/books.png"
                        title="Writing"
                        pOne="Like mentioned before I really enjoy writing. From a young age I was enraptured by books and their stories. I write mostly fantasy, sci-fi and personal poetry. I aspire to release a fantasy novel one day."
                        pTwo="I also enjoy writing backstories for characters, immersing in their life story and world. I use this mostly for the characters I created and DnD characters."
                    />
                    <h2 id="projects" className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-5xl font-bold font-spaceMono underline decoration-accentGreen pl-14 pt-14`}>PROJECTS</h2>
                    <Phone title="Open Hiring"
                           pOne="In the second semester of the second school year we got commissioned by IO Digital to create a website for Open Hiring. This project was focussed on inclusive design and a user friendly system to apply for jobs."
                           pTwo="In this project I was in charge of most of the styleguide and big design choices. I also eventually pitched the outcome to IO Digital when the project was finished."
                           languages="Laravel - Tailwind - SQLite"
                           githubUrl="https://github.com/GhostyHobbit/TLE-Agency"
                           imageUrl="/Portfolio/OpenHiring.png"
                           darkMode={darkMode}
                    />
                    <Desktop
                        title="Gebarentaal bij intake"
                        pOne="In the third semester of the second year we were commissioned to create a website that could aid students in learning sign language."
                        pTwo="In this project I worked in the back-end team. Here I was in charge of setting up the database and the connections. I also worked on some features like progress within lessons and the option to save signs."
                        languages="Express - React"
                        githubUrl1="https://github.com/GhostyHobbit/TLE2-Specialisatie"
                        githubUrl2="https://github.com/QuintenVanDerBlom/SignWitch"
                        link1="Project Link Back-end"
                        link2="Project Link Front-end"
                        imageUrl="/Portfolio/Gebarentaal.png"
                        darkMode={darkMode}
                    />
                    <Phone title="Echo"
                           pOne="In the first semester of the second year we had to create a dystopian platform. Echo is a platform similar to Twitter, where likes and views generates into money and social standing."
                           pTwo="In this project I mostly worked on tweaking the design, the profile page and the friends overview. This was both about the front-end and the back-end functionalities."
                           languages="PHP - SQL - JavaScript - CSS"
                           githubUrl="https://stud.hosted.hr.nl/1074458/tle1/public/"
                           imageUrl="/Portfolio/Echo.png"
                           darkMode={darkMode}
                    />
                    <Desktop
                        title="Portal Studio"
                        pOne="In the fourth semester of the first year we created a game. This game was a Sci-Fi explorer game, featuring The Little Alchimist who travelled through worlds. It was based on the Schiecentrale and its history."
                        pTwo="In this project I was in charge of the concept design, part of the art (all handmade by our team) and the programming of a few of the levels."
                        languages="Excalibur - Javascript"
                        githubUrl1="https://spacefroggy.itch.io/portalstudio"
                        githubUrl2="https://github.com/GhostyHobbit/PortalStudio"
                        link1="Itch.io Link"
                        link2="Project Link"
                        imageUrl="/Portfolio/PortalStudio.png"
                        darkMode={darkMode}
                    />
                    <Phone title="Restorama"
                           pOne="In the third semester of the first year we were tasked to create an accessible website that could aid visually impaired people in finding accessible restaurants. Restorama featured tag based filter systems, accessibility notes and reviews of other visitors."
                           pTwo="I was in charge of the concept and the design. Here I focussed on calm but contrasting colours and big, readable fonts."
                           languages="JavaScript - PHP - SQL - CSS"
                           githubUrl="https://github.com/mottofurui/cle3-blog"
                           imageUrl="/Portfolio/Restorama.png"
                           darkMode={darkMode}
                    />
                    <Desktop
                        title="De Wolhoop"
                        pOne="In the second semester of the first year we were tasked to create a reservastion system. This website was for people to commssion custom dyed yarn options."
                        pTwo="Since this design was for my commissioner, I ended up being in charge of the design. Next to that I worked on some small database stuff and functionalities."
                        languages="PHP - SQL - CSS - HTML"
                        githubUrl1="https://github.com/GhostyHobbit/CLE-reservering"
                        link1="Project Link"
                        imageUrl="/Portfolio/Wolhoop.png"
                        darkMode={darkMode}
                    />
                    <h2 id="contact" className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-5xl font-bold font-spaceMono underline decoration-accentGreen pl-14 pt-14`}>CONTACT</h2>
                    <div className={`text-${darkMode ? 'greenLight' : 'greenDark'} pl-14 py-6 border-b-accentGreen border-b-4`}>
                        <div className="flex items-center">
                            <p className="font-spaceMono py-2 text-3xl">Email:</p>
                            <p className="font-helvetica text-2xl pl-20 underline hover:decoration-accentGreen duration-300 ease-in-out">lucasvdkoppel@gmail.com</p>
                        </div>
                        <div className="flex items-center">
                            <p className="font-spaceMono py-2 text-3xl">LinkedIn:</p>
                            <a href="https://www.linkedin.com/in/lucas-van-de-koppel-fullstack-dev/" className="font-helvetica text-2xl pl-7 underline hover:decoration-accentGreen duration-300 ease-in-out">Lucas van de Koppel</a>
                        </div>
                        <div className="flex items-center">
                            <p className="font-spaceMono py-2 text-3xl">Github:</p>
                            <a href="https://github.com/GhostyHobbit" className="font-helvetica text-2xl pl-16 underline hover:decoration-accentGreen duration-300 ease-in-out">GhostyHobbit</a>
                        </div>
                        <p className="font-spaceMono tracking-widest text-xl pt-20 pr-14 text-right">This portfolio was made using React and Tailwind</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
