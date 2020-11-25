import React from 'react';
import avatar from '../images/redheadAvatar.png';

function AboutMe(props) {
    return (
        <div>
            <h1 className="text-center mt-20 mb-10 text-3xl text-platinum">
                My Name is Lucas Stevenson
            </h1>
            <div className="flex justify-center">
                <img 
                    src={avatar} 
                    alt="My Avatar" 
                    className="object-center bg-platinum border-solid border-4 border-black rounded-2xl"
                />
            </div>
            <div className="overscroll-auto h-80 xl:h-full overflow-hidden overflow-y-auto mt-10">
                <div className="flex justify-center">
                    <p className="mt-10 mx-10 text-xl text-orangePeel lg:w-3/5">
                        I am a <span className="text-platinum">Design Engineer</span> at John Deere with a focus on Engine Integration.
                        My background consists of two and a half years at <span className="text-platinum">John Deere Power Systems</span> in 
                        their Engineering Development Program where I was given the opportunity to tackle three different job roles in two and a half years.
                    </p>
                </div>
                <div className="flex justify-center">
                    <p className="my-10 mx-10 text-xl text-orangePeel lg:w-3/5">
                        My Education consists of graduating from the <span className="text-platinum">University of Illinois in Urbana-Champaign</span> with 
                        a BS in in <span className="text-platinum">Mechanical Engineering</span>. Most recently, I completed a 12 week Software Engineering
                        Immersive program through General Assembly where I learned to code in <span className="text-platinum">JavaScript</span> and learned 
                        how to code in <span className="text-platinum">React</span> for front end applicatons like my website you see here and 
                        also <span className="text-platinum">Express</span> for Backend applications. Upon completion of the program, 
                        I added the title of <span className="text-platinum">Full Stack Web Developer</span> to my toolset.
                    </p>
                </div>
            </div>
            
            
        </div>
    )
}

export default AboutMe;