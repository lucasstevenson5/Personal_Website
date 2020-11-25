import React from 'react';

function Projects(props) {
    console.log(props)
    return (
        <div className="m-2 border-2 border-black p-2 bg-orangePeel text-center text-platinum max-w-sm sm:max-w-xl">
            <br /><h4>{props.project.name}</h4>
            <div className="flex justify-center">
                <img src={props.project.img} alt="picture of app homepage" 
                    className="h-48 max-w-xs sm:max-w-md" 
                />
            </div>
            
            <div className="text-platinum flex flex-col justify-between sm:flex-row">
                <p>Live Deployed Website: </p>
                <a 
                    href={props.project.websiteURL}
                    className="text-bleu underline hover:text-platinum"
                    target="_blank"
                >{props.project.name} Website</a> 
            </div>

            <div className="text-platinum flex flex-col justify-between sm:flex-row">
                <p>Github Main Repo: </p>
                <a 
                    href={props.project.githubRepo}
                    className="text-bleu underline hover:text-platinum"
                    target="_blank"
                >{props.project.name} Repository</a> 
            </div>

            {props.project.githubRepo2 &&
                <div className="text-platinum flex flex-col justify-between sm:flex-row">
                    <p>Github Secondary Repo: </p>
                    <a 
                        href={props.project.githubRepo2}
                        className="text-bleu underline hover:text-platinum"
                        target="_blank"
                    >Frontend Repository</a> 
                </div>
            }

            <div className="text-platinum flex flex-col justify-between sm:flex-row">
                <p className="text-platinum mr-2">Demonstrated Skills: </p>
                <span className="text-bleu">{props.project.skills}</span>
            </div>

            
            {props.project.showDescription ?
                <div>
                    <p className="text-bleu">Description:</p>
                    <p>{props.project.description}</p>
                    <p onClick={(e) => props.handleClick(e, props.project.name)}
                        className="text-bleu underline hover:text-platinum">Hide Description</p>
                </div>
            :
                <div>
                    <p onClick={(e) => props.handleClick(e, props.project.name)}
                        className="text-bleu underline hover:text-platinum">Show Description</p>
                </div>
            }
            
        </div>
    )
}

export default Projects;