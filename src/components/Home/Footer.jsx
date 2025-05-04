// components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-primary text-white text-center py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm md:text-base font-semibold">
            &copy; {new Date().getFullYear()} GMS – All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  