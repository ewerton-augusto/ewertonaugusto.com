import React from 'react';

type TitleProps = {
  children: string;
  color?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  color = 'red'
}) => <h1 className={`font-bold text-4xl capitalize text-${color} text-center mb-12 underline underline-offset-8`}>{children}</h1>

export default Title;