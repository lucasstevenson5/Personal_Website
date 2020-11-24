import React from 'react';
import avatar from '../redheadAvatar.png';

function Homepage(props) {
    return (
        <div>
            <h1 className="text-center mt-20 mb-10 text-3xl text-platinum">
                Welcome to my Website
            </h1>
            <div className="flex justify-center">
                <img 
                    src={avatar} 
                    alt="My Avatar" 
                    className="object-center bg-platinum border-solid border-4 border-black rounded-2xl"
                />
            </div>
        </div>
    )
}

export default Homepage;