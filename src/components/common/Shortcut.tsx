/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

type Props = {
  children: string,
};

const Shortcut: React.FC<Props> = ({ children }) => {
  return <span className="px-1 py-0.5 rounded bg-gray-50 text-gray-600 text-sm">{children}</span>;
};

export default Shortcut;
