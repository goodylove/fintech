import React, { ReactNode } from 'react';

type ButtonProps = {
  className: string;
  text: string;
};
const Button = ({ className, text }: ButtonProps) => {
  return (
    <div>
      <button className={className}>{text}</button>
    </div>
  );
};

export default Button;
