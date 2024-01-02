import Image from 'next/image';

export default function SellingPoint() {
  return (
    <section className='py-10 px-10 flex flex-col items-center justify-center bg-white text-slate-700'>
      <h2 className='text-xl md:text-3xl text-black font-bold py-10 text-center'>
        Bringing You the Best in Logistics
      </h2>
      <p className='w-3/4 text-center'>
        Experience the pinnacle of logistics with ShipPack. Where efficiency
        meets excellence, we deliver more than packages; we deliver satisfaction
        on every journey.
      </p>
      <div className='py-5 text-sm md:flex items-center gap-4 text-center'>
        <div className='flex flex-col lg:flex-row items-center justify-center py-10 lg:gap-2'>
          <Image
            className='p-3 bg-gray-50 rounded-md'
            src='/choice.svg'
            width={70}
            height={70}
            alt='Icon'
          />
          <div className='lg:w-1/2 flex flex-col items-center lg:items-start justify-center'>
            <h2 className='text-xl py-3'>Choice</h2>
            <p>A vast network of delivery partners for your specific needs.</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center py-10 lg:gap-2'>
          <Image
            className='p-3 py-5 bg-gray-50 rounded-md'
            src='/reliability.svg'
            width={70}
            height={70}
            alt='Icon'
          />
          <div className='lg:w-1/2 flex flex-col items-center lg:items-start justify-center'>
            <h2 className='text-xl py-3'>Reliability</h2>
            <p>Keep an eye on your shipment with our always-on tracking.</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center py-10 lg:gap-2'>
          <Image
            className='p-3 bg-gray-50 rounded-md'
            src='/efficiency.svg'
            width={70}
            height={70}
            alt='Icon'
          />
          <div className='lg:w-1/2 flex flex-col items-center lg:items-start justify-center'>
            <h2 className='text-xl py-3'>Efficiency</h2>
            <p>
              Cut costs without cutting corners with our competitive pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
