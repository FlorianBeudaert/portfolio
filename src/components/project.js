import React, { useState, useEffect } from "react";

const projects = [
    {
        title: "My Twitter",
        description: "Il s'agit de notre premier projet de groupe à la Web@cadémie. Le but étais de créer un clone de Twitter en utilisant les technologies que nous avons appris durant notre moitier de première année.",
        image: "./assets/images/projects/twitter.png",
        github: "https://github.com/FlorianBeudaert/my-twitter"
    },
    {
        title: "E-commerce",
        description: "Projet de fin de première année à la Web@cadémie. Le but étais de créer un site e-commerce en groupe et en utilisant les technologies au choix.",
        image: "./assets/images/projects/ecommerce.png",
        github: "https://github.com/FlorianBeudaert/e-commerce"
    },
    {
        title: "My-RPG",
        description: "My-RPG est un projet de milieu de seconde année à la Web@cadémie. Le but étais de créer un RPG en ligne avec Ruby on Rails.",
        image: "./assets/images/projects/rpg.png",
        github: "https://github.com/FlorianBeudaert/my-rpg"
    },
    {
        title: "Téléscord (Projet Libre)",
        description: "Téléscord est le projet de fin de seconde année à la Web@cadémie. Le but étais de faire un projet au choix en groupe ou non et de le faire du du cahier des charges à la conception.",
        image: "./assets/images/projects/telescord.png",
        github: "none"
    },
    {
        title: "Torio (Projet Personnel)",
        description: "Torio est un projet personnel que j'ai commencer en parallele de mes études. Le but étais de créer un site de gestion de projet et de calendrier.",
        image: "./assets/images/projects/torio.png",
        github: "none"
    },
];

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(0);
    const [isManualSelection, setIsManualSelection] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const currentTheme = document.body.getAttribute('data-theme');
        setTheme(currentTheme);
    }, []);

    useEffect(() => {
        if (!isManualSelection) {
            const intervalId = setInterval(() => {
                setSelectedProject((prev) => (prev + 1) % projects.length);
            }, 5000);

            return () => clearInterval(intervalId);
        }
    }, [isManualSelection]);

    const handleProjectClick = (index) => {
        setIsManualSelection(true);
        setSelectedProject(index);
    };

    return (
        <div className="pt-16 min-h-screen flex flex-col justify-start md:mx-8 xl:w-3/4 xl:mx-auto mx-4" id="project">
            <h1 className="text-4xl font-bold text-primary text-center">Projets</h1>
            <div className="flex flex-col md:flex-row w-full mt-4">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    {projects.map((project, index) => (
                        <div key={index} className="mb-4">
                            <li
                                className={`text-xl font-bold cursor-pointer transition-transform transform pb-2 hover:text-primary-dark active:text-primary-dark ${selectedProject === index ? (theme === 'light' ? 'text-primary-dark' : 'text-primary-light') : 'text-primary-light'}`}
                                onClick={() => handleProjectClick(index)}
                            >
                                {project.title}
                            </li>
                            <div className={`md:hidden ${selectedProject === index ? 'block' : 'hidden'}`}>
                                <div className="card bg-base-100 shadow-lg mt-2 p-4 transition-opacity duration-300 ease-in-out border-2 border-base-300">
                                    <img src={project.image} alt={project.title} className="w-full object-cover mb-4 rounded-lg"/>
                                    <p className="text-base text-base-content mb-4">{project.description}</p>
                                    {project.github !== "none" ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-secondary">
                                            Accéder au GitHub
                                        </a>
                                    ) : (
                                        <button className="btn bg-base-200 text-secondary cursor-not-allowed hover:bg-base-200 border-1 border-base-300 hover:border-base-300">
                                            Aucun GitHub
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hidden md:block w-full md:w-1/2">
                    {projects.map((project, index) => (
                        selectedProject === index && (
                            <div key={index}
                                 className="card bg-base-100 shadow-lg mt-2 p-4 md:ml-4 md:w-3/4 transition-opacity duration-300 ease-in-out border-2 border-base-300">
                                <h2 className="text-xl font-bold text-primary">{project.title}</h2>
                                <img src={project.image} alt={project.title} className="w-full object-cover mb-4 rounded-lg"/>
                                <p className="text-base text-base-content mb-4">{project.description}</p>
                                {project.github !== "none" ? (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-secondary">
                                        Accéder au GitHub
                                    </a>
                                ) : (
                                    <button className="btn bg-base-200 text-secondary cursor-not-allowed hover:bg-base-200 border-1 border-base-300 hover:border-base-300">
                                        Aucun GitHub
                                    </button>
                                )}
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;