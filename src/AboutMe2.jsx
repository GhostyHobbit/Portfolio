import React from "react";

function About2({darkMode, title, pOne, pTwo, githubUrl1, githubUrl2, link1, link2, imageUrl}) {
    return (
        <>
            <div className="flex px-14 pt-14 pb-14">
                <div className="pr-14">
                    <h1 className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-7xl font-spaceMono font-bold pb-10`}>{title}</h1>
                    <p className={`text-${darkMode ? 'greenLight' : 'greenDark'} font-helvetica text-2xl pb-7`}>{pOne}</p>
                    <p className={`text-${darkMode ? 'greenLight' : 'greenDark'} font-helvetica text-2xl pb-14`}>{pTwo}</p>
                    <div className="flex flex-col mt-4">
                        {githubUrl1 && link1 ? <a href={githubUrl1} className={`font-spaceMono font-bold text-${darkMode ? 'greenLight' : 'greenDark'} text-center text-3xl pb-7 tracking-widest hover:underline decoration-accentGreen`}> &lt;&lt; {link1} &gt;&gt; </a> : "" }
                        {githubUrl2 && link2 ? <a href={githubUrl2} className={`font-spaceMono font-bold text-${darkMode ? 'greenLight' : 'greenDark'} text-center text-3xl pb-7 tracking-widest hover:underline decoration-accentGreen`}> &lt;&lt; {link2} &gt;&gt; </a> : ""}
                    </div>
                </div>
                <img
                    src={imageUrl}
                    alt="CMGT-logo"
                    className="h-[70vh]"
                />
            </div>
        </>
    )
}

export default About2;