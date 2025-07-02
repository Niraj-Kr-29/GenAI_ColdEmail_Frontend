import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500">SendSmart</h2>
          <p className="mt-2 text-slate-300">
            Smart. Fast. Reliable.
            <br />
            Your AI-powered cold email assistant.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-500 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li>
              <a href="/" className="hover:text-yellow-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-yellow-500 transition">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-yellow-500 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-500 mb-3">
            Connect
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li>
              Email:{" "}
              <a
                href=""
                className="hover:text-yellow-500"
              >
                support@sendsmart.ai
              </a>
            </li>
            <li>
              Twitter:{" "}
              <a
                href=""
                className="hover:text-yellow-500"
              >
                @sendsmart
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href=""
                className="hover:text-yellow-500"
              >
                SendSmart
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-700 pt-6 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} SendSmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
