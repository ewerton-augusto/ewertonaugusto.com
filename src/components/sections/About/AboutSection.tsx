import React from 'react';
import { TimeLine } from '../..';
import { experiences } from '../../../data/experiences';

const AboutSection: React.FC = () => {
  return (
    <main className="w-full">
      <section className="container min-h-screen flex justify-center items-center">
        <div className="w-full flex items-center justify-center flex-wrap gap-24">
          <div>
            <img
              className="w-full max-w-[370px]"
              src="https://images.unsplash.com/photo-1718509782458-dfe9c18a7ef8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDV8fHxlbnwwfHx8fHw%3D"
              alt="Ewerton Santos"
            />
          </div>
          <div>
            <div className="font-semibold text-3xl mb-6">
              <span className="text-dark-purple">Journey.</span>
              <span className="text-primary">Career.</span>
              <span className="text-light-purple">Personal Life.</span>
            </div>
            <div className="w-full max-w-md leading-loose flex flex-col gap-4 font-medium">
              <p>
                With over 11 years of professional experience in the technology field, I have
                concentrated my efforts on Front-End web development for the last 4 years.
                Delivering high-quality Front-End software using modern frameworks and foundational
                JavaScript.
              </p>
              <p>
                A little bit more about myself, I am keen on reading, I enjoy working out, I have
                been practicing jiu-jitsu and I love communing with nature. Even though I am a tech
                person, I am horrible with console games, but I give it a try once in a while.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex justify-center items-center">
        <TimeLine experiences={experiences} />
      </section>
    </main>
  );
};

export default AboutSection;
