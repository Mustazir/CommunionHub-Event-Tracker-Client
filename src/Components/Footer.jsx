import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <img src="/logo.png" alt="Bootstrap Brain" className="h-6" />
            <span className="text-lg font-bold">CommunionHub</span>
          </div>
  
          <nav className="mb-4">
            <ul className="flex justify-center space-x-6 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Event</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
  
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-gray-900"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-900"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-gray-900"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-900"><i className="fab fa-linkedin"></i></a>
          </div>
  
          <p className="text-sm">
            © 2024. All Rights Reserved.
          </p>
          <p className="text-sm">
            Built by BootstrapBrain with <span className="text-blue-500">❤️</span>
          </p>
        </div>
      </footer>
    );
};

export default Footer;