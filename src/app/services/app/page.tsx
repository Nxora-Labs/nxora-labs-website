"use client";

import React, { useState } from 'react';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Zap, 
  Shield, 
  Bell,
  Download,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Code,
  Palette,
  Settings,
  BarChart3,
  Eye,
  Heart,
  Wifi,
  Battery
} from 'lucide-react';

const AppDevelopment = () => {
  const [activeTab, setActiveTab] = useState('native');

  const services = [
    {
      icon: Smartphone,
      title: "Native iOS Apps",
      description: "High-performance iOS applications built with Swift and optimized for Apple devices",
      features: ["Swift/SwiftUI", "App Store Optimization", "iOS Guidelines", "Native Performance"]
    },
    {
      icon: Tablet,
      title: "Native Android Apps",
      description: "Robust Android applications using Kotlin/Java for optimal Google Play Store presence",
      features: ["Kotlin/Java", "Material Design", "Play Store Ready", "Android Optimization"]
    },
    {
      icon: Monitor,
      title: "Cross-Platform Apps",
      description: "Efficient development with React Native and Flutter for both iOS and Android",
      features: ["React Native/Flutter", "Code Reusability", "Faster Development", "Cost Effective"]
    },
    {
      icon: Zap,
      title: "Progressive Web Apps",
      description: "Web applications that feel and work like native mobile apps",
      features: ["Offline Capability", "Push Notifications", "App-like Experience", "Cross-platform"]
    }
  ];

  const appTypes = [
    {
      type: "Business Apps",
      description: "Enterprise solutions for productivity and workflow management",
      examples: ["CRM Apps", "Project Management", "Team Collaboration", "Document Management"],
      icon: Users
    },
    {
      type: "E-commerce Apps",
      description: "Mobile shopping experiences that drive sales and customer loyalty",
      examples: ["Shopping Apps", "Marketplace", "Payment Integration", "Order Tracking"],
      icon: Download
    },
    {
      type: "Healthcare Apps",
      description: "Digital health solutions for patients and healthcare providers",
      examples: ["Telemedicine", "Health Tracking", "Appointment Booking", "Medical Records"],
      icon: Heart
    },
    {
      type: "Education Apps",
      description: "Learning platforms and educational tools for students and educators",
      examples: ["E-learning", "Quiz Apps", "Language Learning", "Skill Development"],
      icon: BarChart3
    }
  ];

  const technologies = [
    {
      category: "Native iOS",
      techs: [
        { name: "Swift", level: 92 },
        { name: "SwiftUI", level: 88 },
        { name: "Objective-C", level: 75 },
        { name: "Xcode", level: 90 }
      ],
      color: "blue"
    },
    {
      category: "Native Android",
      techs: [
        { name: "Kotlin", level: 90 },
        { name: "Java", level: 85 },
        { name: "Android Studio", level: 92 },
        { name: "Jetpack Compose", level: 78 }
      ],
      color: "green"
    },
    {
      category: "Cross-Platform",
      techs: [
        { name: "React Native", level: 88 },
        { name: "Flutter", level: 82 },
        { name: "Xamarin", level: 70 },
        { name: "Ionic", level: 75 }
      ],
      color: "purple"
    },
    {
      category: "Backend & Services",
      techs: [
        { name: "Firebase", level: 85 },
        { name: "AWS Mobile", level: 80 },
        { name: "Node.js", level: 88 },
        { name: "GraphQL", level: 78 }
      ],
      color: "orange"
    }
  ];

  const process = [
    {
      step: 1,
      title: "App Strategy & Planning",
      description: "We analyze your target audience, market research, and define app requirements and features.",
      icon: Eye,
      duration: "1-2 weeks"
    },
    {
      step: 2,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and seamless user experiences for your mobile app.",
      icon: Palette,
      duration: "2-4 weeks"
    },
    {
      step: 3,
      title: "App Development",
      description: "Building your app with clean code, following platform guidelines and best practices.",
      icon: Code,
      duration: "6-12 weeks"
    },
    {
      step: 4,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing on multiple devices to ensure bug-free performance.",
      icon: Settings,
      duration: "2-3 weeks"
    },
    {
      step: 5,
      title: "App Store Launch",
      description: "Publishing your app to App Store and Google Play with optimization for maximum visibility.",
      icon: Zap,
      duration: "1-2 weeks"
    },
    {
      step: 6,
      title: "Post-Launch Support",
      description: "Ongoing maintenance, updates, and feature enhancements based on user feedback.",
      icon: Settings,
      duration: "Ongoing"
    }
  ];

  const portfolioApps = [
    {
      title: "FitTracker Pro",
      category: "Health & Fitness",
      description: "Comprehensive fitness tracking app with workout plans and nutrition guidance",
      features: ["Workout Tracking", "Nutrition Plans", "Progress Analytics", "Social Features"],
      downloads: "50K+",
      rating: "4.8",
      platform: "iOS & Android"
    },
    {
      title: "ShopEase",
      category: "E-commerce",
      description: "Modern shopping app with AR try-on and personalized recommendations",
      features: ["AR Integration", "AI Recommendations", "Secure Payments", "Order Tracking"],
      downloads: "25K+",
      rating: "4.6",
      platform: "Cross-Platform"
    },
    {
      title: "TaskMaster",
      category: "Productivity",
      description: "Team collaboration app with project management and real-time communication",
      features: ["Project Management", "Team Chat", "File Sharing", "Time Tracking"],
      downloads: "15K+",
      rating: "4.7",
      platform: "Native iOS"
    }
  ];

  const features = [
    { icon: Smartphone, title: "Native Performance", description: "Optimized for each platform's capabilities" },
    { icon: Shield, title: "Security First", description: "Built with enterprise-grade security measures" },
    { icon: Bell, title: "Push Notifications", description: "Engage users with timely notifications" },
    { icon: Wifi, title: "Offline Functionality", description: "Works seamlessly without internet connection" },
    { icon: Battery, title: "Battery Optimized", description: "Efficient code that preserves device battery" },
    { icon: Star, title: "App Store Ready", description: "Fully compliant with store guidelines" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600", 
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Smartphone className="w-12 h-12 text-green-300 mr-4" />
                <span className="text-green-300 font-medium">App Development</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build Apps That Users Love
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Create powerful mobile applications that engage users and drive business growth. 
                From native iOS and Android apps to cross-platform solutions, we deliver exceptional mobile experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-green-900 px-8 py-4 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200 flex items-center justify-center">
                  Start Your App Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-green-900 transition-all duration-200">
                  View App Portfolio
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-green-200">Apps Developed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">4.8</div>
                    <div className="text-green-200">Average Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">500K+</div>
                    <div className="text-green-200">Total Downloads</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                    <div className="text-green-200">Client Satisfaction</div>
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
              Our App Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From native mobile apps to cross-platform solutions, we cover all your mobile development needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-start mb-6">
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <service.icon className="w-8 h-8 text-green-600" />
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

      {/* App Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Apps We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in various app categories to meet diverse business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <type.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.type}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
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
              We use the latest technologies and frameworks for mobile app development
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
                          className={`bg-gradient-to-r ${getColorClasses(category.color)} h-2 rounded-full transition-all duration-1000`}
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              App Features We Excel At
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every app we build includes essential features for optimal user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Featured Apps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Success stories from our mobile app development projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioApps.map((app, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-green-500 to-green-600 h-48 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <div className="text-lg font-medium">{app.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{app.title}</h3>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{app.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {app.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="font-bold text-green-600">{app.downloads}</div>
                      <div className="text-xs text-gray-500">Downloads</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-600">{app.platform}</div>
                      <div className="text-xs text-gray-500">Platform</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Transform your idea into a successful mobile application that users will love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              Get App Development Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-green-700 transition-all duration-200">
              Schedule App Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;