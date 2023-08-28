/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  ChangeEventHandler,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import HelpIcon from '../../assets/svg/Help icon.svg';
import ComposeLogo from '../../assets/svg/logo_compose.png';
import { trim } from 'lodash';

const defaultText = 'Write a';

export interface TextInputProps {
  onChange: (value: string[]) => void;
}

export type TextInputHandle = {
  selectPrompt: (text: string) => void;
};


const TextInput = forwardRef<TextInputHandle, TextInputProps>(({ onChange }, ref) => {
  const [value, setValue] = useState<string>(defaultText);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.target.value;

    if (newValue.startsWith(defaultText)) {
      setValue(newValue);
    }
  };

  useImperativeHandle(ref, () => ({
    selectPrompt(text: string) {
      setValue(`${defaultText} ${text}`);
    },
  }));

  useEffect(() => {
    const promptArray = value
      .substring(defaultText.length)
      .split(' ')
      ?.map((item) => trim(item))
      .filter((item) => item.length > 1);
    onChange(promptArray);
  }, [value, onChange]);

  // useEffect(() => {
  //   if (selected) {
  //     setValue(`${defaultText} ${selected.text}`);
  //   }
  // }, [selected]);

  return (
    <div className="text-input p-4 flex items-center">
      <img src={ComposeLogo} alt="" width={24} height={20} />
      <input
        name="text"
        type="text"
        className="ml-2 max-w-[190px] focus:outline-none"
        value={value}
        onChange={handleChange}
      />
      <div className="flex-1" />
      <img src={HelpIcon} alt="" className="cursor-pointer" />
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
