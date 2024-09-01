import React, { useEffect } from 'react';
import fonts from '../../styles/Fonts.module.css';

interface SwitchProps {
  text: string;
  sendDataToParent: (checked: boolean, text: string) => void;
}

export default function Switch({ text, sendDataToParent }: SwitchProps) {
  const [checked, setChecked] = React.useState(false);

  const toggleSwitch = () => {
    setChecked(prevChecked => {
      const currentChecked = !prevChecked;
      sendDataToParent(currentChecked, text);
      return currentChecked;
    });
  };


  return (
    <label className="inline-flex items-center mx-5 mt-5 cursor-pointer">
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={toggleSwitch} />
      <span className={`w-32 ${fonts.poppinsSemibold} mr-8 font-medium`}>{text}</span>
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
    </label>
  );
}
