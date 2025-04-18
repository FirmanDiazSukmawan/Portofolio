import React from 'react';

const Experience = () => {
    const experiences = [
        {
          role: 'Frontend Web & Mobile Developer',
          company: 'PT. Herca Cipta Dermal Perdana',
          period: 'Dec 2023 - Feb 2025',
         
          descriptionPoints: [
            'Develop Front End Web Hercaweb',
            'Develop the Herca HRIS Mobile app from scratch to completion using React Native.',
            'Add notification features using Firebase & push notifications.',
            'Add & improve several features on the Herca HRIS Website using Next JS.',
            'Publish app to the Google Play Store & App Store.',
            'Develop the Hercaweb website as a key platform where customers can easily access product information, ask questions, and place orders efficiently.'
          ],
        },
        {
            role: 'Marketing Team',
            company: 'PT.Stake GP',
            period: 'Feb 2019 - Dec 2022',
          
            descriptionPoints: [
              'Preparation of Sales and Marketing Strategy using Tableau',
              'Responsible for calculating total monthly expenses and income',
              'Conduct price research to suit the market in order to compete with competitors',
              'Carrying out transactions of more than 500+ sales and purchases every day',
              'Create ads to promote the company and minimize up to 20% ads costs',
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
    <p className="text-gray-300 text-[16px] italic">{exp.company} — {exp.period}</p>
    
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
