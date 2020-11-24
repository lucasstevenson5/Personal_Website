import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="text-platinum border-solid border-t-2 border-black block flex justify-evenly text-center p-8 bg-onyx text-xl">
            <a href="https://www.linkedin.com/in/lucas-stevenson-b8914b122/" target="_blank">
                <img 
                    src="https://image.flaticon.com/icons/png/512/174/174857.png" 
                    alt="Linked In Site"
                    className="h-8" 
                />
            </a>
            <a href="https://www.facebook.com/lucas.t.stevenson" target="_blank">
                <img 
                    src="https://cdn.pixabay.com/photo/2018/05/08/18/25/facebook-3383596_640.png" 
                    alt="Facebook Site"
                    className="h-8" 
                />
            </a>
            <a href="mailto: lucasstevenson5@gmail.com">
                <img 
                    src="https://img.flaticon.com/icons/png/512/281/281769.png" 
                    alt="Email"
                    className="h-8" 
                />
            </a>
        </footer>
    )
}

export default Footer;