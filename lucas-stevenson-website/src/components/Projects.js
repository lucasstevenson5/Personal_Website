import React from 'react';

function Projects(props) {
    console.log(props)
    return (
        <div className="m-2 border-2 border-black p-2 bg-orangePeel text-center text-platinum max-w-sm">
            <br /><h4>{props.project.name}</h4>
            {/* <img src={props.car.image} alt="picture of your car" 
                className="h-48 max-w-xs" 
            /> */}
        </div>
    )
}

export default Projects;