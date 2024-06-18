import React from 'react';
import { socials } from '../../data/socials';
import { IconType } from '../atoms/Icons/types';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container flex flex-col justify-center items-center my-4 gap-4 md:my-12 md:gap-12 text-black dark:text-white">
      <div className="w-full flex justify-center items-center mx-auto">
        <div className="bg-gradient-to-l from-black dark:from-white w-full h-[2px] flex-1"></div>
        <div className="text-[40px] px-14">
          <i className={IconType.LOGO} />
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
      <div className="font-bold text-xs">&copy; {currentYear} | Ewerton Augusto</div>
    </footer>
  );
};

export default Footer;
