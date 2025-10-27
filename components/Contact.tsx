
import React from 'react';
import Section from './Section';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
// import TwitterIcon from './icons/TwitterIcon';
import MailIcon from './icons/MailIcon';

const socialLinks = [
  { name: 'GitHub', icon: GitHubIcon, url: 'https://www.github.com/isharabahmed' },
  { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/isharabahmed/' },
  // { name: 'Twitter', icon: TwitterIcon, url: '#' },
];

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-secondary mb-8">
          I'm always open to discussing new opportunities, interesting projects, or just talking about tech and security. Feel free to reach out!
        </p>
        <a
          href="mailto:isharab150@gmail.com"
          className="inline-flex items-center justify-center bg-accent text-background font-bold py-3 px-8 rounded-md hover:bg-accent-dark transition-colors duration-300 text-lg"
        >
          <MailIcon className="w-5 h-5 mr-3" />
          Say Hello
        </a>
        <div className="flex justify-center space-x-6 mt-12">
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-secondary hover:text-accent transition-colors duration-300">
              <Icon className="w-8 h-8" />
            </a>
          ))}
        </div>
        {/* <div className="mt-12">
           <a href="#" className="text-accent font-bold hover:underline">Download My CV</a>
        </div> */}
      </div>
    </Section>
  );
};

export default Contact;
