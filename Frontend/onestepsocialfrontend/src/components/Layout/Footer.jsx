

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#about-us" className="text-lg hover:text-gray-400">About Us</a>
            <a href="#contact-us" className="text-lg hover:text-gray-400">Contact Us</a>
            <a href="#help" className="text-lg hover:text-gray-400">Help</a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved <div className="text-gradient">@Marcos</div>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer