import React from 'react';

type CompanyLogo = {
  image: string;
  title: string;
  url?: string;
};

const CompanyLogo: React.FC<CompanyLogo> = ({ image, title, url }) => {
  return (
    <div className="bg-white rounded-md w-10 h-10 flex justify-center items-center p-1 border-[0.5px]">
      <img src={image} alt={title} title={title} className="w-full h-auto bg-cover" />;
    </div>
  );
};

export default CompanyLogo;
