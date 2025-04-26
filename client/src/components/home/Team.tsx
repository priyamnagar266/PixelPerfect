import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';
import TeamCard from '@/components/ui/team-card';

const Team = () => {
  const { data: teamMembers = [], isLoading } = useQuery({
    queryKey: ['/api/team'],
  });

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-primary font-medium">Our Team</span>
            <h2 className="font-[Outfit] font-bold text-3xl md:text-5xl mt-3 mb-6">
              Meet the experts
            </h2>
            <p className="text-gray-700 text-lg">
              Our talented team of designers, developers, and strategists is passionate about creating exceptional digital experiences.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            // Loading skeleton
            [...Array(4)].map((_, index) => (
              <div key={index} className="bg-light rounded-xl overflow-hidden shadow-lg animate-pulse">
                <div className="bg-gray-200 h-80 w-full"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-1 w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-1/2"></div>
                  <div className="flex space-x-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            teamMembers.map((member, index) => (
              <TeamCard
                key={member.id || index}
                image={member.image}
                name={member.name}
                position={member.position}
                socialLinks={member.socialLinks}
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
                Meet the full team <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Team;
