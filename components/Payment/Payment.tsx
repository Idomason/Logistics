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
          } h-2 px-4 md:h-3 md:px-8 rounded-lg cursor-pointer`}
        />
        <RectangleHorizontal
          className={` ${
            step === 2 ? 'bg-primary' : 'bg-slate-400 '
          } h-2 px-4 md:h-3 md:px-8 rounded-lg cursor-pointer`}
        />
        <RectangleHorizontal
          className={` ${
            step === 3 ? 'bg-primary' : 'bg-slate-400 '
          } h-2 px-4 md:h-3 md:px-8 rounded-lg cursor-pointer`}
        />
        <RectangleHorizontal
          className={` ${
            step === 4 ? 'bg-primary' : 'bg-slate-400 '
          } h-2 px-4 md:h-3 md:px-8 rounded-lg cursor-pointer`}
        />
        <RectangleHorizontal
          className={` ${
            step === 5 ? 'bg-primary' : 'bg-slate-400 '
          } h-2 px-4 md:h-3 md:px-8 rounded-lg cursor-pointer`}
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
      <h1 className='text-xl md:text-4xl md:text-left md:self-start md:mb-4 md:w-1/2 md:leading-normal font-bold py-4 text-black text-center'>
        Everything you need, less of what you do not.
      </h1>
      <div className='w-full md:flex md:justify-between items-start'>
        <div className='text-gray-500 hidden md:block w-1/2'>
          <div className='flex'>
            <hr
              className={
                step === 1
                  ? 'p-[2px] mr-2 bg-primary h-14'
                  : 'bg-gray-200 p-[2px] mr-2 h-14'
              }
            />
            <button className='hover:text-gray-800' onClick={() => setStep(1)}>
              Wallet
            </button>
          </div>
          <div className='flex'>
            <hr
              className={
                step === 2
                  ? 'p-[2px] mr-2 bg-primary h-14'
                  : 'bg-gray-200 p-[2px] mr-2 h-14'
              }
            />
            <button className='hover:text-gray-800' onClick={() => setStep(2)}>
              Sender or Driver
            </button>
          </div>
          <div className='flex'>
            <hr
              className={
                step === 3
                  ? 'p-[2px] mr-2 bg-primary h-14'
                  : 'bg-gray-200 p-[2px] mr-2 h-14'
              }
            />
            <button className='hover:text-gray-800' onClick={() => setStep(3)}>
              Promo & Plans
            </button>
          </div>
          <div className='flex'>
            <hr
              className={
                step === 4
                  ? 'p-[2px] mr-2 bg-primary h-14'
                  : 'bg-gray-200 p-[2px] mr-2 h-14'
              }
            />
            <button className='hover:text-gray-800' onClick={() => setStep(4)}>
              Shipment Pin
            </button>
          </div>
          <div className='flex'>
            <hr
              className={
                step === 5
                  ? 'p-[2px] mr-2 bg-primary h-14'
                  : 'bg-gray-200 p-[2px] mr-2 h-14'
              }
            />
            <button className='hover:text-gray-800' onClick={() => setStep(5)}>
              Referral
            </button>
          </div>
        </div>
        {slide.map((slideData) => (
          <div key={slideData.id}>
            <div className='flex flex-col items-center md:items-start py-6 md:py-0 px-6 leading-relaxed bg-gray-200 md:bg-transparent text-gray-600  rounded-3xl md:text-left'>
              <h2 className='font-bold text-xlg text-black py-3 md:text-3xl md:text-left md:leading-normal text-center'>
                {slideData.heading}
              </h2>
              <p className='text-sm pb-6'>{slideData.paragraph}</p>
              <button className='py-2 px-8 bg-primary text-white max-w-max rounded-lg self-center'>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
