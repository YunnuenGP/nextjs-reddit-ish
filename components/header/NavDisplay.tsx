import {
    HomeIcon,
    ChevronDownIcon
  } from '@heroicons/react/24/solid';

interface NavProps extends Customizable {
}

export const NavDisplay = ({className, ...props}: NavProps) => {

    return (
        <div 
        className={`flex items-center mx-7 cursor-pointer xl:min-w-[300px] ${className}`}
        {...props}
        >
            <HomeIcon className="h-5 w-5" />
            <p className="flex-1 ml-2 hidden lg:inline">Home</p>
            <ChevronDownIcon className="h-5 w-5" />
        </div>
    );
}