import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  name?: string;
  large?: boolean;
}

function Avatar({ name, large, ...props }: AvatarProps) {
  const avatarName = name || 'default';
  return (
    <div
      className={`relative h-10 w-10 rounded-full border border-gray-300 bg-white overflow-hidden ${
        large && 'h-20 w-20'
      }`}
      {...props}
    >
      <Image
        src={`https://avatars.dicebear.com/api/open-peeps/${avatarName}.svg`}
        alt="Avatar"
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </div>
  );
}

export default Avatar;
