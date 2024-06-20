import React from 'react';
import { TimelineItem as TimelineItemType } from '../../../@types';

const TimelineItem: React.FC<TimelineItemType> = ({
  title,
  company,
  period,
  description,
  side,
}) => (
  <div
    className={`flex ${side === 'left' ? 'flex-row-reverse sm:pr-12 sm:text-right' : 'flex-row sm:pl-12'} mb-12 w-full`}
  >
    <div className="w-1/2 hidden sm:block"></div>
    <div className="w-full sm:w-1/2">
      <div className="p-4">
        <span className="text-xs text-primary font-light">{period}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
        <h4 className="text-sm text-gray-500 dark:text-gray-400">{company}</h4>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-loose">{description}</p>
      </div>
    </div>
  </div>
);

export default TimelineItem;
