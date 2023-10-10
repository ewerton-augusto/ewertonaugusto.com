import React from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const RadarChartProgress: React.FC = () => {
  const data = [
    {
      subject: 'Coding Excellence',
      A: 10,
      B: 14,
      fullMark: 24,
    },
    {
      subject: 'Continuous Delivery',
      A: 7,
      B: 9,
      fullMark: 24,
    },
    {
      subject: 'Quality',
      A: 6,
      B: 11,
      fullMark: 24,
    },
    {
      subject: 'Architecture & Design',
      A: 10,
      B: 12,
      fullMark: 24,
    },
    {
      subject: 'Process',
      A: 12,
      B: 12,
      fullMark: 24,
    },
    {
      subject: 'Teamwork',
      A: 10,
      B: 12,
      fullMark: 24,
    },
    {
      subject: 'Soft skills',
      A: 8,
      B: 15,
      fullMark: 24,
    },
  ];

  return (
    <div className='w-full max-md:h-[300px] h-[400px]'>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 24]} />
          <Radar name="PDP 7/2022" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="PDP 10/2023" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarChartProgress;

