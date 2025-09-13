'use client';
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Zap, 
  Users, 
  TrendingUp, 
  Award,
  ChevronRight,
  Play,
  CheckCircle,
  Star,
  Lightbulb,
  Brain,
  Rocket,
  Shield
} from 'lucide-react';
import HeaderComponent from '@/Component/Header'; // Import header component
import HeroComponent from '@/Component/hero';
import Footer from '@/Component/Footer'; // Import footer component 

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, MedTech Innovations",
      content: "NXORA LABS transformed our healthcare data analytics. Their AI solutions increased our diagnostic accuracy by 40%.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "VP Engineering, FinanceForward",
      content: "The research and development expertise at NXORA LABS is unmatched. They delivered solutions that exceeded our expectations.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Director, EduTech Solutions",
      content: "Working with NXORA LABS was a game-changer for our educational platform. Their innovative approach is truly remarkable.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Industry Awards" },
    { number: "24/7", label: "Support Available" }
  ];

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Advanced artificial intelligence solutions that transform your data into actionable insights and automated processes."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Research & Development",
      description: "Cutting-edge R&D services that push the boundaries of what's possible in your industry."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Comprehensive data analysis and visualization solutions that drive informed decision-making."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation Consulting",
      description: "Strategic guidance to help organizations adopt emerging technologies and innovative practices."
    }
  ];

  const industries = [
    { name: "Healthcare", growth: "+45%" },
    { name: "Finance", growth: "+38%" },
    { name: "Education", growth: "+42%" },
    { name: "Technology", growth: "+55%" },
    { name: "Manufacturing", growth: "+33%" },
    { name: "Retail", growth: "+28%" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Header Component */}
      <HeaderComponent />
      
      {/* Hero Section - Using the imported HeroComponent */}
      <HeroComponent />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-500">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive solutions across multiple domains, combining cutting-edge technology with deep industry knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-blue-600 group-hover:text-green-500 transition-colors duration-300 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <button className="text-blue-600 font-semibold group-hover:text-green-500 transition-colors duration-300">
                  Learn More <ChevronRight className="inline w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transforming <span className="text-blue-600">Industries</span> Worldwide
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our innovative solutions have driven measurable growth across diverse sectors, 
                helping organizations unlock their full potential through technology and research.
              </p>
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                    <span className="font-semibold text-gray-800">{industry.name}</span>
                    <span className="text-green-600 font-bold">{industry.growth}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8" />
                    <div>
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-blue-100">Projects Delivered</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-8 h-8" />
                    <div>
                      <div className="text-2xl font-bold">40%</div>
                      <div className="text-blue-100">Average ROI Increase</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8" />
                    <div>
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-blue-100">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-16">
            What Our <span className="text-green-300">Clients</span> Say
          </h2>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div>
                <div className="font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-green-300' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of organizations that trust NXORA LABS to drive their innovation forward. 
              Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;