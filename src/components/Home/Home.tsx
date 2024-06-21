import React from 'react';
import { IconLink } from '../';
import { socials } from '../../data/socials';

const HomeSection: React.FC = () => {
  return (
    <main className="flex-1 w-full">
      <div className='bg-cover bg-top bg-home-2 -z-10'>
        <section className="flex flex-col min-h-screen bg-white/50 dark:bg-black/50">
          <div className="flex-1 container flex justify-between max-lg:justify-around items-center max-lg:flex-col">
            <div className="text-black dark:text-white max-w-3xl font-extralight max-lg:text-center ">
              <h1 className="text-5xl max-lg:text-4xl mb-6 tracking-wide leading-snug">
                Hi, I am{' '}
                <strong className="text-primary">Ewerton Augusto a Front-end Developer</strong>.
                Thanks for visiting my website.
              </h1>
              <h2 className="text-lg max-sm:text-sm">
                At the moment <span className="font-bold text-primary">it is under construction</span>
                , even though you can contact me on my social media.
              </h2>
            </div>
            <ul className="flex max-lg:flex-row flex-col justify-center items-center gap-12">
              {socials.map((media) => (
                <li key={media.url}>
                  <IconLink
                    icon={media.icon}
                    label={media.label}
                    url={media.url}
                    textColor="dark:text-white"
                    textSize="text-[24px]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeSection;
