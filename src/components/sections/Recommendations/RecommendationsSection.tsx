import React from 'react';

const RecommendationsSection: React.FC = () => {
  return (
    <main className="w-full">
      <section className="container min-h-screen flex justify-center items-center">
        <div>
          <div className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            <span className="text-dark-purple">Preferences.</span>
            <span className="text-primary">Useful.</span>
            <span className="text-light-purple">Benefits.</span>
          </div>
          <p className="font-extralight text-sm sm:text-base lg:text-lg">
            It is under construction
          </p>
        </div>
      </section>
    </main>
  );
};

export default RecommendationsSection;
