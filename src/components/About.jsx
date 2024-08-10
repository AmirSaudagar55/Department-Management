import React from 'react';

const About = () => {
  // Data for team members
  const teamMembers = [
    {
      name: "Marvin McKinney",
      role: "Founder",
      imageUrl: "https://pagedone.io/asset/uploads/1698649968.png"
    },
    {
      name: "Kathryn Murphy",
      role: "CTO",
      imageUrl: "https://pagedone.io/asset/uploads/1698650000.png"
    },
    {
      name: "Jerome Bell",
      role: "CMO",
      imageUrl: "https://pagedone.io/asset/uploads/1698659360.png"
    },
    {
      name: "Wade Warren",
      role: "CEO",
      imageUrl: "https://pagedone.io/asset/uploads/1698650109.png"
    }
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-6">Meet the brains</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full ">
          {teamMembers.map((member, index) => (
            <div key={index} className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img src={member.imageUrl} alt={member.name} className="w-28 h-28 rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600" />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">{member.name}</h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

