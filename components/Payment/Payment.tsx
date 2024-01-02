'use client';

import { useState } from 'react';
import data from '../../data/data.json';
import { ChevronLeft, ChevronRight, RectangleHorizontal } from 'lucide-react';

type DataPropTypes = {
  id: number;
  heading: string;
  paragraph: string;
}[];

export default function Payment() {
  const [step, setStep] = useState(1);
  // const [slideData, setSlideData] = useState<DataPropTypes>(data);
  const slide = data.filter((dataObj) => dataObj.id === step);

  function handlePrevious() {
    setStep((step) => (step > 1 && step <= data.length ? (step -= 1) : step));
  }

  function handleNext() {
    setStep((step) => (step < data.length ? (step += 1) : step));
  }

  return (
    <section className='py-20 px-10 bg-white flex flex-col items-center justify-center'>
      <div className='px-10 flex gap-4 md:hidden'>
        <RectangleHorizontal
          className={` ${
            step === 1 ? 'bg-primary' : 'bg-slate-400 '
          } h-3 px-8 rounded-lg cursor-pointer`}
        />
        <RectangleHorizontal
          className={` ${
            step === 2 ? 'bg-primary' : 'bg-slate-400 '
          } h-3 px-8 rounded-lg cursor-pointer`}
        />
        <RectangleHorizontal
          className={` ${
            step === 3 ? 'bg-primary' : 'bg-slate-400 '
          } h-3 px-8 rounded-lg cursor-pointer`}
        />
        <RectangleHorizontal
          className={` ${
            step === 4 ? 'bg-primary' : 'bg-slate-400 '
          } h-3 px-8 rounded-lg cursor-pointer`}
        />
        <RectangleHorizontal
          className={` ${
            step === 5 ? 'bg-primary' : 'bg-slate-400 '
          } h-3 px-8 rounded-lg cursor-pointer`}
        />
      </div>
      <div className='flex gap-2 py-6 md:hidden'>
        <ChevronLeft
          className='bg-slate-400 cursor-pointer'
          onClick={handlePrevious}
        />
        <ChevronRight
          className='bg-slate-400 cursor-pointer'
          onClick={handleNext}
        />
      </div>
      <h1 className='text-xl md:text-4xl md:self-start md:mb-4 md:w-1/2 md:leading-normal font-bold py-4 text-black'>
        Everything you need, less of what you do not.
      </h1>
      <div className='w-full md:flex justify-between'>
        <div className='text-gray-500 hidden md:block'>
          <div className='flex'>
            <hr className='p-[2px] mr-2 bg-primary h-14' />
            <button className='hover:text-gray-800'>Wallet</button>
          </div>
          <div className='flex'>
            <hr className='p-[2px] mr-2 bg-gray-200 h-14' />
            <button className='hover:text-gray-800'>Sender or Driver</button>
          </div>
          <div className='flex'>
            <hr className='p-[2px] mr-2 bg-gray-200 h-14' />
            <button className='hover:text-gray-800'>Promo & Plans</button>
          </div>
          <div className='flex'>
            <hr className='p-[2px] mr-2 bg-gray-200 h-14' />
            <button className='hover:text-gray-800'>Shipment Pin</button>
          </div>
          <div className='flex'>
            <hr className='p-[2px] mr-2 bg-gray-200 h-14' />
            <button className='hover:text-gray-800'>Referral</button>
          </div>
        </div>
        {slide.map((slideData) => (
          <div key={slideData.id}>
            <div className='w-full flex flex-col items-center md:items-start py-6 px-6 leading-relaxed bg-gray-200 md:bg-transparent text-gray-600  rounded-3xl'>
              <h2 className='font-bold text-xlg text-black py-3 md:text-3xl md:w-3/4 md:leading-normal '>
                {slideData.heading}
              </h2>
              <p className='text-sm pb-6 md:w-3/4'>{slideData.paragraph}</p>
              <button className='py-2 px-8 bg-primary text-white max-w-max rounded-lg'>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
