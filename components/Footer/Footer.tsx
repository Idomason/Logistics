import { Facebook, Instagram, Linkedin, LinkedinIcon, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className='w-full py-20 px-10 bg-black text-white text-center flex flex-col items-center justify-center'>
      <div className='md:w-3/4 grid grid-cols-2 md:flex flex-wrap justify-between gap-10'>
        <div>
          <h3 className='font-bold tracking-wide mb-3'>Features</h3>
          <div className='flex flex-col gap-2 text-sm'>
            <p className='hover:text-gray-400 cursor-pointer'>Wallet</p>
            <p className='hover:text-gray-400 cursor-pointer'>
              Plans & Subscription
            </p>
            <p className='hover:text-gray-400 cursor-pointer'>Shipment Mode</p>
          </div>
        </div>
        <div>
          <h3 className='font-bold tracking-wide mb-3'>Company</h3>
          <div className='flex flex-col gap-2 text-sm'>
            <p className='hover:text-gray-400 cursor-pointer'>About Us</p>
            <p className='hover:text-gray-400 cursor-pointer'>Support</p>
          </div>
        </div>
        <div>
          <h3 className='font-bold tracking-wide mb-3'>Legal</h3>
          <div className='flex flex-col gap-2 text-sm'>
            <p className='hover:text-gray-400 cursor-pointer'>
              Terms of Service
            </p>
            <p className='hover:text-gray-400 cursor-pointer'>Privacy Policy</p>
          </div>
        </div>
        <div>
          <h3 className='font-bold tracking-wide mb-3'>Contact</h3>
          <div className='flex flex-col gap-2 text-sm'>
            <p className='hover:text-gray-400 cursor-pointer'>
              hello@theshippack.com
            </p>
            <p className='hover:text-gray-400 cursor-pointer'>Facebook</p>
            <p className='hover:text-gray-400 cursor-pointer'>Twitter</p>
          </div>
        </div>
      </div>
      <div className='py-5 px-10 mt-5 flex flex-col gap-4 items-center justify-center'>
        <Image
          src='/shipPack-horizontal-logo-white.svg'
          width={200}
          height={100}
          alt='Logo'
        />
        <p>© 2023 ShipPack Int. All rights reserved.</p>
        <div className='mt-5 flex items-center justify-center gap-4 '>
          <Facebook />
          <X />
          <Instagram />
          <Linkedin />
        </div>
      </div>
    </footer>
  );
}
