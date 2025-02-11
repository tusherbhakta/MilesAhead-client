import { FaUsers, FaRocket, FaLightbulb } from "react-icons/fa";
import Lottie from "lottie-react";
import teamAnimation from "../../assets/team.json";
import groovyWalkAnimation from "../../assets/groovyWalk.json";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="max-w-5xl bg-white shadow-lg rounded-3xl p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800">
            About <span className="text-lime-600">Miles Ahead</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            We are passionate innovators, dedicated to pushing boundaries and creating solutions that empower individuals
            and businesses. Our mission is to inspire, build, and make a lasting impact.
          </p>
        </div>
        <div className="md:w-1/2">
          <Lottie animationData={teamAnimation} loop={true} className="h-64" />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="bg-white shadow-md p-6 rounded-2xl flex flex-col items-center text-center">
          <FaUsers className="text-5xl text-blue-600" />
          <h2 className="text-xl font-semibold mt-4">Who We Are</h2>
          <p className="text-gray-600 mt-2">
            A team of visionaries, tech enthusiasts, and problem solvers striving for excellence.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-2xl flex flex-col items-center text-center">
          <FaRocket className="text-5xl text-green-500" />
          <h2 className="text-xl font-semibold mt-4">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            To revolutionize industries with cutting-edge solutions and user-centric experiences.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-2xl flex flex-col items-center text-center">
          <FaLightbulb className="text-5xl text-yellow-500" />
          <h2 className="text-xl font-semibold mt-4">Why Choose Us?</h2>
          <p className="text-gray-600 mt-2">
            Innovation, transparency, and a commitment to delivering the best results.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-800 mt-10 max-w-5xl shadow-lg rounded-3xl p-8">
        <h2 className="text-4xl font-bold text-center text-lime-800 dark:text-lime-400 mb-4">Our Mission</h2>
        <p className="text-center text-gray-600">Unite, Inspire, and Achieve Greatness Through Running</p>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Lottie animationData={groovyWalkAnimation} />
          </div>
          <div className="max-w-xl mx-auto pr-6 lg:mx-0">
            <h3 className="text-3xl font-bold text-lime-800 dark:text-lime-400 mb-4">
              Run for a Cause, Run for Yourself
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">
              <Typewriter
                words={[
                  "Inspire change, one step at a time.",
                  "Celebrate health, unity, and determination.",
                  "Cross the finish line together.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </p>
            <p className="mt-6 text-gray-700 dark:text-gray-400 text-justify leading-relaxed">
              At MilesAhead, we believe in the transformative power of marathons. Our mission is to promote health,
              inspire community spirit, and support meaningful causes through running. Whether you're a seasoned
              runner or a first-time participant, every step you take brings us closer to creating a healthier, more
              connected world.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-400 text-justify leading-relaxed">
              Together, we can achieve greatness. Marathons are not just about crossing the finish line but also about
              building resilience, making memories, and fostering unity. Join our community and take strides toward a
              brighter, more active future.
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

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Join Our Journey!</h2>
        <p className="text-gray-600 mt-2">
          Be a part of something great! Collaborate, innovate, and achieve with us.
        </p>
        <div className="my-4">
          <a
            href="mailto:milesahead@gmail.com"
            className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-lime-600 to-lime-700 hover:from-lime-700 hover:to-lime-800 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:ring-4 focus:ring-lime-400 focus:outline-none"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
