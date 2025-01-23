import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/groovyWalk.json";
// import missionAnimation from "../../assets/marathon-mission.json"; // Replace with a relevant marathon-themed animation
import SectionTitle from "../shared/SectionTitle";
import run from '../../assets/run.png';
import { Link } from "react-router-dom";

const OurMission = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-lime-100 via-lime-200 to-lime-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <SectionTitle
        title={"Our Mission"}
        subtitle="Unite, Inspire, and Achieve Greatness Through Running"
      />
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="w-full max-w-lg relative">
            {/* <img src={run} alt="Runner" className="rounded-xl shadow-lg transform hover:scale-105 transition duration-500" /> */}
            <Lottie animationData={groovyWalkAnimation} />;
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lime-200 dark:to-gray-900 opacity-40 rounded-xl"></div>
          </div>
        </div>
        <div className="max-w-xl mx-auto lg:mx-0">
          <h3 className="text-4xl font-bold text-lime-800 dark:text-lime-400 mb-4">
            Run for a Cause, Run for Yourself
          </h3>
          <p className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">
            <Typewriter
              words={[
                "Inspire change, one step at a time.",
                "Celebrate health, unity, and determination.",
                "Cross the finish line together.",
              ]}
              loop={true} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </p>
          <p className="mt-6 text-gray-700 dark:text-gray-400 text-justify leading-relaxed">
            At MilesAhead, we believe in the transformative power of marathons.
            Our mission is to promote health, inspire community spirit, and
            support meaningful causes through running. Whether you're a seasoned
            runner or a first-time participant, every step you take brings us closer
            to creating a healthier, more connected world.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-400 text-justify leading-relaxed">
            Together, we can achieve greatness. Marathons are not just about
            crossing the finish line but also about building resilience, making
            memories, and fostering unity. Join our community and take strides
            toward a brighter, more active future.
          </p>
          <div className="mt-8 flex justify-start">
            <Link
              to={'/marathons'}
              className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-lime-600 to-lime-700 hover:from-lime-700 hover:to-lime-800 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:ring-4 focus:ring-lime-400 focus:outline-none"
            >
              Explore Marathons
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

