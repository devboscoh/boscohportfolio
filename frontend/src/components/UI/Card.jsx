// src/components/UI/Card.jsx
const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  hoverEffect = true,
  padding = 'medium',
  ...props 
}) => {
  const baseClasses = 'rounded-xl border transition-all duration-300';
  
  const variants = {
    default: 'bg-white border-gray-200',
    elevated: 'bg-white border-gray-200 shadow-sm',
    filled: 'bg-gray-50 border-gray-200',
    outline: 'bg-transparent border-gray-300',
  };
  
  const paddings = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };
  
  const hoverClasses = hoverEffect 
    ? 'hover:shadow-lg hover:-translate-y-1 hover:border-gray-300' 
    : '';
  
  return (
    <div
      className={`${baseClasses} ${variants[variant]} ${paddings[padding]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-medium mb-2 ${className}`}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-600 ${className}`}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-6 pt-6 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

export default Card;
