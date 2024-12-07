import React from 'react';
import GlobalLayout from '@/layout/GlobalLayout';
import { ProjectsSection } from '@/components';

const Projects: React.FC = () => (
  <GlobalLayout title="Projects">
    <ProjectsSection />
  </GlobalLayout>
);

export default Projects;
