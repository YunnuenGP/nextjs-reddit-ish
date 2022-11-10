import Image from 'next/image';
import React from 'react';
import {
  HomeIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon as SearchIcon,
  Bars3Icon as MenuIcon,
} from '@heroicons/react/24/solid';
import {
  BellIcon,
  ChatBubbleOvalLeftIcon,
  SparklesIcon,
  GlobeAmericasIcon,
  PlusIcon,
  SpeakerWaveIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      {/* Logo */}
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          src="https://www.redditinc.com/assets/images/site/logo.svg"
          alt="logo"
          style={{ objectFit: 'contain' }}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </div>

      {/* Home */}
      <div className="flex items-center mx-7 cursor-pointer xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search */}
      <form
        action=""
        className="flex flex-1 items-center space-x-2 rounded-md border border-gray-200 bg-gray-100 px-3 py-1"
      >
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      {/* Icons */}
      <div className="text-gray-500 mx-5 items-center space-x-2 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAmericasIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleOvalLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerWaveIcon className="icon" />
      </div>

      {/* Sign in/up */}
      <div className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image
            src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
            alt="Sign In"
            style={{ objectFit: 'contain', filter: 'grayscale(1)' }}
            fill
          />
        </div>
        <p className="text-gray-400">Sign In</p>
      </div>

      {/* Menu */}
      <div className="flex items-center ml-5 lg:hidden">
        <MenuIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
