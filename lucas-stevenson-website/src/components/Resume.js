import React from 'react';

function Resume(props) {
    return (
        <div className="flex justify-center mt-10 text-platinum">
            <div className="w-2/5 bg-onyx border-solid border-4 border-silverSand p-2">
                <p className="text-center">My Resume</p>
                <h1 className="underline mb-2">Work Experience</h1>
                <div className="flex justify-between">
                    <p>Software Engineering Immsersive (SEI) Program</p>
                    <p>08/20 - Present</p>
                </div>
                <p className="italic mb-2">SEI Student</p>
                <ul className="list-disc list-inside text-sm mb-2">
                    <li>Got reskilled through General Assembly to gain necessary skills to work in IT</li>
                    <li>Created a Frontend Web Application with Reat that allowed users to track breweries they've visted</li>
                    <li>Developed a fantasy football Backend Web Application with Express and NodeJS</li>
                    <li>Delivered a Full Stack Application that allows a user to track each of their car's maintenance history</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Resume;