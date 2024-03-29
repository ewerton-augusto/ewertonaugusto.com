import React from 'react';
import IconLink from '../Icons/IconLink';
import { IconType } from '../Icons/types';
import DarkMode from '../darkMode/DarkMode';

const HomeSection: React.FC = () => {
  const socialMedia = [
    {
      label: 'LinkedIn',
      icon: IconType.LINKEDIN,
      url: 'https://www.linkedin.com/in/ewerton-augusto/',
    },
    {
      label: 'GitHub',
      icon: IconType.GITHUB,
      url: 'https://github.com/ewerton-augusto',
    },
    {
      label: 'E-mail',
      icon: IconType.ENVELOPE,
      url: 'mailto:ewerton.santos2210@gmail.com',
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="max-w-[1728px] min-h-screen mx-auto px-4 py-8 flex flex-col">
        <div className="w-full text-right">
          <DarkMode />
        </div>
        <div className="w-full text-center" title="Ewerton Augusto - Software Developer">
          <i className={`${IconType.LOGO} text-black dark:text-white text-[76px]`} />
        </div>
        <div className="flex-1 flex justify-between max-lg:justify-around items-center max-lg:flex-col">
          <div className="text-black dark:text-white max-w-3xl font-extralight max-lg:text-center">
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
            {socialMedia.map((media) => (
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
      </div>
    </section>
  );
};

export default HomeSection;
