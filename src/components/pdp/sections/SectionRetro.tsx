import React from 'react';
import Title from '../Title';
import Section from '../Section';
import dynamic from 'next/dynamic';

const RadarChartProgress = dynamic(
  import("../RadarChartProgress"),
  { ssr: false }
);

export const SectionRetro: React.FC = () => {
  return (
    <Section>
      <Title>Em relação às minhas aspirações, o que eu deveria...</Title>
      start doing
      stop doing
      do less
      keep doing
      do more
      <RadarChartProgress />
    </Section>
  )
}
