import React, { useState } from "react";

const Skill = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const skills = [
        {
            title: "Outils Front-End",
            items: [
                { name: "HTML", logo: "/assets/images/skills/html.png", level: 4 },
                { name: "CSS", logo: "/assets/images/skills/css.png", level: 3 },
                { name: "JavaScript", logo: "/assets/images/skills/js.png", level: 3 },
                { name: "React", logo: "/assets/images/skills/react.png", level: 2 }
            ]
        },
        {
            title: "Outils Back-End",
            items: [
                { name: "PHP", logo: "/assets/images/skills/php.png", level: 3 },
                { name: "Python", logo: "/assets/images/skills/python.png", level: 2 },
                { name: "Node.js", logo: "/assets/images/skills/nodejs.png", level: 2 },
                { name: "Ruby", logo: "/assets/images/skills/ruby.png", level: 1 },
                { name: "MySQL", logo: "/assets/images/skills/mysql.png", level: 2 }
            ]
        },
        {
            title: "Autres Outils",
            items: [
                { name: "Git", logo: "/assets/images/skills/git.png", level: 3 },
                { name: "Docker", logo: "/assets/images/skills/docker.png", level: 2 }
            ]
        }
    ];

    const renderSkillItems = (items) => {
        return items.map((item, index) => (
            <div key={index} className="flex flex-col xl:flex-row justify-between items-center h-20">
                <h1 className="text-xl font-bold text-primary">{item.name}</h1>
                <div className="flex items-center gap-4">
                    <div className="w-12">
                        <img src={item.logo} alt={item.name} />
                    </div>
                    <div className="flex gap-1 my-auto">
                        {[...Array(item.level)].map((_, i) => (
                            <div key={i} className="w-12 h-6 bg-primary transform skew-x-12"></div>
                        ))}
                        {[...Array(5 - item.level)].map((_, i) => (
                            <div key={i} className="w-12 h-6 border-2 border-base-content transform skew-x-12 bg-base-content"></div>
                        ))}
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="pt-16 min-h-screen flex flex-col justify-start md:mx-8 xl:w-3/4 xl:mx-auto mx-4" id="skill">
            <div className="flex flex-col w-full">
                <h1 className="text-4xl font-bold text-primary text-center">Compétences</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="flex flex-col w-full gap-4">
                        <h1 className="text-2xl font-bold text-primary">Hard Skills</h1>
                        {skills.map((skill, index) => (
                            <div key={index} className="collapse collapse-arrow bg-base-200 w-full hover:bg-base-300">
                                <input
                                    type="checkbox"
                                    checked={openDropdown === index}
                                    onChange={() => setOpenDropdown(openDropdown === index ? null : index)}
                                />
                                <div className="collapse-title text-xl font-medium text-primary">{skill.title}</div>
                                <div className={`collapse-content ${openDropdown === index ? 'block' : 'hidden'}`}>
                                    {renderSkillItems(skill.items)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <h1 className="text-2xl font-bold text-primary">Soft Skills</h1>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="card bg-base-200 p-4 border border-base-300">
                                <h1 className="text-xl font-bold text-primary">Esprit d'équipe</h1>
                                <p className="text-secondary">Capacité à travailler en collaboration avec d'autres personnes.</p>
                            </div>
                            <div className="card bg-base-200 p-4 border border-base-300">
                                <h1 className="text-xl font-bold text-primary">À l'écoute</h1>
                                <p className="text-secondary">Capacité à écouter les autres et à comprendre leurs besoins.</p>
                            </div>
                            <div className="card bg-base-200 p-4 border border-base-300">
                                <h1 className="text-xl font-bold text-primary">Autonome</h1>
                                <p className="text-secondary">Capacité à travailler de manière indépendante.</p>
                            </div>
                            <div className="card bg-base-200 p-4 border border-base-300">
                                <h1 className="text-xl font-bold text-primary">Rigoureux</h1>
                                <p className="text-secondary">Capacité à travailler de manière précise et méthodique.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;