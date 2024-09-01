import React, { useState, useEffect } from 'react';
import fonts from '../../styles/Fonts.module.css';

export default function RestaurantsList({ sortingOption, freeDelivery, openNow }: { sortingOption: number, freeDelivery: boolean, openNow: boolean }) {
  const [items, setItems] = useState<{ name: string, image: string, cuisine: string, rating: number, userRatingCount: number, deliveryTime: string, deliveryFee: string }[]>([]);
  const [filteredItems, setFilteredItems] = useState<{ name: string, image: string, cuisine: string, rating: number, userRatingCount: number, deliveryTime: string, deliveryFee: string }[]>([]);

  useEffect(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setFilteredItems(data);
      });
  }, []);

  useEffect(() => {
    let sortedItems = [...items];

    if (sortingOption === 1) {
      sortedItems.sort((a, b) => b.rating - a.rating);
    } else if (sortingOption === 2) {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortingOption === 3) {
      sortedItems.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortingOption === 4) {
      sortedItems.sort((a, b) => a.deliveryTime.localeCompare(b.deliveryTime));
    }

    if (freeDelivery) {
      sortedItems = sortedItems.filter(item => item.deliveryFee === 'Free');
    }

    setFilteredItems(sortedItems);
  }, [sortingOption, freeDelivery, items]);

  return (
    <div className="flex flex-col gap-5 my-5">
      {openNow && filteredItems.map((item, index) => (
        <div key={index} className="w-[50vw] h-[150px] bg-white shadow-xl flex gap-10 rounded-xl">
          <div className="flex gap-10">
            <img src={item.image} alt="sushi" className="w-56 h-full rounded-xl object-cover" />
            <div className={`flex flex-col py-5 -mt-2 -ml-4 ${fonts.poppinsSemibold}`}>
              <h2 className={`text-2xl ${fonts.poppinsSemibold}`}>{item.name}</h2>
              <p className={`ml-[2px] ${fonts.poppinsRegular} text-[#b5b5b5] font-bold`}>{item.cuisine}</p>
              <div className="flex gap-2 mt-3 ml-[-4px]">
                <span className="material-icons text-green-500">star</span>
                <p className="text-black">{item.rating}</p>
                <p className="text-black">{item.userRatingCount}</p>
                <div className="w-0.5 h-5 bg-black"></div>
                <span className="material-icons text-green-500">access_time_filled</span>
                <p className="text-black">{item.deliveryTime}</p>
                <div className="w-0.5 h-5 bg-black"></div>
                <span className="material-icons text-green-500">local_shipping</span>
                <p className={`${item.deliveryFee === "Free" ? 'text-green-500' : 'text-black'}`}>{item.deliveryFee === "Free" ? item.deliveryFee : `$ ${item.deliveryFee}`}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
