import React from 'react';
import Section from './Section';
import BlogPostCard from './BlogPostCard';
import type { BlogPost } from '../types';

interface AllBlogPostsProps {
  posts: BlogPost[];
  onPostSelect: (post: BlogPost) => void;
  onBack: () => void;
}

const AllBlogPosts: React.FC<AllBlogPostsProps> = ({ posts, onPostSelect, onBack }) => {
  return (
    <div className="pt-20">
      <Section id="all-blogs" title="All Blog Posts">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="text-accent font-bold hover:underline mb-8 inline-flex items-center"
            aria-label="Back to portfolio"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map(post => (
              <BlogPostCard key={post.title} post={post} onPostSelect={onPostSelect} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AllBlogPosts;