/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';

import ProTip from './ProTip';
import { ListOption } from '.';

export interface SuffixListProps {
  promptArray: string[];
  listOptions: ListOption[];
  onSelect: (value: ListOption) => void;
  onChange: (value: ListOption) => void;
}

const selectedClass = 'bg-gray-100';

const SuffixList: React.FC<SuffixListProps> = ({ promptArray = [], onSelect, listOptions, onChange }) => {
  const [selected, setSelected] = useState<ListOption>(listOptions[0]);
  const [filteredOptions, setFilteredOptions] = useState<ListOption[]>(listOptions);

  const filterMatches = useCallback(
    (promptArray: string[]) => {
      // fileter promt words with length > 1 to avoid single letters
      const filteredOptions = listOptions.filter((option: ListOption) =>
        promptArray.find((item: string) => option.text.indexOf(item) > -1),
      );

      setFilteredOptions(filteredOptions.length > 0 ? filteredOptions : listOptions);
    },
    [listOptions],
  );

  useEffect(() => {
    filterMatches(promptArray);
  }, [promptArray, filterMatches]);

  useEffect(() => {
    onChange(filteredOptions[0]);
    setSelected(filteredOptions[0]);
  }, [filteredOptions, onChange]);

  const handleSelect = (option: ListOption) => {
    setSelected(option);
    handleSubmit(option);
  };

  const handleSubmit = (option: ListOption) => {
    onSelect(option);
  };
  
  return (
    <>
      <div className="suffix-list flex flex-col flex-1 h-fit py-3 max-h-[376px] overflow-y-auto w-full bg-white">
        <div className="pl-[18px] text-left text-gray-600 mb-1">Type anything or...</div>
        {filteredOptions.map((option: ListOption, index: number) => (
          <div
            key={index}
            className={`flex gap-2 mx-2 px-1.5 py-2 cursor-pointer text-gray-900 hover:bg-gray-100 hover:rounded-lg rounded-lg ${
              selected.text === option.text && selectedClass
            }`}
            onClick={() => handleSelect(option)}
          >
            <img src={option.iconUri} alt="" />
            {option.text}
          </div>
        ))}
      </div>
      {filteredOptions.length > 0 && filteredOptions.length < listOptions.length && <ProTip />}
    </>
  );
};

export default SuffixList;
