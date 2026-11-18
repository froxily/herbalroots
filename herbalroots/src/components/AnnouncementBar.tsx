import React from 'react';
import { Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-forest-dark text-sage-light text-xs font-medium py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2 border-b border-forest">
      <Sparkles className="w-3.5 h-3.5 text-sage" aria-hidden="true" />
      <span>Discover the art of a thoughtful herbal hair care routine. Rooted in Ayurveda.</span>
    </div>
  );
};
