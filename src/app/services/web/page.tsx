"use client";

import React, { useState } from 'react';
import { 
  Globe, 
  Code, 
  Smartphone, 
  Zap, 
  Shield, 
  Search,
  ShoppingCart,
  Database,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award,
  Palette,
  Settings,
  BarChart3,
  Eye
} from 'lucide-react';

const WebDevelopment = () => {
  const [activeTab, setActiveTab] = useState('websites');

  const services = [
    {
      icon: Globe,
      title: "Custom Websites",
      description: "Bespoke websites tailored to your brand and business objectives",
      features: ["Custom Design", "Brand Integration", "SEO Optimized", "Mobile Responsive"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Powerful online stores that drive sales and customer engagement",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Customer Accounts"]
    },
    {
      icon: Code,
      title: "Web Applications",
      description: "Complex web applications with advanced functionality and user interactions",
      features: ["Custom Logic", "User Authentication", "Real-time Features", "API Integration"]
    },
    {
      icon: Zap,
      title: "Progressive Web Apps",
      description: "App-like experiences that work seamlessly across all devices",
      features: ["Offline Functionality", "Push Notifications", "Native Feel", "Fast Loading"]
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      techs: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python/Django", level: 80 },
        { name: "PHP/Laravel", level: 78 }
      ]
    },
    {
      category: "Database",
      techs: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 90 },
        { name: "Firebase", level: 82 }
      ]
    },
    {
      category: "Tools & Platforms",
      techs: [
        { name: "AWS", level: 85 },
        { name: "Vercel", level: 92 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 95 }
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
      icon: Eye,
      duration: "1-2 weeks"
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Our designers create wireframes and high-fidelity mockups that align with your brand identity.",
      icon: Palette,
      duration: "2-3 weeks"
    },
    {
      step: 3,
      title: "Development",
      description: "Our developers build your website using modern technologies and best practices.",
      icon: Code,
      duration: "4-8 weeks"
    },
    {
      step: 4,
      title: "Testing & Optimization",
      description: "Rigorous testing across devices and browsers to ensure optimal performance and user experience.",
      icon: Settings,
      duration: "1-2 weeks"
    },
    {
      step: 5,
      title: "Launch & Support",
      description: "We deploy your website and provide ongoing maintenance and support.",
      icon: Zap,
      duration: "Ongoing"
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      description: "Full-featured online store with advanced filtering and payment integration",
      technologies: ["Next.js", "Stripe", "MongoDB"],
      metrics: { conversion: "+45%", speed: "2.1s load", users: "10K+" }
    },
    {
      title: "Healthcare Portal",
      category: "Web App",
      description: "Patient management system with appointment scheduling and telemedicine",
      technologies: ["React", "Node.js", "PostgreSQL"],
      metrics: { efficiency: "+60%", patients: "5K+", uptime: "99.9%" }
    },
    {
      title: "Corporate Website",
      category: "Business",
      description: "Professional corporate website with content management system",
      technologies: ["Next.js", "CMS", "AWS"],
      metrics: { traffic: "+120%", leads: "+80%", score: "98/100" }
    }
  ];

  const features = [
    { icon: Smartphone, title: "Mobile Responsive", description: "Perfect experience on all devices" },
    { icon: Zap, title: "Fast Loading", description: "Optimized for speed and performance" },
    { icon: Shield, title: "Secure", description: "Built with security best practices" },
    { icon: Search, title: "SEO Optimized", description: "Designed to rank well in search engines" },
    { icon: Database, title: "Scalable", description: "Built to grow with your business" },
    { icon: Settings, title: "Easy to Maintain", description: "Clean, documented code for easy updates" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Globe className="w-12 h-12 text-blue-300 mr-4" />
                <span className="text-blue-300 font-medium">Web Development</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build Your Digital Presence
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Create stunning, high-performance websites that engage your audience and drive business growth. 
                From simple landing pages to complex web applications, we deliver solutions that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-all duration-200">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">100+</div>
                    <div className="text-blue-200">Websites Built</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">99%</div>
                    <div className="text-blue-200">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">2.1s</div>
                    <div className="text-blue-200">Average Load Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-blue-200">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we provide comprehensive web development solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Web Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver websites that not only look great but perform exceptionally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build robust, scalable web solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                <div className="space-y-4">
                  {category.techs.map((tech, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{tech.name}</span>
                        <span className="text-sm text-gray-500">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-8">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <step.icon className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses succeed with our web development solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-48 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Globe className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <div className="text-lg font-medium">{item.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(item.metrics).map(([key, value], idx) => (
                      <div key={idx}>
                        <div className="font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a website that drives results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;