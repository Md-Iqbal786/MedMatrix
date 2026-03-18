export default function Footer(){
    return(
        <footer className="bg-slate-900 text-slate-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div
                className="flex items-center gap-2 mb-6"
                data-purpose="footer-logo"
              >
                <span className="text-xl font-bold text-white">MediMatrix</span>
              </div>
              <p className="text-sm leading-relaxed">
                Revolutionizing patient care through technology. We make
                healthcare management accessible to everyone, everywhere.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Appointments
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Telemedicine
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Security
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Partnerships
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    HIPAA Compliance
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2023 MedCare Technologies Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-white transition-colors" href="#">
                Twitter
              </a>
              <a className="hover:text-white transition-colors" href="#">
                LinkedIn
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}