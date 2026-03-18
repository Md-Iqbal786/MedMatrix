import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import path from "path";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-[#F0FDF4] h-screen w-full ">
      <Navbar></Navbar>
      {/* <main>
        <section
          className="relative bg-white overflow-hidden"
          data-purpose="hero-area"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Your Health,{" "}
                <span className="text-medcare-primary">Simplified.</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 max-w-lg">
                Experience the future of healthcare management. Secure
                appointments, manage records, and access personalized care all
                from one powerful platform.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-medcare-primary text-white text-lg font-bold rounded-xl hover:bg-blue-800 shadow-xl transition-all">
                  Book Your First Appointment
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 text-lg font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  <span className="material-icons">medical_services</span>
                  Watch Demo
                </button>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  <img
                    alt="Patient 1"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr0-CwfzEs9KRCjbSFnawTsHqTDGbaGuwjToEt9SU8bmtgMw18BkejbX5_KZNOcMKi7DJQyZpQcDAfFkUnGyPYgcUMDUBzjyJSzSeZkKbgleVOEFyOLvS-NeNzoa--m2k_J63lW1mFfZZtVzD32mcR_d8BaFe4cK2ZYmW48kydxxfqpjgE382YQGWMFDk1D0n-RdwxK4bNMCOanmHCN0B_mvIgR6zGxZ_iMysR6kZ0lfW5RSk0f0i58XFKbA8Bm0QtsCVnlA77Eng"
                  />
                  <img
                    alt="Patient 2"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALnKwQbzEr2UKwEz4bsuXHiQj0ywszOGQJexFCYW2ghuMAbifxaWpLSJ3EXLSQ06PfS4XljuTUVHbLti2XRFR71Nu7fINoBGFifyvB-gklayA7-fEIoW2ZDJ_q3VqSxTO7QORmMnzfuC1jckN489c7Xnds8nk7y2wTjpoajUivfGtjbuGxx7lNkzq_w_mO0yjP_L9fm0d-aUYa0rxQcmprhzZ3BbjqkJhimt3whBak4x4Va-hKCQC9HQOrVao8lg826aSEKfEB7u4"
                  />
                  <img
                    alt="Patient 3"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz7pMenpxUv4TnVGI6wVf17EXTgd1tLbKRWMHONL7vANjoKpeKxEwuWQUgzwllvEwsc6Xeg-KfnNek7ft4AXo8HUMhfGHdW4JQpqFP-eOp-fQC0ykIKOLE6D4L1eDA_kWc2HDOESPqezghUqsP_1xTgnVbqrWP90izcU-zd6McEU1k9xAdk9i7hhsDhi6Y8HLT2uKzeS2ExiicG3NpnXzIs2MGqt7LnNZhZWSD1oJSfUFG-6tqlb2zpCRJqK-874o_u90PKjoDm9o"
                  />
                </div>
                <p className="text-sm text-slate-500">
                  Trusted by over{" "}
                  <span className="font-bold text-slate-900">50,000+</span>{" "}
                  users worldwide.
                </p>
              </div>
            </div>
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <img
                alt="Medical Professional using MedCare"
                className="relative rounded-2xl shadow-2xl border border-slate-100 object-cover w-full aspect-[4/3]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm0gylmXkRrL5lPKkfqrio-7ILzCXZSfuWt-CN95ZGr330Mxfj6Ju20LPnFSmdPxqgEO9LlRcG3GxhfA_RLc_rlcgQgjDSI_6zMrqMzll3NSL_-Rz_Uy9I5b-G-KrBpu4do0q_fbXRmxYlDk5SvoZ2OXi3LjsKwgah0upVssEpzVKzKPRt8oUBsXHmuNRIHdzyApyx8UVMPxNf1GyjO06UyGC28IKp4S4LCpRwaq3X5caKOoU--S2inwqf35OdbtUxNmqx8oGKcbo"
              />
            </div>
          </div>
        </section>

        <section
          className="py-24 bg-slate-50"
          data-purpose="features-grid"
          id="features"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
                Core Features
              </h2>
              <p className="text-4xl font-bold text-slate-900">
                Everything you need to manage your health journey
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              <div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                data-purpose="feature-card"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-medcare-primary mb-6">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Online Appointments</h3>
                <p className="text-slate-600 leading-relaxed">
                  Skip the phone calls. Book, reschedule, or cancel your medical
                  visits in seconds with our intuitive calendar integration.
                </p>
              </div>

              <div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                data-purpose="feature-card"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Secure Medical Records
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Your health history is encrypted and always accessible. Share
                  your records securely with specialists whenever you need.
                </p>
              </div>

              <div
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                data-purpose="feature-card"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Clinic Analytics</h3>
                <p className="text-slate-600 leading-relaxed">
                  Track your health trends over time. Monitor vitals, lab
                  results, and wellness metrics with clean, visual dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-medcare-primary overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Empowering 1,000+ Clinics Nationwide
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <span className="text-white text-2xl font-bold italic tracking-wider">
                HEALTHCARE+
              </span>
              <span className="text-white text-2xl font-bold italic tracking-wider">
                UNITY MED
              </span>
              <span className="text-white text-2xl font-bold italic tracking-wider">
                VITALITY
              </span>
              <span className="text-white text-2xl font-bold italic tracking-wider">
                PULSE NETWORK
              </span>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="bg-blue-50 rounded-3xl p-12 text-center border border-blue-100"
              data-purpose="final-cta"
            >
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                Ready to prioritize your health?
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                Join MedCare today and experience a seamless, secure, and
                professional way to handle all your medical needs. It takes less
                than 2 minutes to set up.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-10 py-4 bg-medcare-primary text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg">
                  Create Your Free Account
                </button>
                <button className="px-10 py-4 bg-white text-medcare-primary border border-medcare-primary font-bold rounded-xl hover:bg-blue-50 transition-all">
                  Contact Sales
                </button>
              </div>
              <p className="mt-6 text-sm text-slate-500 italic">
                No credit card required. HIPAA Compliant.
              </p>
            </div>
          </div>
        </section>
      </main> */}
      <Footer></Footer>
      
    </div>
  );
}
