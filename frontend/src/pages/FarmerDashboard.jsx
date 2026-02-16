import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container.jsx';
import Stats from '../components/Stats.jsx';
import OrderCard from '../components/OrderCard.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const FarmerDashboard = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([
    { id: 1, buyerName: 'Raja Traders', productType: 'Tender Coconut', quantity: 500, total: 14000, status: 'requested', date: '2024-01-20' },
    { id: 2, buyerName: 'Kumar Store', productType: 'Dry Coconut', quantity: 300, total: 9000, status: 'accepted', date: '2024-01-19' },
    { id: 3, buyerName: 'Wholesale Hub', productType: 'Tender Coconut', quantity: 1000, total: 28000, status: 'paid', date: '2024-01-18' }
  ]);

  const [listings] = useState([
    { id: 1, type: 'Tender', quantity: 500, price: 28, status: 'active' },
    { id: 2, type: 'Dry', quantity: 300, price: 30, status: 'active' }
  ]);

  const stats = [
    { label: 'Total Sales', value: '₹51,000', icon: '💰', subtext: 'This month' },
    { label: 'Active Listings', value: listings.length, icon: '📦', subtext: `${listings.reduce((sum, l) => sum + l.quantity, 0)} kg total` },
    { label: 'Pending Orders', value: orders.filter(o => o.status === 'requested').length, icon: '🔔', subtext: 'Needs action' },
    { label: 'Rating', value: '4.5', icon: '⭐', subtext: '23 reviews' }
  ];

  const handleAccept = (orderId) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: 'accepted' } : o));
  };

  const handleReject = (orderId) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: 'rejected' } : o));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.name}! 🌾</h1>
          <p className="text-gray-600">District: {user?.district}</p>
        </div>

        <Stats stats={stats} />

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="flex gap-4">
            <Link
              to="/farmer/create-listing"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              + Add New Listing
            </Link>
            <Link
              to="/farmer/analytics"
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              View Analytics
            </Link>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Pending Orders</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.filter(o => o.status === 'requested').map(order => (
              <OrderCard
                key={order.id}
                order={order}
                showActions={true}
                onAccept={handleAccept}
                onReject={handleReject}
              />
            ))}
          </div>
          {orders.filter(o => o.status === 'requested').length === 0 && (
            <p className="text-gray-500 text-center py-8">No pending orders</p>
          )}
        </div>

        {/* Active Listings */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">My Active Listings</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Price/kg</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {listings.map(listing => (
                  <tr key={listing.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{listing.type}</td>
                    <td className="px-6 py-4">{listing.quantity} kg</td>
                    <td className="px-6 py-4 font-semibold">₹{listing.price}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        {listing.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-primary hover:underline text-sm">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Orders */}
        <div>
          <h2 className="text-2xl font-bold mb-4">All Orders</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map(order => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FarmerDashboard;
