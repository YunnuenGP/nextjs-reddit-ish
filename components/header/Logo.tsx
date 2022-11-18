import Image from "next/image";

interface LogoProps extends Customizable {
}

export const Logo = ({className, ...props}: LogoProps) => {

    return <div className={`relative h-10 w-20 flex-shrink-0 cursor-pointer ${className}`}>
    <Image
      src="https://www.redditinc.com/assets/images/site/logo.svg"
      alt="logo"
      style={{ objectFit: 'contain' }}
      fill
      sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
      priority
      {...props}
    />
  </div>;
}