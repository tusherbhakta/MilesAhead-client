import { FaUsers, FaRocket, FaLightbulb } from "react-icons/fa";
import Lottie from "lottie-react";
import teamAnimation from "../../assets/team.json";
import OurMission from "../../components/Home/OurMission";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="max-w-5xl bg-white shadow-lg rounded-3xl p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800">
            About <span className="text-blue-600">Miles Ahead</span>
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

      <div className=" mt-10 max-w-5xl bg-white shadow-lg rounded-3xl p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
      <OurMission/>
      </div>
      

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Join Our Journey!</h2>
        <p className="text-gray-600 mt-2">
          Be a part of something great! Collaborate, innovate, and achieve with us.
        </p>
        <div className="mt-4">
          <a
            href="mailto:your-email@example.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
