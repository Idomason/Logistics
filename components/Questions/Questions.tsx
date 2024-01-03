'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface AccordionData {
  title: string;
  text: string;
}
type PropDataType = {
  [key: string]: any;
};

const faqs: AccordionData[] = [
  {
    title: 'What is ShipPack?',
    text: 'ShipPack is your all-in-one logistics solution, streamlining shipping, tracking, and much more, living up to the tagline "One Place, All Logistics."',
  },
  {
    title: 'Who can sign up for ShipPack?',
    text: "Anyone! Whether you're a customer, an independent driver, or a company, ShipPack is designed to meet a variety of logistics needs.",
  },
  {
    title: 'Is ShipPack available globally?',
    text: "For now, we're operational in select regions but have plans for global expansion. Stay tuned!",
  },
  {
    title: 'How do I get started with ShipPack?',
    text: "Simply download the mobile app, register an account, and you're good to go!",
  },
  {
    title: 'Is ShipPack safe and secure?',
    text: 'Absolutely! Security is one of our top priorities, and we invest heavily in secure storage, tracking, and safe delivery.',
  },
  {
    title: "What's unique about ShipPack's services?",
    text: 'Our range of features like shipper follow, plan & subscription, and an advanced referral program set us apart.',
  },
  {
    title: 'Do I need to be tech-savvy to use ShipPack?',
    text: 'Not at all! Our app is designed for user-friendliness.',
  },
  {
    title: 'How reliable is ShipPack?',
    text: 'Our network of verified drivers and comprehensive tracking feature ensure reliability at each step.',
  },
  {
    title: 'Can I refer friends to ShipPack?',
    text: 'Yes, and you’ll earn rewards through our Referral Program when they complete their first shipment.',
  },
  {
    title: 'What if I have more questions?',
    text: 'Our support team is always here for you. Feel free to reach out at any time.',
  },
];

export default function Questions() {
  return (
    <section className='py-20 px-10 bg-secondary'>
      <h2 className='font-bold text-md tracking-wide text-center py-4'>
        Got Questions? We’ve Got Answers.
      </h2>
      <h5 className='font-bold text-xs tracking-wide mb-20 text-center'>
        Your top questions about shipping, payments, and more— answered.
      </h5>

      <Accordion data={faqs} />
    </section>
  );
}

function Accordion({ data }: PropDataType) {
  return (
    <div>
      {data.map((el: AccordionData) => (
        <AccordionItem title={el.title} text={el.text} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ title, text }: AccordionData) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`item ${
        isOpen ? 'bg-blue-900' : ''
      } cursor-pointer  mb-10 border-b-2 border-b-blue-500 hover:bg-blue-900 p-3 rounded-t-3xl`}
      onClick={handleToggle}
    >
      <div className='flex justify-between'>
        <p className='mb-2'>{title}</p>
        <p>
          {isOpen ? (
            <ChevronDown className='cursor-pointer' />
          ) : (
            <ChevronRight className='cursor-pointer' />
          )}
        </p>
      </div>
      <div>{isOpen && <div className='text-sm bg-blue-900'>{text}</div>}</div>
    </div>
  );
}
