const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} Kapil Dev Chaudhary. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#About" className="hover:text-blue-400 text-sm">
            About
          </a>
          <a href="#Courses" className="hover:text-blue-400 text-sm">
            Courses
          </a>
          <a href="#Programs" className="hover:text-blue-400 text-sm">
            Programs
          </a>
          <a href="#Contact" className="hover:text-blue-400 text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
