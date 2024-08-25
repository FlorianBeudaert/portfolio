import React from "react";

const Experience = () => {
    return (
        <div className="pt-16 min-h-screen flex flex-col justify-start mx-4" id="experience">
            <h1 className="text-4xl font-bold text-primary text-center">Experiences & Hobbies</h1>
            <div className="flex flex-col mt-8 md:flex-row md:space-x-4">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary">Experiences</h2>
                    <div className="mt-6">
                        <div className="card bg-base-200 p-4 rounded-box">
                            <h1 className="text-xl font-bold text-primary">Alternant Développeur Web - 2023/2024</h1>
                            <h2 className="text-lg font-bold text-primary">Dupont Restauration - Libercourt</h2>
                            <p className="mt-2 text-base text-secondary">Developpement d'applications et de scripts en PHP Symfony</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 mt-8 md:mt-0">
                    <h2 className="text-2xl font-bold text-primary">Diplômes/Formation</h2>
                    <div className="mt-6">
                        <a className="card bg-base-200 p-4 rounded-box hover:outline hover:outline-2 hover:outline-primary hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#a15cfa,0_0_15px_#a15cfa,0_0_30px_#b886ff] hover:transition hover:duration-300 ease-in-out" href="https://www.epitech.eu/formation-alternance/pre-msc-post-bac2/" target="_blank">
                            <h1 className="text-xl font-bold text-primary">Architecte de système information - 2024/2027</h1>
                            <h2 className="text-lg font-bold text-primary">Epitech (Pré-Msc/Msc) - LILLE</h2>
                            <p className="mt-2 text-base text-secondary">Formation en developpement web et cybersécurité avec une alternance de 2 ans et demi offrant un RNCP de niveau 7</p>
                        </a>
                    </div>
                    <div className="mt-6">
                        <a className="card bg-base-200 p-4 rounded-box hover:outline hover:outline-2 hover:outline-primary hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#a15cfa,0_0_15px_#a15cfa,0_0_30px_#b886ff] hover:transition hover:duration-300 ease-in-out" href="https://www.webacademie.org/" target="_blank">
                            <h1 className="text-xl font-bold text-primary">Développeur Intégrateur Web - 2022/2024</h1>
                            <h2 className="text-lg font-bold text-primary">Epitech (Web@cademie) - LILLE</h2>
                            <p className="mt-2 text-base text-secondary">Formation en developpement web avec une alternance de 14 mois offrant un RNCP de niveau 5</p>
                        </a>
                    </div>
                    <div className="mt-6">
                        <a className="card bg-base-200 p-4 rounded-box hover:outline hover:outline-2 hover:outline-primary hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#a15cfa,0_0_15px_#a15cfa,0_0_30px_#b886ff] hover:transition hover:duration-300 ease-in-out" href="https://www.lycee-pasteur.fr/?page_id=122" target="_blank">
                            <h1 className="text-xl font-bold text-primary">BAC STI2D - 2022</h1>
                            <h2 className="text-lg font-bold text-primary">Lycée Louis Pasteur - Hénin-Beaumont</h2>
                            <p className="mt-2 text-base text-secondary">Bac Scientifique et Technologique de l'Industrie et du Développement Durable</p>
                        </a>
                    </div>
                </div>
                <div className="flex-1 mt-8 md:mt-0">
                    <h2 className="text-2xl font-bold text-primary">Hobbies</h2>
                    <div className="mt-6">
                        <div className="card bg-base-200 p-4 rounded-box">
                            <h1 className="text-xl font-bold text-primary">Sport</h1>
                            <p className="mt-2 text-base text-secondary">Pratique occasionnellement de l'escalade</p>
                        </div>
                        <div className="card bg-base-200 p-4 mt-6 rounded-box">
                            <h1 className="text-xl font-bold text-primary">Manga</h1>
                            <p className="mt-2 text-base text-secondary">Collectionne et lit des mangas</p>
                        </div>
                        <div className="card bg-base-200 p-4 mt-6 rounded-box">
                            <h1 className="text-xl font-bold text-primary">Anime</h1>
                            <p className="mt-2 text-base text-secondary">Je regarde depuis plusieurs année des animes</p>
                        </div>
                        <div className="card bg-base-200 p-4 mt-6 rounded-box">
                            <h1 className="text-xl font-bold text-primary">Jeux vidéo</h1>
                            <p className="mt-2 text-base text-secondary">Ma passion principale, est les jeux vidéo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;