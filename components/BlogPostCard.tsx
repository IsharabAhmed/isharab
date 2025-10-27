import React from 'react';
import type { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost; onPostSelect: (post: BlogPost) => void; }> = ({ post, onPostSelect }) => (
  <div onClick={() => onPostSelect(post)} className="cursor-pointer block bg-card p-6 rounded-lg border border-gray-800 group transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:border-accent/50 hover:-translate-y-1">
    <p className="text-sm text-secondary mb-2">{post.date}</p>
    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
    <p className="text-secondary text-sm mb-4">{post.description}</p>
    <div className="flex flex-wrap gap-2">
      {post.tags.map(tag => (
        <span key={tag} className="bg-gray-800 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
      ))}
    </div>
  </div>
);

export default BlogPostCard;