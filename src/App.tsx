import React from 'react';
import { Brain, Lightbulb, Shield, TrendingUp, Users, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gray-50">
        <nav className="absolute top-0 w-full z-10 px-6 py-4 bg-[#1a365d]">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-teal-400" />
              <span className="text-2xl font-bold text-white">IdeaNest</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-200 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-200 hover:text-white transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-200 hover:text-white transition-colors">Pricing</a>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-gray-200 hover:text-white transition-colors">Log in</button>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        <div className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-[#1a365d] mb-6">
                Where Great Ideas Find Their Home
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Connect with organizations seeking innovative solutions. Share your ideas, solve challenges, and get rewarded for your creativity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-lg">
                  Submit Your Idea
                </button>
                <button className="px-8 py-4 bg-white text-[#1a365d] border-2 border-[#1a365d] rounded-lg hover:bg-gray-50 transition-colors text-lg">
                  Post a Challenge
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white" id="features">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1a365d]">Why Choose IdeaNest?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-amber-500" />}
              title="IP Protection"
              description="Secure idea submission with blockchain timestamping and automated NDAs."
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-amber-500" />}
              title="Fair Compensation"
              description="Performance-based commission model ensuring fair rewards for great ideas."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-amber-500" />}
              title="Expert Matching"
              description="AI-powered matching connects ideas with the right organizations."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gray-50" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1a365d]">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#1a365d]">For Contributors</h3>
              <StepCard
                number="1"
                title="Submit Your Idea"
                description="Share your innovative solution through our structured submission process."
              />
              <StepCard
                number="2"
                title="Get Matched"
                description="Our AI matches your idea with organizations seeking similar solutions."
              />
              <StepCard
                number="3"
                title="Earn Rewards"
                description="Receive compensation based on your idea's implementation success."
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#1a365d]">For Organizations</h3>
              <StepCard
                number="1"
                title="Post a Challenge"
                description="Define your problem and set rewards for successful solutions."
              />
              <StepCard
                number="2"
                title="Review Solutions"
                description="Evaluate submitted ideas and select the best fit for your needs."
              />
              <StepCard
                number="3"
                title="Track Success"
                description="Measure and report implementation results through our analytics tools."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1a365d]">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Contributor"
              price="Free"
              features={[
                "Submit up to 5 ideas/month",
                "Basic idea analytics",
                "Standard commission rates",
                "Community support"
              ]}
            />
            <PricingCard
              title="Pro Contributor"
              price="$30"
              period="/month"
              featured={true}
              features={[
                "Unlimited idea submissions",
                "Advanced analytics",
                "Priority matching",
                "Dedicated support",
                "Reduced commission rates"
              ]}
            />
            <PricingCard
              title="Organization"
              price="$500"
              period="/month"
              features={[
                "Post unlimited challenges",
                "AI-driven trend analysis",
                "Priority access to top contributors",
                "Custom API integration",
                "24/7 premium support"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a365d] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-6 h-6 text-teal-400" />
              <span className="text-xl font-bold">IdeaNest</span>
            </div>
            <p className="text-gray-300">Connecting innovative minds with organizations seeking solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#1a365d]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1 text-[#1a365d]">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({ title, price, period = "", features, featured = false }: { 
  title: string; 
  price: string; 
  period?: string; 
  features: string[];
  featured?: boolean;
}) {
  return (
    <div className={`p-8 rounded-lg ${featured ? 'bg-teal-500 text-white' : 'bg-white border border-gray-200'} shadow-lg relative`}>
      {featured && (
        <div className="absolute top-0 right-0 bg-amber-400 text-[#1a365d] px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
          Popular
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-[#1a365d]">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className={featured ? 'text-white' : 'text-gray-600'}>{period}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Zap className={`w-5 h-5 ${featured ? 'text-white' : 'text-amber-500'}`} />
            <span className={featured ? 'text-white' : 'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 rounded-lg transition-colors ${
        featured 
          ? 'bg-white text-[#1a365d] hover:bg-gray-50' 
          : 'bg-teal-500 text-white hover:bg-teal-600'
      }`}>
        Get Started
      </button>
    </div>
  );
}

export default App;