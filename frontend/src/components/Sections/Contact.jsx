// src/components/Sections/Contact.jsx
import { useState } from 'react';
import axios from 'axios';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light mb-12">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Mail className="mr-4" size={20} />
                <span>boscobrilli8@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4" size={20} />
                <span>+254715640443</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4" size={20} />
                <span>P.O. Box 179-40303</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600">
                Currently open to new opportunities and collaborations in software development and environmental management.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
              />
            </div>
            
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
            
            {status === 'success' && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
