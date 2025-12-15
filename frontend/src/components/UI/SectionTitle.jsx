// src/components/UI/SectionTitle.jsx
const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'left',
  icon,
  className = '' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <div className={`${alignmentClasses[align]} ${className}`}>
      {icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4">
          {icon}
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl font-light mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
