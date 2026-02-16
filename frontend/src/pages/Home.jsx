import { Link } from 'react-router-dom';
import Container from '../components/Container.jsx';
import MarketPrice from '../components/MarketPrice.jsx';
import DistrictHeatmap from '../components/DistrictHeatmap.jsx';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">🌴 Coconut Direct</h1>
            <p className="text-xl mb-8">
              Remove middlemen. Connect Tamil Nadu farmers directly to buyers. 
              Transparent pricing. Fair trade. Zero commission exploitation.
            </p>
            <div className="flex gap-4">
              <Link
                to="/register"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
              <Link
                to="/products"
                className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
              >
                Browse Listings
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <Container>
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Coconut Direct?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Direct Connection</h3>
              <p className="text-gray-600">No middlemen. Farmers connect directly with buyers for fair prices.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">Live market prices from all districts. Know the real value.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3">District-Based</h3>
              <p className="text-gray-600">Find suppliers and buyers in your district. Local trade made easy.</p>
            </div>
          </div>

          {/* Market Data Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <MarketPrice />
            <DistrictHeatmap />
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-gray-600 mb-8">Join thousands of farmers and buyers on Coconut Direct</p>
            <Link
              to="/register"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition inline-block"
            >
              Register Now
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
