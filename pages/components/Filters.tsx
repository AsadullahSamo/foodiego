import React, { useState } from 'react';
import fonts from '../../styles/Fonts.module.css';
import Switch from './Switch';
import RestaurantsList from './RestaurantsList';

export default function Filters() {
  
  const [selectedSort, setSelectedSort] = useState('Recommended');
  const [selectedSortOption, setSelectedSortOption] = useState(1);
  const [selectedRating, setSelectedRating] = useState(0);
  const [filterBox, setFilterBox] = useState(false);
  const [freeDelivery, setFreeDelivery] = useState(false);
  const [openNow, setOpenNow] = useState(false);  

  const toggleFilterBox = () => {
    setFilterBox((prev) => !prev);
  };

  const sortingSelect = (option: string, num: number) => {
    setSelectedSort(option);
    setSelectedSortOption(num);
  }

  const handleDataFromSwitchChild = (checked: boolean, text: string) => {
    text === 'Open Now' ? setOpenNow(checked) : setFreeDelivery(checked);
  }

  return (
    <div className='flex justify-start relative my-5 w-[70%] bg-white flex-wrap shadow-xl'>
      <div className='flex flex-col items-start flex-shrink-0'>
        <Switch text='Open Now' sendDataToParent={handleDataFromSwitchChild}/>
        <Switch text='Free Delivery' sendDataToParent={handleDataFromSwitchChild}/>
        <p className={`font-semibold mt-4 mx-5 ${fonts.poppinsSemibold}`}>Rating</p>
        <div className='flex items-center mx-4 -mt-2'>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className='material-icons mt-5 text-green-500 hover:cursor-pointer' onClick={() => setSelectedRating(i + 1)}>
              {selectedRating > i ? 'star' : 'star_border'}
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-80 mt-5 mx-12 flex-grow">
        <span className="material-icons absolute left-3 top-2 text-black">search</span>
        <input type="text" placeholder="What you want to eat today?" className={`placeholder:text-black w-[30vw] h-10 pl-10 pr-2 ${fonts.poppinsRegular} border-2 bg-[#e3e7eb] rounded-full`}/>
        <h1 className='ml-2 my-10 text-2xl font-bold'>Order from 18 Restaurants</h1>
        <RestaurantsList sortingOption={selectedSortOption} freeDelivery={freeDelivery} openNow={openNow}/>
      </div>

      <div className="flex flex-col items-end mt-5 ml-[102px] flex-shrink-0">
        <p className={`mr-2 w-[18vw] h-10 border-2 bg-[#e3e7eb] rounded-full ml-10`}>
          <span className={`px-5 absolute top-7 ${fonts.poppinsRegular}`}>{selectedSort}</span>
          <span className="material-icons absolute right-5 top-7 hover:cursor-pointer" onClick={toggleFilterBox}> keyboard_arrow_down </span>
        </p>

        {filterBox && (
          <div className="mr-2 flex flex-col justify-start bg-white shadow-md rounded-lg z-10 pb-5">
            <span className={`my-5 mx-5 text-xl text-black hover:text-green-500 transition-colors duration-300 font-bold`}>Sort by</span>
            {['Recommended', 'Alphabetical Order (A-Z)', 'Alphabetical Order (Z-A)', 'Distance'].map((option, index) => (
              <p key={index} className={`w-[18vw] h-10 mx-5 pb-1 flex items-center cursor-pointer ${index < 3 ? 'border-b-3 border-[#E3E7EB]' : ''}`} onClick={() => sortingSelect(option, index + 1)} style={{borderBottom: '4px solid #f8f8f8'}}>
                <span className="material-icons relative top-1" style={{ fontSize: '20px' }} >
                  {selectedSort === option ? 'radio_button_checked' : 'radio_button_unchecked'}
                </span>
                <span className={`px-5 mt-2 ${fonts.poppinsSemibold}`}>{option}</span>
              </p>
            ))}
            <div className="flex justify-center items-center mt-5 gap-5">
              <button
                className={`bg-[#f9a826] px-4 py-1 rounded-full text-white hover:bg-[#e5941d] hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ${fonts.poppinsSemibold}`}
                onClick={() => setFilterBox(false)}
              >
                Cancel
              </button>
              <button
                className={`bg-[#0eaa58] px-4 py-1 rounded-full text-white hover:bg-[#0b934a] hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ${fonts.poppinsSemibold}`}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
