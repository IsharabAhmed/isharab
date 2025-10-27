import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-secondary leading-relaxed space-y-6">
        <p>
          My journey in technology began with a fascination for creating intelligent systems. As a core developer for Voice Subnet 16 and Music Subnet 50 on the Bittensor network, I dove deep into AI, using frameworks like TensorFlow and PyTorch to solve complex problems. This experience honed my analytical foundation. On the side, as a hobby, I dabbled in mobile development with Flutter, which taught me valuable lessons in user-centric design.
        </p>
        <p>
          This innate curiosity has now led me to a new frontier: cybersecurity. I believe that understanding how to build complex systems provides a unique advantage in learning how to break them—and, more importantly, how to secure them. My focus is now intensely on bug bounty hunting and web application security. Every day is a new challenge, whether I'm dissecting CWEs on Hack The Box or climbing the ranks on PortSwigger's Web Security Academy.
        </p>
        <p>
          This portfolio documents my evolution. I'm channeling the tenacity and analytical rigor from my AI background into the world of ethical hacking. My ambition is to become a top-tier security researcher, contribute to a safer internet, and pursue advanced certifications like OSWE and OSEE. I'm not just changing careers; I'm evolving my craft.
        </p>
      </div>
    </Section>
  );
};

export default About;