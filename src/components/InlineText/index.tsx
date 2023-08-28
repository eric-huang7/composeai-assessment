/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { KeyboardEventHandler, useRef, useState } from 'react';

import HelpIcon from '../../assets/svg/Help Icon.svg';
import LoadingSpinner from '../../assets/svg/Loading Spinner.svg';
import AnnotationHeart from '../../assets/svg/annotation-heart.svg';
import Briefcase from '../../assets/svg/briefcase-02.svg';
import FileIcon from '../../assets/svg/file-02.svg';
import HeadingSquare from '../../assets/svg/heading-square.svg';
import InfoCircle from '../../assets/svg/info-circle.svg';
import Lightbulb from '../../assets/svg/lightbulb-02.svg';
import List1Icon from '../../assets/svg/list-1.svg';
import ListIcon from '../../assets/svg/list.svg';
import Mail from '../../assets/svg/mail-02.svg';
import Menu from '../../assets/svg/menu-05.svg';
import MultiParagraphSquare from '../../assets/svg/multi-paragraph-square.svg';
import ParagraphSquare from '../../assets/svg/paragraph-square.svg';
import './inlineText.css'
import TextInput, { TextInputHandle } from './TextInput';
import SuffixList from './SuffixList';
import AdvancedOptions from './AdvancedOptions';

export interface ListOption {
  text: string;
  iconUri: string;
}

/**
 * Hardcoded list of menu items and their icons from the design
 */
const listOptions: ListOption[] = [
  ['outline for a', ListIcon],
  ['bullet list of', List1Icon],
  ['headline for a', HeadingSquare],
  ['paragraph about', ParagraphSquare],
  ['couple paragraphs about', MultiParagraphSquare],
  ['sentence about', Menu],
  ['few ideas for', Lightbulb],
  ['bit of information about', InfoCircle],
  ['email to', Mail],
].map((lo) => ({ text: lo[0], iconUri: lo[1] }));

export interface InlineTextProps {
  /**
   * DOM Id of the element
   */
  id?: string;
}

export const InlineText: React.FC<InlineTextProps> = ({ id }) => {
  const [promptArray, setPromptArray] = useState<string[]>([])
  const [selected, setSelected] = useState<ListOption>()
  const inputRef = useRef<TextInputHandle>(null);

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Tab' || e.key === 'Enter') {
      e.preventDefault();

      if (selected?.text) {
        inputRef?.current?.selectPrompt(selected?.text)
      }
      
      console.log(e.key, 'pressed, option:', selected?.text)
      // TODO action with default option
    }
  };

  const handleSelect = (option: ListOption) => {
    if (option?.text) {
      inputRef?.current?.selectPrompt(option?.text)
    }

    console.log('Selected option:', option.text)
    // TODO action with selected option
  }

  const handleChange = (option: ListOption) => {
    setSelected(option)
  }
  
  return <div id={id} className='container max-w-[280px] rounded-xl text-gray-900' onKeyDown={onKeyDown}>
    <TextInput ref={inputRef} onChange={setPromptArray}  />
    <SuffixList promptArray={promptArray} onSelect={handleSelect} listOptions={listOptions} onChange={handleChange} />
    <AdvancedOptions />
  </div>;
};
