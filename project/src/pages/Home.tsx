import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Banknote,
  Zap,
  Shield,
  Globe,
  Heart,
  UserPlus,
  SendHorizontal,
  MessageSquare,
} from 'lucide-react';
import { FAQ } from '../components/FAQ';

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <img
                src="/mellapaylogo.png"
                alt="Mellapay Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold text-gray-900">Mellapay</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#benefits"
                className="text-gray-600 hover:text-brand-green"
              >
                Benefits
              </a>
              <a
                href="#process"
                className="text-gray-600 hover:text-brand-green"
              >
                How It Works
              </a>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-brand-green"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#benefits"
                className="block px-3 py-2 text-gray-600 hover:text-brand-green"
              >
                Benefits
              </a>
              <a
                href="#process"
                className="block px-3 py-2 text-gray-600 hover:text-brand-green"
              >
                How It Works
              </a>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-brand-green"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 brand-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Where Your Money Meets Home{' '}
              <span className="brand-gradient-text">with Mellapay</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Zero fees. Competitive exchange rates. Transfers complete in
              seconds.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From 42 countries to Ethiopia—fast, secure, and hassle-free.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Mellapay?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 brand-gradient rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Transfers</h3>
              <p className="text-gray-600">
                Send funds to Ethiopia in seconds with our efficient in-house
                processing system.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 brand-gradient rounded-lg flex items-center justify-center mb-6">
                <Banknote className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">
                Enjoy zero transfer fees and transparent exchange rates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 brand-gradient rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Payment Options
              </h3>
              <p className="text-gray-600">
                Pay using debit/credit cards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 brand-gradient rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Send Money from 42 countries to Ethiopia.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 brand-gradient rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Partners</h3>
              <p className="text-gray-600">
                Seamless transfers to major Ethiopian banks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 brand-gradient rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enhanced with biometric security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <UserPlus className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Create your account with your mobile number or email.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verify</h3>
              <p className="text-gray-600">
                Complete a quick identity verification process.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <SendHorizontal className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transfer</h3>
              <p className="text-gray-600">
                Start sending money to Ethiopia instantly from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Download the Mellapay App</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience convenience on the go.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#"
              className="transition-opacity hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"
                alt="Download on the App Store"
                className="h-12 w-auto"
              />
            </a>
            <a
              href="#"
              className="transition-opacity hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Assistance?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help. Visit our Help Center or contact
            us directly for any inquiries.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 brand-gradient text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <MessageSquare className="h-5 w-5" />
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FAQ />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/mellapaylogo.png"
                  alt="Mellapay Logo"
                  className="h-8 w-auto"
                />
                <span className="text-xl font-semibold">Mellapay</span>
              </div>
              <p className="text-gray-400">
                Making cross-border payments simple, fast, and secure.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-brand-yellow">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-brand-yellow">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-brand-yellow">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-400 hover:text-brand-yellow"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-brand-yellow">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-brand-yellow">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Addis Ababa, Ethiopia</li>
                <li className="text-gray-400">support@mellapay.com</li>
                <li className="text-gray-400">+251986999991</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mellapay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}