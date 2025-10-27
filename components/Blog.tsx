import React from 'react';
import Section from './Section';
import BlogPostCard from './BlogPostCard';
import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    title: "My First XSS: A PortSwigger Lab Walkthrough (CWE-79)",
    description: "A detailed breakdown of my first successful Cross-Site Scripting exploit in a controlled lab environment. Notes, payloads, and key takeaways.",
    date: "October 26, 2023",
    tags: ["XSS", "PortSwigger", "Web Security"],
    url: "#",
    content: `
      <p>Diving into web security can feel like drinking from a firehose. There are so many vulnerabilities, tools, and concepts to grasp. For me, the best way to learn is by doing. That's why I've been spending a lot of time in PortSwigger's Web Security Academy. This post is a detailed walkthrough of one of the first labs I solved: a basic reflected XSS.</p>
      <p>The lab presented a simple search functionality. My initial reconnaissance involved testing how the application handled different inputs. I tried special characters, HTML tags, and simple JavaScript payloads. The goal was to see if the server would reflect my input back to the page without proper sanitization.</p>
      <p>My first successful payload was deceptively simple: <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code>. When I submitted this in the search bar, the glorious alert box popped up. It was a small victory, but a significant one. It confirmed that the application was vulnerable and that I was on the right track. This exercise was fundamental in understanding how un-sanitized user input can be a gateway for attackers.</p>
    `
  },
  {
    title: "From Developer to Hacker: How My AI Background Helps in OSINT",
    description: "Exploring the unexpected parallels between data analysis in AI and information gathering in Open-Source Intelligence for ethical hacking.",
    date: "October 25, 2023",
    tags: ["OSINT", "Cybersecurity", "AI"],
    url: "#",
    content: `
      <p>Pivoting from a career in AI development to cybersecurity might seem like a drastic shift, but I've found a surprising amount of overlap. One of the most significant areas is in Open-Source Intelligence (OSINT). In AI, a huge part of my job was data collection, cleansing, and analysis to train models. This involved scraping websites, using APIs, and sifting through vast datasets to find meaningful patterns.</p>
      <p>This skill set translates directly to OSINT. The core of OSINT is gathering publicly available information to build a profile of a target. Whether it's finding subdomains, leaked credentials, or social media profiles of employees, the process is fundamentally about data aggregation and analysis. My experience with Python scripting for data manipulation has been invaluable. I can quickly write scripts to automate searches across different platforms, parse results, and identify key pieces of information that might be useful in a penetration test.</p>
      <p>The analytical mindset fostered by AI—looking for patterns, anomalies, and connections—is the same mindset required for effective OSINT. It's not just about finding data; it's about understanding what it means and how it can be leveraged.</p>
    `
  },
  {
    title: "Hack The Box 'Lame' Writeup: My Approach to a Classic Easy Machine",
    description: "A step-by-step personal walkthrough of rooting the 'Lame' machine on Hack The Box, focusing on methodology and lessons learned.",
    date: "October 24, 2023",
    tags: ["HackTheBox", "Writeup", "Penetration Testing"],
    url: "#",
    content: `
      <p>Lame is one of the classic introductory machines on Hack The Box, and for good reason. It teaches fundamental enumeration and exploitation techniques. My first step, as always, was an Nmap scan. The scan revealed a few open ports, including FTP (21), SSH (22), and Samba (139/445).</p>
      <p>The FTP server allowed anonymous login, but there was nothing of interest there. The real entry point was the Samba service. A quick search on exploit-db for the Samba version revealed a well-known command execution vulnerability (CVE-2007-2447). I used a Metasploit module to exploit this, which gave me a root shell almost instantly.</p>
      <p>While Metasploit is great, I also wanted to understand the manual exploitation process. The vulnerability is triggered by a specially crafted username. I was able to replicate the exploit manually using a simple one-liner. This machine was a great lesson in the importance of thorough enumeration and patching known vulnerabilities.</p>
    `
  },
  {
    title: "Understanding SQL Injection: Beyond the Classic ' OR 1=1 --",
    description: "Diving deeper into the mechanics of SQL Injection, from basic concepts to more advanced techniques discovered during my studies.",
    date: "October 23, 2023",
    tags: ["SQLi", "Web Security", "Databases"],
    url: "#",
    content: `
      <p>SQL Injection (SQLi) is one of the most common and dangerous web vulnerabilities. The classic <code>' OR 1=1 --</code> is what everyone learns first, but the world of SQLi is much deeper. I've been studying different types of injections, like UNION-based, error-based, and blind SQLi.</p>
      <p>UNION-based SQLi is powerful because it allows an attacker to exfiltrate data from other tables in the database. The key is to match the number of columns in the original query. Error-based SQLi is a technique where you intentionally cause the database to throw an error that contains sensitive information.</p>
      <p>But the most challenging and fascinating is blind SQLi. This is where the application doesn't return any data or errors directly in the response. You have to infer information one bit at a time, usually by asking true/false questions and observing the application's response (e.g., a change in the page content or a time delay). It's a slow and methodical process, but it's incredibly powerful for extracting data from secure databases. Tools like Burp Suite's Intruder and SQLMap are essential for automating these attacks.</p>
    `
  },
  {
    title: "Setting Up a Secure Home Lab for Penetration Testing",
    description: "My guide to building a safe, isolated network environment for practicing ethical hacking skills without risking your main network.",
    date: "October 22, 2023",
    tags: ["Homelab", "Networking", "Security"],
    url: "#",
    content: `
      <p>One of the best ways to learn cybersecurity is by getting your hands dirty in a safe environment. A home lab is a perfect playground for this. It allows you to practice attacks, test tools, and understand vulnerabilities without any real-world consequences. This post outlines how I set up my own lab.</p>
      <p>The core of my lab is a virtualization platform like VirtualBox or VMware. This lets me run multiple operating systems (like Kali Linux for attacking and Metasploitable for a vulnerable target) on a single physical machine. I configured these VMs on an isolated "host-only" network. This is crucial for safety, as it prevents any of the vulnerable machines from being exposed to the internet, and stops any practice malware from escaping onto my home network.</p>
      <p>With this setup, I can practice everything from network scanning with Nmap to exploiting web vulnerabilities on a local server. It's an invaluable resource that has accelerated my learning curve tremendously. If you're serious about pentesting, building a home lab is a non-negotiable first step.</p>
    `
  },
];

const Blog: React.FC<{ onPostSelect: (post: BlogPost) => void; onShowAll: () => void; }> = ({ onPostSelect, onShowAll }) => {
  const displayedPosts = blogPosts.slice(0, 4);

  return (
    <Section id="blog" title="My Learning Journey">
      <p className="text-center text-secondary max-w-2xl mx-auto mb-12">
        I document my daily progress in cybersecurity. This blog is my collection of notes, walkthroughs, and insights as I tackle challenges on Hack The Box, PortSwigger, and beyond.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedPosts.map(post => (
          <BlogPostCard key={post.title} post={post} onPostSelect={onPostSelect} />
        ))}
      </div>
      {blogPosts.length > 4 && (
        <div className="text-center mt-12">
          <button
            onClick={onShowAll}
            className="bg-transparent border-2 border-secondary text-secondary font-bold py-3 px-8 rounded-md hover:bg-secondary hover:text-background transition-all duration-300"
          >
            See All Blogs
          </button>
        </div>
      )}
    </Section>
  );
};

export default Blog;