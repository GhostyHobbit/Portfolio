import React from "react";

function Phone({darkMode, title, pOne, pTwo, languages, githubUrl, imageUrl}) {
    return (
        <>
            <div className="flex justify-center px-14 pt-[7vh] mb-10 min-h-[100vh] border-b-accentGreen border-b-4">
                <div className="pr-14">
                    <h1 className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-right text-7xl font-spaceMono font-bold pb-10`}>{title}</h1>
                    <p className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-right font-helvetica text-2xl pb-7`}>{pOne}</p>
                    <p className={`text-${darkMode ? 'greenLight' : 'greenDark'} text-right font-helvetica text-2xl pb-14`}>{pTwo}</p>
                    <div className="bg-accentGreen px-6 py-6 rounded-2xl mb-10">
                        <p className="text-greenLight font-spaceMono font-bold text-5xl pb-7">Made with:</p>
                        <p className="text-greenLight font-spaceMono text-3xl tracking-custom">{languages}</p>
                    </div>
                    <div className="text-right">
                        <a href={githubUrl} className={`text-${darkMode ? 'greenLight' : 'greenDark'} font-spaceMono font-bold text-3xl tracking-widest hover:underline decoration-accentGreen`}> &lt;&lt; Project Link &gt;&gt; </a>
                    </div>
                </div>
                <img
                    src={imageUrl}
                    alt="projectImage"
                    className="h-[80vh] rounded-xl"
                />

            </div>

        </>
    )
}

export default Phone;