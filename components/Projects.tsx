import React from 'react';
import Section from './Section';
import GitHubIcon from './icons/GitHubIcon';
import type { Project } from '../types';

const projectsData: Project[] = [
  {
    title: 'Voice Subnet 16 (Bittensor)',
    description: 'A core developer role in building a decentralized AI subnet focused on voice synthesis and recognition on the Bittensor network.',
    tags: ['AI', 'Python', 'PyTorch', 'Blockchain'],
    githubUrl: '#',
  },
  {
    title: 'Social Media Automation',
    description: 'Developing automated workflows using N8N to manage and schedule social media content, streamlining digital presence.',
    tags: ['Automation', 'N8N', 'API'],
    githubUrl: '#',
  },
  {
    title: 'Sushi Restaurant App',
    description: 'A cross-platform mobile application for a sushi restaurant, featuring a menu, ordering system, and reservations. Built as a hobby to explore mobile development.',
    tags: ['Flutter', 'Dart', 'Mobile', 'UI/UX'],
    githubUrl: '#',
  },
  {
    title: 'Personal Expense Tracker',
    description: 'A simple yet effective mobile app to track daily expenses, categorize spending, and visualize financial habits.',
    tags: ['Flutter', 'Dart', 'Mobile', 'Finance'],
    githubUrl: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="max-w-3xl mx-auto space-y-8">
        {projectsData.map((project) => (
          <div key={project.title} className="bg-card p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:border-accent/50">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-display font-bold text-accent">{project.title}</h3>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="text-secondary hover:text-accent transition-colors flex-shrink-0 ml-4">
                  <GitHubIcon className="w-6 h-6" />
                </a>
              )}
            </div>
            <p className="text-secondary text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="bg-gray-800 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;