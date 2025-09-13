"use client";

import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Target,
  Lightbulb,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Award,
  BarChart3,
  Settings,
  Eye,
  Briefcase,
  Globe,
  Database,
  Code,
  Smartphone
} from 'lucide-react';

const Consulting = () => {
  const [activeService, setActiveService] = useState('strategy');

  const consultingServices = [
    {
      id: 'strategy',
      icon: Target,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation roadmaps aligned with your business objectives",
      details: [
        "Digital Transformation Planning",
        "Technology Assessment & Audit",
        "Business Process Analysis",
        "ROI & Cost-Benefit Analysis",
        "Implementation Roadmaps",
        "Change Management Strategy"
      ],
      benefits: ["Reduced operational costs by 30-50%", "Improved efficiency", "Competitive advantage"]
    },
    {
      id: 'architecture',
      icon: Database,
      title: "Technical Architecture",
      description: "Scalable and robust technical architecture design for enterprise solutions",
      details: [
        "System Architecture Design",
        "Cloud Migration Strategy",
        "Microservices Architecture",
        "API Strategy & Design",
        "Database Design & Optimization",
        "Security Architecture"
      ],
      benefits: ["99.9% system uptime", "Scalable infrastructure", "Enhanced security"]
    },
    {
      id: 'optimization',
      icon: TrendingUp,
      title: "Process Optimization",
      description: "Streamline operations and improve efficiency through technology integration",
      details: [
        "Business Process Reengineering",
        "Workflow Automation",
        "Performance Optimization",
        "Quality Assurance Processes",
        "Resource Allocation",
        "KPI Definition & Tracking"
      ],
      benefits: ["40% faster processes", "Reduced manual errors", "Better resource utilization"]
    },
    {
      id: 'security',
      icon: Shield,
      title: "Security Consulting",
      description: "Comprehensive security assessment and implementation of best practices",
      details: [
        "Security Audits & Assessments",
        "Vulnerability Testing",
        "Compliance Management",
        "Data Protection Strategies",
        "Incident Response Planning",
        "Security Training Programs"
      ],
      benefits: ["100% compliance", "Zero security breaches", "Protected business assets"]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: Briefcase,
      description: "Digital health solutions and HIPAA-compliant systems",
      projects: "25+ projects",
      expertise: ["EHR Integration", "Telemedicine", "Patient Portals", "Medical IoT"]
    },
    {
      name: "Financial Services",
      icon: TrendingUp,
      description: "Fintech solutions and regulatory compliance systems",
      projects: "30+ projects", 
      expertise: ["Payment Systems", "Risk Management", "Blockchain", "Compliance"]
    },
    {
      name: "E-commerce",
      icon: Globe,
      description: "Scalable online platforms and omnichannel solutions",
      projects: "40+ projects",
      expertise: ["Platform Migration", "Mobile Commerce", "Analytics", "Personalization"]
    },
    {
      name: "Manufacturing",
      icon: Settings,
      description: "Industry 4.0 and smart manufacturing solutions",
      projects: "20+ projects",
      expertise: ["IoT Integration", "Supply Chain", "Quality Control", "Automation"]
    }
  ];

  const consultingProcess = [
    {
      step: 1,
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current systems, processes, and business objectives",
      icon: Eye,
      deliverables: ["Current State Analysis", "Gap Assessment", "Requirements Document"],
      duration: "1-2 weeks"
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Create detailed strategies and roadmaps tailored to your specific needs",
      icon: Target,
      deliverables: ["Strategic Roadmap", "Technical Specifications", "Implementation Plan"],
      duration: "2-3 weeks"
    },
    {
      step: 3,
      title: "Solution Design",
      description: "Design comprehensive solutions with detailed architecture and workflows",
      icon: Code,
      deliverables: ["System Architecture", "Process Workflows", "Technology Stack"],
      duration: "2-4 weeks"
    },
    {
      step: 4,
      title: "Implementation Planning",
      description: "Detailed planning for solution implementation with timeline and resources",
      icon: Settings,
      deliverables: ["Project Timeline", "Resource Plan", "Risk Assessment"],
      duration: "1-2 weeks"
    },
    {
      step: 5,
      title: "Execution Support",
      description: "Hands-on support during implementation with regular monitoring and adjustments",
      icon: Zap,
      deliverables: ["Implementation Support", "Progress Reports", "Quality Assurance"],
      duration: "Ongoing"
    }
  ];

  const successMetrics = [
    { metric: "150+", label: "Projects Completed", icon: Award },
    { metric: "98%", label: "Client Satisfaction", icon: Star },
    { metric: "$2M+", label: "Cost Savings Generated", icon: TrendingUp },
    { metric: "45%", label: "Average Efficiency Gain", icon: BarChart3 }
  ];

  const testimonials = [
    {
      quote: "NXORA LABS transformed our entire business process. Their strategic consulting led to 40% cost reduction and significantly improved our operational efficiency.",
      client: "Sarah Johnson",
      position: "CEO, TechCorp Industries",
      company: "TechCorp Industries",
      results: "40% cost reduction, 60% faster processes"
    },
    {
      quote: "The digital transformation strategy they developed for us was comprehensive and perfectly aligned with our business goals. Implementation was seamless.",
      client: "Michael Chen",
      position: "CTO, FinanceFirst",
      company: "FinanceFirst",
      results: "99.9% uptime, 50% improved efficiency"
    },
    {
      quote: "Their security consulting expertise helped us achieve full compliance and establish robust security protocols. Highly recommended!",
      client: "Emma Davis",
      position: "Director of IT, HealthPlus",
      company: "HealthPlus",
      results: "100% compliance, zero security incidents"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Users className="w-12 h-12 text-purple-300 mr-4" />
                <span className="text-purple-300 font-medium">Technology Consulting</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Strategic Technology Consulting
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Transform your business with expert technology consulting. We help organizations 
                navigate digital transformation, optimize processes, and implement scalable solutions that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200 flex items-center justify-center">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-purple-900 transition-all duration-200">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {successMetrics.map((item, index) => (
                    <div key={index} className="text-center">
                      <item.icon className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white mb-1">{item.metric}</div>
                      <div className="text-purple-200 text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology consulting services to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Services</h3>
                <div className="space-y-2">
                  {consultingServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                        activeService === service.id 
                          ? 'bg-purple-50 text-purple-700 border-l-4 border-purple-500' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center">
                        <service.icon className="w-5 h-5 mr-3" />
                        <span className="font-medium">{service.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-2">
              {consultingServices.map((service) => (
                activeService === service.id && (
                  <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-start mb-6">
                      <div className="bg-purple-100 p-3 rounded-xl mr-4">
                        <service.icon className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-lg">{service.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4">What We Deliver:</h4>
                        <div className="space-y-3">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-4">Key Benefits:</h4>
                        <div className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start">
                              <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep domain knowledge across various industries to provide targeted solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-purple-100 p-3 rounded-xl mr-4">
                    <industry.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {industry.projects}
                      </span>
                    </div>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {industry.expertise.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure successful outcomes for every consulting engagement
            </p>
          </div>

          <div className="space-y-8">
            {consultingProcess.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-8">
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <step.icon className="w-6 h-6 text-purple-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6">{step.description}</p>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Key Deliverables:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our consulting services have transformed businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="mb-4">
                  <div className="font-bold text-gray-900">{testimonial.client}</div>
                  <div className="text-gray-600 text-sm">{testimonial.position}</div>
                  <div className="text-purple-600 text-sm font-medium">{testimonial.company}</div>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-xs text-purple-700 font-medium">Results Achieved:</div>
                  <div className="text-sm text-purple-800">{testimonial.results}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Schedule a free consultation to discuss your technology challenges and opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-purple-700 transition-all duration-200">
              Download Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;