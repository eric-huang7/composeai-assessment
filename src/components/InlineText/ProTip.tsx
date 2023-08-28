/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import Shortcut from '../common/Shortcut';
import Badge from '../common/Badge';

const ProTip: React.FC = () => {
  return (
    <div className="px-[18px] py-[20px] border-top text-xs">
        <div className='text-left mb-2'><Badge>Pro Tip</Badge></div>
        <div className="text-left text-gray-900"> Make sure to be specific in your prompt. The more detail you give, the better the results will be!</div>
        <div className='text-left mt-2 text-gray-600'>Hit <Shortcut>enter</Shortcut> to submit your prompt</div>
    </div>
  );
};

export default ProTip;
