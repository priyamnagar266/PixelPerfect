import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import BlogCard from '@/components/ui/blog-card';

const BlogPreview = () => {
  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['/api/blog'],
  });

  return (
    <section id="blog" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-primary font-medium">Our Blog</span>
            <h2 className="font-[Outfit] font-bold text-3xl md:text-5xl mt-3 mb-6">
              Latest insights
            </h2>
            <p className="text-gray-700 text-lg">
              Stay updated with the latest trends, tips, and insights from our team of experts.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            [...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
                <div className="bg-gray-200 h-48 w-full"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded mb-3 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-2/3"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            ))
          ) : (
            blogPosts.map((post, index) => (
              <BlogCard
                key={post.id || index}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                categoryBg={post.categoryBg}
                categoryColor={post.categoryColor}
                date={post.date}
                link={post.link}
              />
            ))
          )}
        </div>
        
        <div className="text-center mt-12">
          <ScrollReveal>
            <Button
              variant="outline"
              size="lg"
              className="bg-white border-2 border-primary text-primary hover:bg-primary/5 rounded-full font-medium text-lg transition-all duration-300"
              asChild
            >
              <a href="#">
                View all articles <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
