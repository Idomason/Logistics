import { ChevronRight, Menu } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className=' bg-primary flex justify-between px-6 py-7 lg:pb-40 md:pb-35 pb-20'>
      <div className='flex items-center justify-between space-x-16'>
        <div>
          <Image
            src='/shipPack-horizontal-logo-white.svg'
            width={165}
            height={100}
            alt='Logo'
          />
        </div>
        <ul className='md:flex space-x-6 hidden'>
          <li>
            <a href='#'>
              Features <ChevronRight className='inline-block' />
            </a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Support</a>
          </li>
        </ul>
      </div>

      <div className='self-center md:block hidden'>
        <button className='inline-block rounded-md text-sm text-primary bg-white py-3 px-12'>
          Login
        </button>
      </div>
      <Menu className='md:hidden' />
    </header>
  );
}
