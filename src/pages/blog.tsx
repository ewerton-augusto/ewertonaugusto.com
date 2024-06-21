import React from 'react';
import GlobalLayout from '../layout/GlobalLayout';
import { BlogSection } from '../components';

const Blog: React.FC = () => (
  <GlobalLayout title="Blog">
    <BlogSection />
  </GlobalLayout>
);

export default Blog;
