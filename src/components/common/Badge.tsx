/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

type Props = {
  children: string,
};

const Badge: React.FC<Props> = ({ children }) => {
  return <span className="px-2 py-0.5 rounded-2xl bg-gray-50 text-primary-700 text-xs">{children}</span>;
};

export default Badge;
