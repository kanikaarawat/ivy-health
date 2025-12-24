// src/pages/LegalPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import PageHero from '../../components/global/PageHero';
import AnimatedSection from '../../components/motion/AnimatedSection';
import { content } from '../../content/data';

export default function LegalPage() {
  const { pageSlug } = useParams();
  const legalPage = content.legalPages[pageSlug];

  if (!legalPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">
            Page Not Found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero title={legalPage.title} />

      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-text-body/60">
              Last Updated: {legalPage.lastUpdated}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {legalPage.body.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h2 key={index} className="font-serif text-3xl font-bold text-primary mt-8 mb-4">
                    {paragraph.replace('# ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('## ')) {
                return (
                  <h3 key={index} className="font-serif text-2xl font-bold text-primary mt-6 mb-3">
                    {paragraph.replace('## ', '')}
                  </h3>
                );
              } else if (paragraph.trim() !== '') {
                return (
                  <p key={index} className="text-text-body/80 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

