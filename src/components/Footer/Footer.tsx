import React from 'react';
import { socials } from '@/data/socials';
import { Icons } from '@/components/atoms/Icons/IconList';

const Footer: React.FC = () => {
  return (
    <footer className="container w-full flex flex-col justify-center items-center gap-4 md:gap-12 text-black dark:text-white">
      <div className="w-full flex justify-center items-center mx-auto">
        <div className="bg-gradient-to-l from-black dark:from-white w-full h-[2px] flex-1"></div>
        <div className="text-[40px] max-md:px-8 px-14">
          <i className={Icons.LOGO} />
        </div>
        <div className="bg-gradient-to-r from-black dark:from-white w-full h-[2px] flex-1"></div>
      </div>
      <nav className="w-full">
        <ul className="w-full mx-auto flex flex-col md:flex-row justify-around items-center gap-2">
          {socials.map(({ icon, label, url }) => (
            <li key={label}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <div
                  className="flex gap-1 justify-start items-center transition duration-500 hover:text-primary"
                  title={label}
                  aria-label={label}
                >
                  <i className={icon} />
                  <span>{label}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
