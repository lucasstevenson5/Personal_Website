import React, { Component } from 'react';

import Projects from './Projects';

import fantasyFootball from '../images/fantasyfootballHomepage.png';
import cervezApp from '../images/cervezAppHomepage.png';
import carMaintenance from '../images/car-maintenance-manager-Homepage.png';

class ProjectsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userProjects: [
                {
                    name: "Fantasy Football",
                    img: fantasyFootball,
                    description: "This app was designed to try to mimic ESPN's Fantasy Football. Being that we were only given a week to complete the project, this app was focused on the basics. Signing up, logging in, creating team, adding players, dropping players, maintaining basic fantasy football rules.",
                    skills: "Express, NodeJS, JavaScript, CSS",
                    githubRepo: "https://github.com/lucasstevenson5/fantasy-football",
                    websiteURL: "https://fantasy-football-lucas.herokuapp.com/",
                    showDescription: false
                },
                {
                    name: "CervezApp",
                    img: cervezApp,
                    description: "This app was designed to give users the opportunity to sign up, login, search breweries and beers and filter by city and state. Along with that users are able to add breweries and beers to 3 categories: Favorite, Tried, and Want to try.",
                    skills: "React, JavaScript, CSS",
                    githubRepo: "https://github.com/lucasstevenson5/Brewery-App",
                    websiteURL: "http://cervezapp.surge.sh/",
                    showDescription: false
                },
                {
                    name: "Car Maintenance Manager",
                    img: carMaintenance,
                    description: "This app was designed to give users the option of keeping track of their car's maintenance history electronically. This app gives the user the option to sign up, login, and add their cars to their garage. From there, users can see generic maintenance schedules. They can also add their own cars maintenance schedule along with adding maintenance items to a maintenance log and can export it to a pdf for their convenience.",
                    skills: "Express, NodeJS, React, JavaScript, TailwindCSS",
                    githubRepo: "https://github.com/lucasstevenson5/Car-Maintenance-Manager",
                    githubRepo2: "https://github.com/lucasstevenson5/Car-Maintenance-Manager-Frontend",
                    websiteURL: "http://car-maintenance-app.surge.sh/",
                    showDescription: false
                }
            ]
        }
    }

    handleClick = (e, item) => {
        e.preventDefault();
        let userProjects = this.state.userProjects;
        for (let i=0; i < userProjects.length; i++) {
            if (item === userProjects[i].name) {
                userProjects[i].showDescription = !userProjects[i].showDescription;
            }
        }
        this.setState({
            userProjects
        })
    }

    render() {
        return (
            <div>
                <main>
                    <div className="flex flex-wrap justify-center">
                        {this.state.userProjects.map((project, id) => {
                            return  <Projects
                                        handleClick={this.handleClick}
                                        project={project}
                                        key={id}
                                    />
                        })}
                    </div>                    
                </main>
            </div>
        )
    }
}

export default ProjectsContainer;