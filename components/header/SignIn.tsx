import Image from "next/image"

interface SignInProps extends Customizable {
    text: string;
}

export const SignIn = ({text, className, ...props}: SignInProps) => {
    return (
        <div 
        className={`hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex ${className}`}
        {...props}
        >
            <div className="relative h-5 w-5 flex-shrink-0">
            <Image
                src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
                alt={text}
                style={{ objectFit: 'contain', filter: 'grayscale(1)' }}
                fill
            />
            </div>
            <p className="text-gray-400">{text}</p>
      </div>
  )
}