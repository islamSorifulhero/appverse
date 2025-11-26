import React from 'react';

const AppsInformation = () => {
    return (
        <div className="min-h-screen bg-cyan-900 text-white px-6 py-10 my-10 rounded-2xl">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 animate__animated animate__pulse animate__infinite">
          📱 Good and Bad Sides of Apps
        </h1>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">✅ Good Sides of Apps</h2>
          <div className="space-y-3 text-lg leading-relaxed">
            <p>1. <span className="text-green-300 font-medium">Easy access to information</span> – you can learn, shop, or communicate anytime, anywhere.</p>
            <p>2. <span className="text-green-300 font-medium">Saves time</span> – tasks like paying bills or ordering food take only seconds.</p>
            <p>3. <span className="text-green-300 font-medium">Improves learning</span> – educational apps help students study easily (e.g., 10 Minute School, Duolingo).</p>
            <p>4. <span className="text-green-300 font-medium">Entertainment</span> – games, movies, and music apps provide fun and relaxation.</p>
            <p>5. <span className="text-green-300 font-medium">Communication</span> – apps like WhatsApp, Messenger, and Zoom keep people connected globally.</p>
            <p>6. <span className="text-green-300 font-medium">Business and productivity</span> – apps help manage work and finances easily.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-red-400 mb-4">❌ Bad Sides of Apps</h2>
          <div className="space-y-3 text-lg leading-relaxed">
            <p>1. <span className="text-red-300 font-medium">Addiction and time waste</span> – overusing games or social media reduces focus and study time.</p>
            <p>2. <span className="text-red-300 font-medium">Privacy risks</span> – some apps collect personal data without permission.</p>
            <p>3. <span className="text-red-300 font-medium">Security issues</span> – fake or unsafe apps can steal passwords or money.</p>
            <p>4. <span className="text-red-300 font-medium">Health problems</span> – too much screen time causes eye strain and sleep loss.</p>
            <p>5. <span className="text-red-300 font-medium">Storage and battery drain</span> – too many apps slow down the phone.</p>
            <p>6. <span className="text-red-300 font-medium">Distraction</span> – frequent notifications disturb concentration.</p>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-10">
          🌱 Use apps wisely — make technology your friend, not your distraction.
        </p>
      </div>
    </div>
    );
};

export default AppsInformation;