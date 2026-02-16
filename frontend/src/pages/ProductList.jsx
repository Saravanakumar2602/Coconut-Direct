import { useState } from 'react';
import Container from '../components/Container.jsx';
import { mockListings, districts } from '../data/mockData.js';
import { useAuth } from '../context/AuthContext.jsx';

const ProductList = () => {
  const { user } = useAuth();
  const [filters, setFilters] = useState({
    district: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'price-low'
  });

  const filteredListings = mockListings
    .filter(listing => !filters.district || listing.district === filters.district)
    .filter(listing => !filters.type || listing.type === filters.type)
    .filter(listing => !filters.minPrice || listing.pricePerUnit >= Number(filters.minPrice))
    .filter(listing => !filters.maxPrice || listing.pricePerUnit <= Number(filters.maxPrice))
    .sort((a, b) => {
      if (filters.sortBy === 'price-low') return a.pricePerUnit - b.pricePerUnit;
      if (filters.sortBy === 'price-high') return b.pricePerUnit - a.pricePerUnit;
      if (filters.sortBy === 'quantity') return b.quantity - a.quantity;
      return 0;
    });

  const handleOrder = (listing) => {
    if (!user) {
      alert('Please login to place an order');
      return;
    }
    alert(`Order request sent for ${listing.quantity}kg ${listing.type} coconuts from ${listing.farmerName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-8">Browse Coconut Listings</h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold mb-4">Filters</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">District</label>
                  <select
                    value={filters.district}
                    onChange={(e) => setFilters({ ...filters, district: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">All Districts</option>
                    {districts.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Type</label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">All Types</option>
                    <option value="Tender">Tender</option>
                    <option value="Dry">Dry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Price Range</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Sort By</label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="quantity">Quantity</option>
                  </select>
                </div>

                <button
                  onClick={() => setFilters({ district: '', type: '', minPrice: '', maxPrice: '', sortBy: 'price-low' })}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Listings Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">{filteredListings.length} listings found</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredListings.map(listing => (
                <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <img src={listing.image} alt={listing.type} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{listing.type} Coconut</h3>
                        <p className="text-sm text-gray-500">by {listing.farmerName}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="font-semibold">{listing.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">District:</span>
                        <span className="font-semibold">{listing.district}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Quantity:</span>
                        <span className="font-semibold">{listing.quantity} {listing.unit}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Harvest Date:</span>
                        <span className="font-semibold">{listing.harvestDate}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="text-2xl font-bold text-primary">₹{listing.pricePerUnit}</p>
                        <p className="text-xs text-gray-500">per kg</p>
                      </div>
                      <button
                        onClick={() => handleOrder(listing)}
                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredListings.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No listings found matching your filters</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
