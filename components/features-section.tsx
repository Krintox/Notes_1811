// components/features-section.tsx (Client Component)
'use client';

const FEATURE_IMAGE_1 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const FEATURE_IMAGE_2 = "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Powerful Features
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={FEATURE_IMAGE_1} 
                alt="AI Summarization" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-400">AI-Powered Summaries</h3>
            <p className="text-gray-300 mb-6">
              Let our Gemini AI analyze your notes and extract key points with intelligent summarization technology.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                <span>Instant note summarization</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                <span>Key point extraction</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                <span>Context-aware analysis</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={FEATURE_IMAGE_2} 
                alt="Secure Notes" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          <div className="md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-primary-400">Secure & Accessible</h3>
            <p className="text-gray-300 mb-6">
              Your notes are protected with enterprise-grade security while remaining accessible anywhere.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                <span>End-to-end encryption</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                <span>Google & Email login</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                <span>Cross-device sync</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}