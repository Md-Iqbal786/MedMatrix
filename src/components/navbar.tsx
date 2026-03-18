import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50  border-b bg-green-100 backdrop-blur-md shadow-md border-slate-200">
        
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20  flex items-center justify-between">
          
          <div className="flex items-center gap-0.5 bg-green-100p-3 rounded-2xl ">
            <img src="/logo.jpg" alt="logo"  className="h-15 bg-cover mr-2 rounded-full pr-0 mr-0"/>
            <span className="text-2xl font-bold text-[#16A34A]">
              MediMatrix
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xl font-bold">
            <Link
              className="text-green-800 transition-colors"
              href="#"
            >
              Features
            </Link>
            <Link
              className="text-green-800 transition-colors"
              href="#"
            >
              How it Works
            </Link>
            <Link
              className="text-green-800 transition-colors"
              href="#"
            >
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="px-5 py-2  font-semibold bg-green-200 text-green-800 hover:bg-green-400 rounded-lg transition-all"
              data-purpose="login-button"
            >
              Login
            </button>
            <button
              className="px-6 py-2.5  text-white-900 bg-green-800 font-semibold rounded-lg hover:bg-green-700 shadow-md hover:shadow-lg transition-all"
              data-purpose="get-started-nav"
            >
              Get Started
            </button>
          </div>
        </nav>
      </header>
  );
}