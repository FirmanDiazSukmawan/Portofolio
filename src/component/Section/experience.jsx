import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Web & Mobile Developer",
      company: "PT. Herca Cipta Dermal Perdana",
      period: "Nov 2023 - Feb 2025",

      descriptionPoints: [
        "Built Herca HRIS from scratch using React Native until released on Play Store & App Store",
        "Performance optimization to reduce app load time",
        "Added & improved several features on Herca HRIS Website using Next JS",
        "Added Notification feature with Firebase to increase user interaction with the app",
        "Created Hercaweb website functioning as the main platform for customers to access product information, ask questions, and make orders efficiently",
      ],
    },
    {
      role: "Marketing Team",
      company: "PT.Stake GP",
      period: "Feb 2019 - Dec 2022",

      descriptionPoints: [
        "Preparation of Sales and Marketing Strategy using Tableau",
        "Responsible for calculating total monthly expenses and income",
        "Conduct price research to suit the market in order to compete with competitors",
        "Carrying out transactions of more than 500+ sales and purchases every day",
        "Create ads to promote the company and minimize up to 20% ads costs",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 px-4 lg:px-0">
      <h1 className="text-[#FBFBFB] lg:text-[28px] md:text-[25px] text-[20px] font-sora items-center justify-center">
        My Experience
      </h1>

      <div className="flex flex-col gap-5">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-4 border-[#FBFBFB]/50 pl-4">
            <h2 className="text-white text-[18px] font-semibold">{exp.role}</h2>
            <p className="text-gray-300 text-[16px] italic">
              {exp.company} — {exp.period}
            </p>

            <ul className="list-disc text-gray-400 text-[15px] ml-5 mt-1 space-y-1">
              {exp.descriptionPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
