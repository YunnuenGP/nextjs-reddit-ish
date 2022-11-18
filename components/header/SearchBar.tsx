import {
    MagnifyingGlassIcon as SearchIcon,
  } from '@heroicons/react/24/solid';

interface SearchBarProps extends Customizable {
}

export const SearchBar = ({className, ...props}: SearchBarProps) => {

    return (
        <form
        className={`flex flex-1 items-center space-x-2 rounded-md border border-gray-200 bg-gray-100 px-3 py-1 ${className}`}
        {...props}
        >
            <SearchIcon className="h-6 w-6 text-gray-400" />
            <input
                className="flex-1 bg-transparent outline-none"
                type="text"
                placeholder="Search Reddit"
            />
            <button type="submit" hidden />
        </form>
    );
}