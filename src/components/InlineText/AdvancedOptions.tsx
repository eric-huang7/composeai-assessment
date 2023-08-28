/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import ChevronDown from '../../assets/svg/chevron-down.svg';
import ZapFast from '../../assets/svg/zap-fast.svg';

const AdvancedOptions: React.FC = () => {
  return (
    <div className="px-2 pt-2 pb-3 w-full border-top">
      <div className="cursor-pointer w-full items-center flex gap-2 py-[6px] pl-[10px] pr-2">
        <img src={ZapFast} alt="" />
        <div className="text-left flex-1">Advanced Options</div>
        <img src={ChevronDown} alt="" />
      </div>
    </div>
  );
};

export default AdvancedOptions;
