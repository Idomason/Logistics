import Image from 'next/image';

export default function Shipment() {
  return (
    <section className='md:px-2 bg-white text-center flex  justify-between gap-10'>
      <div className='md:mx-1 px-4 py-20 bg-gray-200 lg:bg-transparent text-center md:rounded-3xl'>
        <h2 className=' text-lg md:text-3xl text-black font-bold py-3'>
          Never Lose Sight of Your Shipments
        </h2>
        <p className='text-sm text-gray-600 md:text-lg'>
          ShipPack makes it easy to create and track shipments. You can choose
          from a variety of drivers and companies to deliver your shipments
          safely and quickly.
        </p>
      </div>
      <div className='w-full hidden lg:block'>
        <Image
          className='w-3/4'
          src='/home-hero2.svg'
          width={200}
          height={150}
          alt='Image'
        />
      </div>
    </section>
  );
}
