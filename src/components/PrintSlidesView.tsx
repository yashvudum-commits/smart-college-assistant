import React from 'react';
import { Slide1Title } from './slides/Slide1Title';
import { Slide2Problem } from './slides/Slide2Problem';
import { Slide3Solution } from './slides/Slide3Solution';
import { Slide4Features } from './slides/Slide4Features';
import { Slide5Workflow } from './slides/Slide5Workflow';
import { Slide6TechStack } from './slides/Slide6TechStack';
import { Slide7Benefits } from './slides/Slide7Benefits';
import { Slide8FutureConclusion } from './slides/Slide8FutureConclusion';

export const PrintSlidesView: React.FC = () => {
  return (
    <div className="hidden print:block text-slate-100 bg-slate-950">
      <div className="print-page h-screen w-screen overflow-hidden">
        <Slide1Title />
      </div>
      <div className="print-page h-screen w-screen overflow-hidden">
        <Slide2Problem />
      </div>
      <div className="print-page h-screen w-screen overflow-hidden">
        <Slide3Solution />
      </div>
      <div className="print-page h-screen w-screen overflow-hidden">
        <Slide4Features />
      </div>
      <div className="print-page h-screen w-screen overflow-hidden">
        <Slide5Workflow />
      </div>
      <div className="print-page h-screen w-screen overflow-hidden">
        <Slide6TechStack />
      </div>
      <div className="print-page h-screen w-screen overflow-hidden">
        <Slide7Benefits />
      </div>
      <div className="print-page h-screen w-screen overflow-hidden">
        <Slide8FutureConclusion />
      </div>
    </div>
  );
};
