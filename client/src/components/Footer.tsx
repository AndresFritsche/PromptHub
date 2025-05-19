const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-400 text-sm py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-lg font-semibold mb-2">PromptHub</h4>
            <p>
              Accelerate development with high-quality prompt generation for AI
              models.
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-2">Resources</h5>
            <ul className="space-y-1">
              <li>
                <a href="/docs" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-2">Company</h5>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-2">Stay Connected</h5>
            <p>Subscribe to updates and tips on prompt engineering.</p>
            <form className="mt-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Andres Fritsche. All rights
          reserved.
        </div>
      </footer>
    </>
  );
};
export default Footer;
