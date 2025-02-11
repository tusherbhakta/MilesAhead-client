const AboutUs = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Us</h1>
          <p className="text-gray-600 text-lg text-center mb-6">
            Welcome to <span className="font-semibold text-blue-600">Miles Ahead</span>, where we believe in pushing boundaries, 
            embracing challenges, and striving for excellence in everything we do.
          </p>
  
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Who We Are</h2>
              <p className="text-gray-600 mt-2">
                At Miles Ahead, we are a team of passionate individuals dedicated to innovation and progress. Whether it’s 
                technology, business, or education, our goal is to create a platform that empowers and inspires individuals to 
                move forward—one step at a time.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
              <p className="text-gray-600 mt-2">
                We aim to provide exceptional services and solutions that help individuals and businesses achieve their goals. 
                With a strong focus on quality, integrity, and continuous improvement, we are committed to making a meaningful 
                impact in every project we undertake.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Why Choose Us?</h2>
              <ul className="text-gray-600 mt-2 list-disc pl-5 space-y-2">
                <li><span className="font-semibold text-blue-600">Innovation-Driven:</span> We stay ahead of the curve with modern solutions.</li>
                <li><span className="font-semibold text-blue-600">User-Centric Approach:</span> Your success is our priority.</li>
                <li><span className="font-semibold text-blue-600">Reliable & Transparent:</span> We value trust and long-term relationships.</li>
              </ul>
            </div>
          </div>
  
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">Join Us on This Journey!</h2>
            <p className="text-gray-600 mt-2">
              Miles Ahead is more than just a platform—it’s a vision for the future. Whether you’re here to learn, grow, or 
              collaborate, we welcome you to be a part of our journey.
            </p>
            <div className="mt-4">
              <p className="text-gray-700">📩 <strong>Contact Us:</strong> [Your Contact Email]</p>
              <p className="text-gray-700">🌐 <strong>Website:</strong> <a href="[Your Website URL]" className="text-blue-600 hover:underline">Visit Us</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  