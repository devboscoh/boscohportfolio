// src/components/Layout/Footer.jsx
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Mail size={20} />, label: 'Email', href: 'mailto:boscobrilli8@gmail.com' },
    { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/Boscoh722' },
   
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-medium mb-2">Boscoh Brilliant Otieno Odoyo</h3>
            <p className="text-gray-600">
              Full Stack Developer & Environmental Officer
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-black transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600">
              Nairobi, Kenya
            </p>
            <p className="text-gray-500 text-sm mt-1">
              +254 715 640 443
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Boscoh Brilliant Otieno Odoyo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;