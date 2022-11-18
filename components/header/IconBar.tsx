interface IconBarProps extends Customizable {
    children?: React.ReactNode;
}

export const IconBar = ({className, children, ...props}: IconBarProps) => {
    return (
    <div 
    className={`text-gray-500 mx-5 items-center space-x-2 hidden lg:inline-flex ${className}`}
    {...props}
    >
        {children}
    </div>
  )
}