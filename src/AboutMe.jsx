import React from "react";

function About({darkMode, title, pOne, pTwo, languages, githubUrl1, githubUrl2, link1, link2, imageUrl}) {
    return (
        <>
            <div className="flex px-14 pt-14 pb-14 text-right">
                <img
                    src={imageUrl}
                    alt="CMGT-logo"
                    className="h-[70vh]"
                />
                <div className="pl-7">
                    <h1 className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-7xl font-spaceMono font-bold pb-10`}>{title}</h1>
                    <p className={`text-${darkMode ? 'greenLight' : 'greenDark'} font-helvetica text-2xl pb-7`}>{pOne}</p>
                    <p className={`text-${darkMode ? 'greenLight' : 'greenDark'} font-helvetica text-2xl pb-14`}>{pTwo}</p>
                </div>
            </div>
        </>
    )
}

export default About;