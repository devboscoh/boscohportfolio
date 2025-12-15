// src/components/UI/Button.jsx
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 active:bg-gray-900',
    secondary: 'bg-white text-black border border-black hover:bg-gray-50 active:bg-gray-100',
    outline: 'bg-transparent text-black border border-gray-300 hover:border-black active:bg-gray-50',
    ghost: 'bg-transparent text-gray-600 hover:text-black hover:bg-gray-100 active:bg-gray-200',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

export default Button;