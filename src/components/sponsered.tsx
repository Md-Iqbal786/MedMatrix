export default function Sponser() {
  const Data = [
    {
      id: 1,
      name: "Apollo Hospitals",
      logo: "https://res.cloudinary.com/dipid77bz/image/upload/v1773914959/s1_bwqbbr.png",
      website: "https://www.apollohospitals.com",
      tier: "Platinum",
    },
    {
      id: 2,
      name: "Fortis Healthcare",
      logo: "https://res.cloudinary.com/dipid77bz/image/upload/v1773914959/s1_bwqbbr.png",
      website: "https://www.fortishealthcare.com",
      tier: "Platinum",
    },
    {
      id: 3,
      name: "Max Healthcare",
      logo: "https://res.cloudinary.com/dipid77bz/image/upload/v1773914959/s1_bwqbbr.png",
      website: "https://www.maxhealthcare.in",
      tier: "Gold",
    },
    {
      id: 4,
      name: "Cipla",
      logo: "https://res.cloudinary.com/dipid77bz/image/upload/v1773914959/s1_bwqbbr.png",
      website: "https://www.cipla.com",
      tier: "Gold",
    },
    {
      id: 5,
      name: "Sun Pharma",
      logo: "https://res.cloudinary.com/dipid77bz/image/upload/v1773914959/s1_bwqbbr.png",
      website: "https://www.sunpharma.com",
      tier: "Gold",
    },
    {
      id: 6,
      name: "Dr. Reddy's",
      logo: "https://res.cloudinary.com/dipid77bz/image/upload/v1773914959/s1_bwqbbr.png",
      website: "https://www.drreddys.com",
      tier: "Silver",
    },
    {
      id: 7,
      name: "Lupin",
      logo: "https://res.cloudinary.com/dipid77bz/image/upload/v1773914959/s1_bwqbbr.png",
      website: "https://www.lupin.com",
      tier: "Silver",
    },
    {
      id: 8,
      name: "Aster DM Healthcare",
      logo: "https://res.cloudinary.com/dipid77bz/image/upload/v1773914959/s1_bwqbbr.png",
      website: "https://www.asterdmhealthcare.com",
      tier: "Silver",
    },
    {
      id: 9,
      name: "Medanta",
      logo: "https://res.cloudinary.com/dipid77bz/image/upload/v1773914959/s1_bwqbbr.png",
      website: "https://www.medanta.org",
      tier: "Bronze",
    },
    {
      id: 10,
      name: "Narayana Health",
      logo: "https://res.cloudinary.com/dipid77bz/image/upload/v1773914959/s1_bwqbbr.png",
      website: "https://www.narayanahealth.org",
      tier: "Bronze",
    },
    {
      id: 11,
      name: "Pfizer",
      logo: "https://res.cloudinary.com/dipid77bz/image/upload/v1773914959/s1_bwqbbr.png",
      website: "https://www.pfizer.com",
      tier: "Bronze",
    },
    {
      id: 12,
      name: "Johnson & Johnson",
      logo: "https://res.cloudinary.com/dipid77bz/image/upload/v1773914959/s1_bwqbbr.png",
      website: "https://www.jnj.com",
      tier: "Bronze",
    },
  ];

  const Sponsers = [...Data, ...Data, ...Data, ...Data , ...Data];
  return (
    <section className="py-16 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-8">
          Empowering 1,000+ Clinics Nationwide
        </h2>
        <div className="flex gap-12 scroll-animation w-max">
          {Sponsers.map((sponser, idx) => (
            <div key={idx} className="flex items-center gap-3 px-3">
              <img
                src={sponser.logo}
                className="w-14 h-14 object-cover rounded-full p-0.5 bg-white"
              />
              <span className="text-white text-2xl font-bold italic tracking-wider whitespace-nowrap">
                {sponser.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            
            100% { transform: translateX(-50%); }
          }

          .scroll-animation {
            animation: scroll 50s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
