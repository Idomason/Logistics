import Image from 'next/image';

export default function Hero() {
  return (
    <section className='w-full bg-primary flex items-center justify-center overflow-hidden'>
      <div className='md:w-1/2 w-full text-center flex flex-col items-center justify-center gap-10'>
        <h1 className='lg:text-5xl md:text-3xl text-xl text-center font-bold tracking-wide leading-snug'>
          One Place, All Logistics.
        </h1>
        <p className='md:text-center tracking-wide py-2 px-10 md:text-lg text-sm'>
          Welcome to ShipPack, a logistics platform that connects you with
          verified drivers and companies who can deliver your shipments using
          air, sea, or land modes
        </p>
        <div className='md:flex items-center justify-center text-sm gap-4'>
          <a
            className='w-max-content bg-gray-900 lg:p-4 p-3 flex items-center justify-between gap-2 rounded-md my-4'
            href='#'
          >
            {' '}
            <Image
              src='/tiny-android.svg'
              width={25}
              height={30}
              alt='Google Play logo'
            />{' '}
            Download on Google Play
          </a>
          <a
            className='w-max-content bg-gray-900 lg:p-4 p-3 flex items-center justify-center gap-2 rounded-md'
            href='#'
          >
            {' '}
            <Image
              src='/apple-white.png'
              width={23}
              height={30}
              alt='Google Play logo'
            />
            Download on App Store
          </a>
        </div>
        <Image
          className='w-full'
          src='/home-hero.svg'
          width={200}
          height={200}
          alt='Hero Image'
        />
      </div>
    </section>
  );
}
