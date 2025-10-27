import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D03AQHOzbfZS-Qd1A/profile-displayphoto-crop_800_800/B4DZnqJi9XGQAI-/0/1760569996123?e=1762992000&v=beta&t=3IQNe6Z5-r_S9aMauezYPVixYN1Br4rSoENXBhMXUXo" 
            alt="Isharab Ahmed" 
            className="rounded-full w-36 h-36 md:w-48 md:h-48 border-4 border-accent"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-accent">
          AI Developer
        </h1>        
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
          Turned
        </h1>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
          <span className="text-accent">Cyber Sentinel.</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-8">
          Leveraging a deep background in artificial intelligence to dissect and defend the digital world. Passionate about uncovering vulnerabilities and building a more secure web.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-accent text-background font-bold py-3 px-8 rounded-md hover:bg-accent-dark transition-colors duration-300"
          >
            View My Projects
          </a>
          <a
            href="#blog"
            className="w-full sm:w-auto bg-transparent border-2 border-secondary text-secondary font-bold py-3 px-8 rounded-md hover:bg-secondary hover:text-background transition-all duration-300"
          >
            Read My Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;