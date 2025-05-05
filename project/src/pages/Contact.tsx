import React, { useState } from 'react';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, Clock, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (data: any) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-brand-green hover:text-brand-yellow">
            <ChevronLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-600 mb-8">
              Have questions about Mellapay? We're here to help! Fill out the form and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+251986999991</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">support@mellapay.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <ContactForm onSubmit={handleSubmit} isSubmitted={isSubmitted} />
          </div>
        </div>
      </div>
    </div>
  );
};