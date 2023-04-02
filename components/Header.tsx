import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@images/logo.png';

interface Props {}

const Header: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container--boxed">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image className="h-8 w-auto" src={logo} alt="Workflow" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button className="text--uppercase--sm inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-white bg-brand-red hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red">
                Book Now
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" ref={ref}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button className="text--uppercase--sm block w-full px-3 py-2 mt-4 text-base font-medium text-center text-white bg-brand-red rounded">
                Book Now
              </button>
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
};
export default Header;
