import React, { Component } from 'react';

import Projects from './Projects';

class ProjectsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userProjects: [
                {
                    name: "Fantasy Football",
                    img: "",
                    description: "",
                    skills: "Express, NodeJS, JavaScript, CSS",
                    githubRepo: "",
                    websiteURL: ""
                },
                {
                    name: "CervezApp",
                    img: "",
                    description: "",
                    skills: "React, JavaScript, CSS",
                    githubRepo: "",
                    websiteURL: ""
                },
                {
                    name: "Car Maintenance Manager",
                    img: "",
                    description: "",
                    skills: "Express, NodeJS, React, JavaScript, TailwindCSS",
                    githubRepo: "",
                    websiteURL: ""
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <main>
                    <div className="flex flex-wrap justify-center">
                        {this.state.userProjects.map((project, id) => {
                            return  <Projects
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