// import SectionTitle from "../shared/SectionTitle";

// const WhyJoinMarathon = () => {
//   const benefits = [
//     {
//       icon: "🏃‍♂️",
//       title: "Stay Fit and Healthy",
//       description:
//         "Participating in marathons is a great way to stay active and improve your overall fitness.",
//     },
//     {
//       icon: "🌍",
//       title: "Support Great Causes",
//       description:
//         "Many marathons raise funds for charities, allowing you to contribute to meaningful social causes.",
//     },
//     {
//       icon: "👨‍👩‍👧‍👦",
//       title: "Build Community",
//       description:
//         "Connect with like-minded individuals and enjoy the camaraderie of marathon enthusiasts.",
//     },
//   ];

//   return (
//     <section className="bg-gray-100 dark:bg-gray-900 py-12 mt-10">
//       <div className="max-w-7xl mx-auto px-4">
//       <SectionTitle title="Why Join a Marathon?" subtitle="Discover the Benefits of Participating in Marathons" />
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-12">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className="bg-lime-100 border border-lime-800 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
//             >
//               <div className="text-4xl mb-4">{benefit.icon}</div>
//               <h3 className="text-xl font-semibold dark:text-white mb-2">
//                 {benefit.title}
//               </h3>
//               <p className="text-sm dark:text-gray-300">{benefit.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyJoinMarathon;

import SectionTitle from "../shared/SectionTitle";

const WhyJoinMarathon = () => {
  const benefits = [
    {
      icon: "⚖️",
      title: "Achieve Personal Goals",
      description:
        "Set and accomplish new milestones, pushing your limits and achieving personal growth.",
    },
    {
      icon: "🏆",
      title: "Earn Recognition",
      description:
        "Celebrate your efforts with medals, certificates, and the pride of completing a marathon.",
    },
    {
      icon: "🌟",
      title: "Inspire Others",
      description:
        "Be a role model for friends and family, motivating them to lead an active lifestyle.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-lime-50 to-lime-100 dark:from-gray-800 dark:to-gray-900 py-16 pt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionTitle 
          title="Why Join a Marathon?" 
          subtitle="Discover the Benefits of Participating in Marathons" 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105 flex flex-col items-center"
            >
              <div className="text-5xl text-blue-500 dark:text-blue-400 mb-6 flex justify-center">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 text-center">
                {benefit.description}
              </p>
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinMarathon;

// import SectionTitle from "../shared/SectionTitle";
// import { Player } from "lottie-react";
// import fitnessAnimation from "../animations/fitness.json";
// import recognitionAnimation from "../animations/recognition.json";
// import inspirationAnimation from "../animations/inspiration.json";

// const WhyJoinMarathon = () => {
//   const benefits = [
//     {
//       animation: fitnessAnimation,
//       title: "Achieve Personal Goals",
//       description:
//         "Set and accomplish new milestones, pushing your limits and achieving personal growth.",
//     },
//     {
//       animation: recognitionAnimation,
//       title: "Earn Recognition",
//       description:
//         "Celebrate your efforts with medals, certificates, and the pride of completing a marathon.",
//     },
//     {
//       animation: inspirationAnimation,
//       title: "Inspire Others",
//       description:
//         "Be a role model for friends and family, motivating them to lead an active lifestyle.",
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-16 mt-12">
//       <div className="max-w-6xl mx-auto px-6 md:px-8">
//         <SectionTitle
//           title="Why Join a Marathon?"
//           subtitle="Discover the Benefits of Participating in Marathons"
//         />
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-8 transition-transform transform hover:scale-105 flex flex-col items-center"
//             >
//               <Player
//                 autoplay
//                 loop
//                 src={benefit.animation}
//                 className="h-24 w-24 mb-6"
//               />
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
//                 {benefit.title}
//               </h3>
//               <p className="text-base text-gray-600 dark:text-gray-300 text-center">
//                 {benefit.description}
//               </p>
//               <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyJoinMarathon;

