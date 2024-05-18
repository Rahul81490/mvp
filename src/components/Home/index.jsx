import React from 'react';
import Navbar from '../Navbar';
import backgroundImage from '../../assets/background.avif'; // Import your background image

const Home = () => {
    return (
        <div id='home' className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar />
            <div className="flex flex-grow justify-center items-center relative">
                <div className="absolute inset-0 z-0 flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="container mx-auto text-center text-white relative z-10">
                    <div className="py-20">
                        <h1 className="text-6xl font-bold transition-opacity duration-1000 ease-in-out animate-fade-in">Sahara Tools and Die</h1>
                        <p className="text-2xl mt-4 transition-opacity duration-1000 ease-in-out animate-fade-in">We specialize in manufacturing high-quality tools and dies.</p>
                    </div>
                    {/* Add more content here */}
                </div>
            </div>
        </div>
    );
};

export default Home;
