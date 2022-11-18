import React from 'react';
import {
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
import Link from 'next/link';

import {Logo} from './Logo';
import { NavDisplay } from './NavDisplay';
import { SearchBar } from './SearchBar';
import { IconBar } from './IconBar';
import { SignIn } from './SignIn';

function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <Link href="/">
        <Logo />
      </Link>
      <NavDisplay />
      <SearchBar />
      <IconBar>
        <SparklesIcon className="icon" />
        <GlobeAmericasIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleOvalLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerWaveIcon className="icon" />
      </IconBar>
      <SignIn text='Sign In'/>

      {/* Menu */}
      <div className="flex items-center ml-5 lg:hidden">
        <MenuIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
