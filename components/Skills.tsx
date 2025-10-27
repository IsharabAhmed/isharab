import React from 'react';
import Section from './Section';
import CodeIcon from './icons/CodeIcon';
import type { SkillCategory } from '../types';

const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python' }, { name: 'JavaScript' }, { name: 'TypeScript' },
      { name: 'C' }, { name: 'C++' }, { name: 'Bash' }
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'TensorFlow' }, { name: 'PyTorch' }, { name: 'Scikit-learn' },
      { name: 'NLP' }, { name: 'Computer Vision' }, { name: 'N8N Automation' }
    ],
  },
  {
    title: 'Cybersecurity & Hacking',
    skills: [
      { name: 'Web App Security' }, { name: 'Vulnerability Assessment' },
      { name: 'Penetration Testing' }, { name: 'OSINT' }, { name: 'Burp Suite' },
      { name: 'Nmap' }, { name: 'Metasploit' }
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'React' }, { name: 'Node.js' }, { name: 'HTML' }, { name: 'CSS' },
      { name: 'Tailwind CSS' }
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git' }, { name: 'Docker' }, { name: 'GitHub' }, { name: 'VS Code' },
      { name: 'Linux' }, { name: 'AWS' }
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category) => (
          <div key={category.title} className="bg-card p-6 rounded-lg border border-gray-800 hover:border-accent transition-all duration-300">
            <h3 className="text-xl font-display font-bold text-accent mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center text-secondary">
                  <CodeIcon className="w-4 h-4 mr-3 text-accent" />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;