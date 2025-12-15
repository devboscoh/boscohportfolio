// src/components/Sections/Hero.jsx
import { useState } from "react";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column */}
        <div>
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight">
              Bosco Otieno
              <span className="block text-gray-600 text-3xl md:text-4xl mt-2">
                Odoyo
              </span>
            </h1>

            <div className="h-1 w-24 bg-black mb-6" />

            <p className="text-xl text-gray-600 mb-2">
              GIS Specialist & Full Stack Developer
            </p>
            <p className="text-lg text-gray-500">
              Environmental Officer | QGIS Expert | MERN Stack Developer
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-gray-700">
              <Mail size={18} className="mr-3" />
              <span>boscobrilli8@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Phone size={18} className="mr-3" />
              <span>+254 715 640 443</span>
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin size={18} className="mr-3" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
            >
              Get in Touch
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#portfolio"
              className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors text-center"
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          <div className="relative max-w-md mx-auto">

            {!photoLoaded && (
              <div className="w-full h-64 md:h-96 bg-gray-200 rounded-2xl animate-pulse" />
            )}

            <img
              src="/profile-photo.jpg"
              alt="Bosco Brilliant Otieno Odoyo"
              className={`w-full h-auto rounded-2xl shadow-2xl object-cover ${
                photoLoaded ? "block" : "hidden"
              }`}
              onLoad={() => setPhotoLoaded(true)}
              onError={() => setPhotoLoaded(false)}
            />

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-100 rounded-full -z-10" />
          </div>

          {/* Status Badge */}
          {photoLoaded && (
            <div className="absolute -bottom-4 right-8 bg-white px-6 py-3 rounded-full shadow-lg border">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                <span className="text-sm font-medium">
                  Available for work
                </span>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-md mx-auto">
            <Stat value="5+" label="GIS Experience" />
            <Stat value="50+" label="QGIS Projects" />
            <Stat value="Full" label="Stack Dev" />
            <Stat value="8+" label="Years Experience" />
          </div>
        </div>

      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
    <div className="text-2xl font-bold text-black">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default Hero;
