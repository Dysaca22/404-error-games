import { Ghost, Bug } from "lucide-react";
import React from "react";

import "../styles/glitch.css";

const games = [
    {
        id: 1,
        title: "404 Quest",
        description: "Navigate through the lost pages of the internet",
        image: "https://placeholder.com/300x200",
        category: "RPG",
    },
    {
        id: 2,
        title: "Bug Invasion",
        description: "Fight against corrupted code and system crashes",
        image: "https://placeholder.com/300x200",
        category: "Action",
    },
    {
        id: 3,
        title: "Lost in Code",
        description: "Solve debugging puzzles in a glitched reality",
        image: "https://placeholder.com/300x200",
        category: "Puzzle",
    },
    {
        id: 4,
        title: "Cyber Chase",
        description: "Race through broken firewalls and data streams",
        image: "https://placeholder.com/300x200",
        category: "Racing",
    },
];

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-red-900 text-white overflow-hidden">
            {/* Header */}
            <header className="py-8 text-center relative pointer-events-none flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <h1 className="text-8xl font-bold glitch" data-text="404">
                        404
                    </h1>
                    <h2 className="text-4xl font-bold">Error Games</h2>
                </div>
                <p className="text-xl text-red-300 hover:scale-110 transition-transform duration-300">
                    Donde los errores hacen parte del juego
                </p>
            </header>

            {/* Game Cards Grid */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className="bg-black/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:glitch hover:shadow-lg hover:shadow-red-500/50"
                        >
                            <div className="h-48 bg-gray-800 flex items-center justify-center group">
                                <Bug className="w-20 h-20 text-red-500 opacity-50 group-hover:rotate-180 transition-transform duration-500" />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold hover:text-red-400 transition-colors duration-300">
                                        {game.title}
                                    </h3>
                                    <span className="bg-red-600 px-2 py-1 rounded-full text-sm hover:bg-red-700 transition-colors duration-300">
                                        {game.category}
                                    </span>
                                </div>
                                <p className="text-gray-300 hover:text-white transition-colors duration-300">
                                    {game.description}
                                </p>
                                <button className="mt-4 w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg flex items-center justify-center transform hover:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50">
                                    <Ghost
                                        className="mr-2 animate-bounce"
                                        size={20}
                                    />
                                    ERROR_PLAY.exe
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-32 left-10 animate-ping">
                <Bug size={48} className="text-red-500 opacity-50" />
            </div>
            <div className="absolute top-10 right-10 hover:animate-none pointer-events-none">
                <div className="text-6xl font-mono text-red-500 opacity-30 hover:opacity-100 transition-opacity duration-300">
                    Error
                </div>
            </div>
        </div>
    );
};

export default Home;
