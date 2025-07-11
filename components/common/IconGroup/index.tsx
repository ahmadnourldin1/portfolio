import BasketBallIcon from '@/components/icons/BasketBallIcon';
import FigmaIcon from '@/components/icons/FigmaIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import React from 'react';
import SVG from '../SVG';

interface Props {
  className?: string;
}

const IconGroup: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <a
        href="https://github.com/ahmadnourldin1" // 🔁 Replace with your actual GitHub link
        target="_blank"
        rel="noopener noreferrer"
      >
        <SVG icon={<GithubIcon className="w-full h-full" />} className="md:w-5 md:h-5 w-10 h-10" key={1} />
      </a>
    </div>
  );
};

export default IconGroup;
