import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog, { blogPosts } from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPostDetail from './components/BlogPostDetail';
import AllBlogPosts from './components/AllBlogPosts';
import type { BlogPost } from './types';

const App: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isShowingAllBlogs, setIsShowingAllBlogs] = useState(false);

  useEffect(() => {
    // Scroll to top when view changes
    window.scrollTo(0, 0);
  }, [selectedPost, isShowingAllBlogs]);

  const handlePostSelect = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleGoBackFromPost = () => {
    setSelectedPost(null);
  };
  
  const handleShowAll = () => {
    setIsShowingAllBlogs(true);
  };

  const handleBackToPortfolio = () => {
    setIsShowingAllBlogs(false);
    setSelectedPost(null);
  };

  const renderContent = () => {
    if (selectedPost) {
      return <BlogPostDetail post={selectedPost} onBack={handleGoBackFromPost} />;
    }
    if (isShowingAllBlogs) {
      return <AllBlogPosts posts={blogPosts} onPostSelect={handlePostSelect} onBack={handleBackToPortfolio} />;
    }
    return (
      <>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog onPostSelect={handlePostSelect} onShowAll={handleShowAll} />
        <Contact />
      </>
    );
  };

  return (
    <div className="bg-background min-h-screen">
      <Header onNavigateHome={handleBackToPortfolio} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;