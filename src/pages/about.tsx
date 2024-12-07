import React from 'react';
import GlobalLayout from '@/layout/GlobalLayout';
import { AboutSection } from '@/components';

const About: React.FC = () => (
  <GlobalLayout title="About">
    <AboutSection />
  </GlobalLayout>
);

export default About;
