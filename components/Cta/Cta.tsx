import Image from 'next/image';

export default function Cta() {
  return (
    <section className='bg-secondary text-white flex flex-col items-center justify-center'>
      <h2 className='w-3/4 text-center md:text-2xl text-xl font-bold '>
        Ready to ship with ShipPack? Download our app today and sign up for
        free!
      </h2>

      <div className='py-10 flex flex-col md:flex-row gap-4'>
        <a
          className='py-4 px-6 bg-white rounded-md text-primary text-sm'
          href='#'
        >
          <Image
            className='inline-block'
            src='/tiny-android.svg'
            width={25}
            height={25}
            alt='icon'
          />{' '}
          Download on Google Play
        </a>
        <a
          className='py-4 px-6 bg-white rounded-md text-primary text-sm'
          href='#'
        >
          <Image
            className='inline-block'
            src='/tiny-apple.svg'
            width={25}
            height={25}
            alt='icon'
          />{' '}
          Download on App Store
        </a>
      </div>
    </section>
  );
}
