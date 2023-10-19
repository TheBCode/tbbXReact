import React from 'react';

function Hero() {
    return (
        <div className="bg-red-500 text-white min-h-screen flex items-center">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Elevate Your Brand with Creativity
                </h1>
                <p className="text-lg">
                    Welcome to The Buyck Brand, your gateway to innovative web development, striking graphic design, and captivating sound production. We're dedicated to making your brand stand out and leave a lasting impression.
                </p>
                <p className="text-lg mt-4">
                    Our tailored services are designed to meet your unique needs, because we believe your brand is one-of-a-kind. From concept to launch, we'll work closely with you to turn your vision into reality. Whether you're seeking a stunning website, eye-catching design work, or unforgettable sound production, we've got you covered.
                </p>
                <p className="text-lg mt-4">
                    Explore our portfolio to witness the excellence we bring to every project. Don't hesitate to reach out if you have any questions or just want to discuss your ideas. Let's embark on a creative journey together and make something extraordinary!
                </p>
                <a href="#whoAmI" className="bg-white text-red-500 hover:bg-red-200 px-4 py-2 rounded-md mt-8 inline-block">
                    Learn More
                </a>
            </div>
        </div>
    );
}

export default Hero;
