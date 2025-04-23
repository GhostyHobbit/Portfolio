import React from "react";

function Desktop({darkMode, title, pOne, pTwo, languages, githubUrl1, githubUrl2, link1, link2, imageUrl}) {
    return (
        <>
            <div className="px-14 pt-[4vh] pb-20 min-h-[100vh] border-b-accentGreen border-b-4">
                <h1 className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-center text-7xl font-spaceMono font-bold pb-16`}>{title}</h1>
                <div className="flex">
                    <div className="flex flex-col items-center min-w-[40vw]">
                        <img
                            src={imageUrl}
                            alt="projectImage"
                            className="min-w-[42vw] rounded-xl"
                        />
                        <div className="flex flex-col mt-16">
                            <a href={githubUrl1} className={`text-${darkMode ? 'greenLight' : 'greenDark'} font-spaceMono font-bold text-center text-3xl pb-7 tracking-widest hover:underline decoration-accentGreen`}> &lt;&lt; {link1} &gt;&gt; </a>
                            {githubUrl2 && link2 ? <a href={githubUrl2} className={`text-${darkMode ? 'greenLight' : 'greenDark'} font-spaceMono font-bold text-center text-3xl tracking-widest hover:underline decoration-accentGreen`}> &lt;&lt; {link2} &gt;&gt; </a> : ""}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center min-w-[40vw]">
                        <div className="pl-14">
                            <p className={`text-${darkMode ? 'greenLight' : 'greenDark'} font-helvetica text-2xl pb-7`}>{pOne}</p>
                            <p className={`text-${darkMode ? 'greenLight' : 'greenDark'} font-helvetica text-2xl pb-14`}>{pTwo}</p>
                        </div>
                        <div className="bg-accentGreen ml-14 mt-24 px-6 py-4 rounded-2xl min-w-[47vw]">
                            <p className="text-greenLight font-spaceMono font-bold text-5xl pb-4">Made with:</p>
                            <p className="text-greenLight font-spaceMono text-3xl tracking-customDesktop">{languages}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Desktop;