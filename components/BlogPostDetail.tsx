import React from 'react';
import Section from './Section';
import type { BlogPost } from '../types';

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack }) => {
  return (
    <div className="pt-20">
      <Section id="blog-post" title={post.title}>
        <div className="max-w-3xl mx-auto">
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

          <div className="mb-6">
            <span className="text-secondary text-sm">{post.date}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-800 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          <article
            className="text-secondary leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </div>
      </Section>
    </div>
  );
};

export default BlogPostDetail;
