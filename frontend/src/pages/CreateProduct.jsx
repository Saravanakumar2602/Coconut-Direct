import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const CreateProduct = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: 'Tender',
    quantity: '',
    pricePerUnit: '',
    harvestDate: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Listing created successfully!');
    navigate('/farmer');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Add New Listing</h1>
            <p className="text-gray-600 mb-8">Fill in the details to create a new coconut listing</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Coconut Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="Tender"
                      checked={formData.type === 'Tender'}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-4 h-4"
                    />
                    <span>🥥 Tender Coconut</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="Dry"
                      checked={formData.type === 'Dry'}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-4 h-4"
                    />
                    <span>🌰 Dry Coconut</span>
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Quantity (kg)</label>
                  <input
                    type="number"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Price per kg (₹)</label>
                  <input
                    type="number"
                    required
                    value={formData.pricePerUnit}
                    onChange={(e) => setFormData({ ...formData, pricePerUnit: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="28"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Harvest Date</label>
                <input
                  type="date"
                  required
                  value={formData.harvestDate}
                  onChange={(e) => setFormData({ ...formData, harvestDate: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Description (Optional)</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="4"
                  placeholder="Additional details about your coconuts..."
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">📊 Market Reference</h3>
                <p className="text-sm text-blue-800">
                  Current average price in {user?.district}: ₹28-30 per kg
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Create Listing
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/farmer')}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreateProduct;
