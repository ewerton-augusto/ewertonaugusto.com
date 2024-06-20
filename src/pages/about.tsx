import React from 'react';
import GlobalLayout from '../layout/GlobalLayout';
import { TimeLine } from '../components';
import { experiences } from '../data/experiences';

const About: React.FC = () => (
  <GlobalLayout title="About">
    <main className="flex-1 w-full">
      <section className="container">
        <h1 className="text-primary font-semibold text-2xl mb-6">Quote.</h1>
        <div className="flex flex-col gap-4 leading-loose">
          <p>
            With over 11 years of professional experience in the technology field, I have
            concentrated my efforts on Front-End web development for the last 4 years. Delivering
            high-quality Front-End software using modern frameworks and foundational JavaScript.
          </p>
          <p>
            A little bit more about myself, I am keen on reading, I enjoy working out, I have been
            practicing jiu-jitsu and I love communing with nature. Even though I am a tech person, I
            am horrible with console games, but I give it a try once in a while.
          </p>
        </div>
        <TimeLine experiences={experiences} />
      </section>
    </main>
  </GlobalLayout>
);

export default About;
