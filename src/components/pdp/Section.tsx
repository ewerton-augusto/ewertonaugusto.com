import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className
}) => <section className={`w-full mx-auto max-w-[1440px] max-sm:p-4 p-6 min-h-screen ${className}`}>{children}</section>

export default Section;
