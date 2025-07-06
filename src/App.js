import React from 'react';

import bridge from './Components/Assets/bridge.svg'
import towerBridge from './Components/Assets/towerBridge.svg'
import bg from './Components/Assets/headerBg.svg'

// Import team member images
import levonNazinyan from './Components/Assets/photo_2025-07-06_03-39-14.jpg'; // Assuming this is Levon
import vahagnGasparyan from './Components/Assets/photo_2025-07-06_03-39-20.jpg'; // Assuming this is Vahagn
import vargdesZaqaryan from './Components/Assets/photo_2025-07-06_03-39-27.jpg'; // Assuming this is Vargdes
import gagikMartirosyan from './Components/Assets/photo_2025-07-06_03-39-35.jpg'; // Assuming this is Gagik


function App() {
  const teamMembers = [
    { name: 'Vahagn Gasparyan', role: 'Team lead. Full Stack, ML Engineer', image: levonNazinyan },
    { name: 'Levon Nazinyan', role: 'UI Designer', image: vahagnGasparyan },
    { name: 'Gagik Martirosyan', role: 'Designer', image: vargdesZaqaryan },
    { name: 'Vardges Zaqaryan', role: 'Back-End, ML Engineer', image: gagikMartirosyan },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-white/60 shadow-lg p-4 fixed w-full z-10 rounded-lg border border-white/30 px-8 py-4" style={{ backdropFilter: 'blur(12px)' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Solara AI</div> {/* Updated company name */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            {/* Updated About Us link to scroll to #our-team */}
            <a href="#future-plans" className="text-gray-600 hover:text-gray-900">Our Future Plans</a>
            <a href="#our-team" className="text-gray-600 hover:text-gray-900">Our Team</a>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Demo of Solara AI
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-0 flex items-center justify-center h-full text-white text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Discover The Magic In Every Destination With Us!
            </h1>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">
              Start Now
            </button>
          </div>
        </div>
      </header>

      {/* Dive Into The Beauty Of The World Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Dive Into The Beauty Of The World
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 lg:w-1/3">
              <img
                src={bridge}
                alt="Los Angeles"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">Los Angeles</h3>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 lg:w-1/3">
              <img
                src={towerBridge}
                alt="London"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">London</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Future Plans Section */}
      <section id='future-plans' className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Future Plans</h2>
          <div className="relative flex flex-col items-center">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-400 hidden md:block"></div>
            {/* Arrow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 hidden md:block">
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a.75.75 0 01-.75-.75V4.66l-2.22 2.22a.75.75 0 11-1.06-1.06l3.5-3.5a.75.75 0 011.06 0l3.5 3.5a.75.75 0 01-1.06 1.06L10.75 4.66V17.25a.75.75 0 01-.75.75z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {/* Plan 1: Software Investment Plan */}
              <div className="bg-blue-700 p-6 rounded-lg shadow-lg md:col-start-1 md:text-right">
                <h3 className="text-2xl font-semibold mb-2">Software Investment Plan</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Identify and invest in cutting-edge software solutions.</li>
                  <li>Enhance existing platforms for improved user experience.</li>
                  <li>Integrate new technologies to expand service offerings.</li>
                  <li>Focus on scalable and secure software infrastructure.</li>
                  <li>Continuous research and development to stay ahead.</li>
                </ul>
              </div>
              <div className="md:col-start-2"></div> {/* Spacer for layout */}

              {/* Plan 2: Advanced API Integration */}
              <div className="md:col-start-1 md:text-right"></div> {/* Spacer for layout */}
              <div className="bg-blue-700 p-6 rounded-lg shadow-lg md:col-start-2">
                <h3 className="text-2xl font-semibold mb-2">Advanced API Integration</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Integrate with leading travel and hospitality APIs.</li>
                  <li>Streamline data exchange for real-time updates.</li>
                  <li>Enhance connectivity with global partners.</li>
                  <li>Develop robust API documentation for developers.</li>
                  <li>Ensure seamless and secure API communication.</li>
                </ul>
              </div>

              {/* Plan 3: Scaling Program */}
              <div className="bg-blue-700 p-6 rounded-lg shadow-lg md:col-start-1 md:text-right">
                <h3 className="text-2xl font-semibold mb-2">Scaling Program</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Expand operational capacity to meet growing demand.</li>
                  <li>Optimize infrastructure for high traffic loads.</li>
                  <li>Implement automated deployment pipelines for global reach.</li>
                  <li>Recruit and train a larger, skilled workforce.</li>
                  <li>Leverage data to guide strategic growth initiatives.</li>
                </ul>
              </div>
              <div className="md:col-start-2"></div> {/* Spacer for layout */}

              {/* Plan 4: Program Development */}
              <div className="md:col-start-1 md:text-right"></div> {/* Spacer for layout */}
              <div className="bg-blue-700 p-6 rounded-lg shadow-lg md:col-start-2">
                <h3 className="text-2xl font-semibold mb-2">Program Development</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>We build customized travel solutions for businesses.</li>
                  <li>Develop new features based on user feedback.</li>
                  <li>Iterate on existing programs for continuous improvement.</li>
                  <li>Analyze data to identify new opportunities.</li>
                  <li>Collaborate with experts to ensure success.</li>
                </ul>
              </div>

              {/* Plan 5: Cooperation */}
              <div className="bg-blue-700 p-6 rounded-lg shadow-lg md:col-start-1 md:text-right">
                <h3 className="text-2xl font-semibold mb-2">Cooperation</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>We forge strategic partnerships with key industry players.</li>
                  <li>Participate in joint ventures and collaborative projects.</li>
                  <li>Share resources and expertise for mutual benefit.</li>
                  <li>Promote cross-cultural understanding and exchange.</li>
                  <li>Contribute to sustainable tourism initiatives.</li>
                </ul>
              </div>
              <div className="md:col-start-2"></div> {/* Spacer for layout */}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      {/* Added id="our-team" for smooth scrolling */}
      <section id="our-team" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
