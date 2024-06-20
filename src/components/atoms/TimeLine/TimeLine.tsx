import React from 'react';
import TimelineItem from './TimeLineItem';
import { TimelineItem as TimelineItemType } from '../../../@types';

type Timeline = {
  experiences: TimelineItemType[];
};

const Timeline: React.FC<Timeline> = ({ experiences }) => {
  return (
    <div className="relative my-12 pl-4 sm:pl-0">
      <div className="absolute sm:left-1/2 sm:transform sm:-translate-x-1/2  h-full border-r-2 border-primary/60 rounded-md -z-10"></div>
      {experiences.map((item, index) => (
        <TimelineItem key={index} {...item} side={index % 2 === 0 ? 'left' : 'right'} />
      ))}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
        <img src="/path/to/your/image.png" alt="Start" className="h-12 w-12" />
      </div>
    </div>
  );
};

export default Timeline;
