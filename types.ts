// Fix: Import React to make React types available in this file.
import React from 'react';

export interface Skill {
  name: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  tags: string[];
  url: string;
  content: string;
}
