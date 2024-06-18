import React from 'react';
import GlobalLayout from '../layout/GlobalLayout';

const Blog: React.FC = () => (
  <GlobalLayout title="Blog">
    <main className="flex-1 w-full">
      <section className="container">
        <h1>Blog</h1>
      </section>
    </main>
  </GlobalLayout>
);

export default Blog;
