// src/hooks/usePortfolioData.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const usePortfolioData = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Static profile data (fallback if API fails)
  const staticProfileData = {
    personal: {
      name: "Boscoh Brilliant Otieno Odoyo",
      title: "Full Stack Developer & Environment Officer",
      contact: {
        address: "P.O. Box 179-40303",
        phone: "+254715640443",
        email: "boscobrilli8@gmail.com"
      }
    },
    objective: "An organized, motivated, and adaptable individual seeking to enhance my environment while growing alongside all stakeholders. Looking for a dynamic setting that offers opportunities for real change and professional advancement.",
    skills: {
      technical: [
        "Full Stack Web Development (MERN Stack)",
        "Proficient in MS Word, Excel, PowerPoint",
        "Internet Applications & Web Technologies"
      ],
      environmental: [
        "Environmental Monitoring & Compliance",
        "Waste Management & Disposal Systems",
        "Environmental Impact Assessments"
      ],
      interpersonal: [
        "Excellent Interpersonal Communication",
        "Resource Mobilization & Management",
        "Community Engagement & Sensitization"
      ]
    },
    experience: [
      {
        id: 1,
        title: "Environment Officer",
        company: "Nairobi City County",
        period: "September 2023 - Present",
        location: "Nairobi, Kenya",
        responsibilities: [
          "Manage the day-to-day environmental activities of the ward",
          "Oversee waste collection, management, and disposal within the ward",
          "Conduct environmental monitoring, compliance, and enforcement",
          "Organize cleanups and sensitize the community on waste management",
          "Assist in environmental policy formulation and implementation at the ward level"
        ],
        current: true
      },
      {
        id: 2,
        title: "Community Forester",
        company: "Kagan Community Based Organization",
        period: "January 2016 - January 2021",
        location: "Kenya",
        responsibilities: [
          "Established and managed a community forest",
          "Mobilized and educated community members on sustainable practices",
          "Assisted in conducting an Environmental Impact Assessment study for Kosiga Dam"
        ]
      },
      {
        id: 3,
        title: "Forestry Attaché",
        company: "Comply Industries Ltd",
        period: "August 2014 - December 2015",
        location: "Sobea, Kenya",
        responsibilities: [
          "Oversaw the establishment of forest plantations in Sobea",
          "Managed silvicultural practices within the nursery and seedbed",
          "Maintained comprehensive forestry records"
        ]
      }
    ],
    education: [
      {
        id: 1,
        institution: "PLP Africa Academy",
        degree: "Software Engineering (MERN stack)",
        period: "July 2025 - December 2025",
        current: true,
        highlights: [
          "Full Stack Web Development Specialization",
          "Modern JavaScript Frameworks",
          "Database Design & Management"
        ]
      },
      {
        id: 2,
        institution: "Egerton University",
        degree: "Bachelor of Science in Integrated Forest Resources Management",
        period: "January 2012 - September 2015",
        highlights: [
          "Environmental Resource Management",
          "Forestry Conservation Techniques",
          "Sustainable Development Practices"
        ]
      },
   
    ]
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Try to fetch from API first
        const response = await axios.get(`${API_BASE_URL}/profile`);
        if (response.data) {
          setProfile(response.data);
        } else {
          setProfile(staticProfileData);
        }
      } catch (err) {
        console.warn('Using static profile data. API not available:', err.message);
        setProfile(staticProfileData);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // Function to submit contact form
  const submitContactForm = async (formData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, formData);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return { 
        success: false, 
        error: error.response?.data?.error || 'Failed to send message' 
      };
    }
  };

  // Function to get filtered experience
  const getFilteredExperience = (limit = null) => {
    if (!profile?.experience) return [];
    return limit ? profile.experience.slice(0, limit) : profile.experience;
  };

  // Function to get education
  const getEducation = () => {
    return profile?.education || [];
  };

  // Function to get skills by category
  const getSkillsByCategory = (category) => {
    if (!profile?.skills) return [];
    return profile.skills[category] || [];
  };

  return {
    profile,
    loading,
    error,
    submitContactForm,
    getFilteredExperience,
    getEducation,
    getSkillsByCategory
  };
};

export default usePortfolioData;