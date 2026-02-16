import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container.jsx';
import Stats from '../components/Stats.jsx';
import OrderCard from '../components/OrderCard.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const BuyerDashboard = () => {
  const { user } = useAuth();
  const [orders] = useState([
    { id: 1, buyerName: user?.name, productType: 'Tender Coconut', quantity: 500, total: 14000, status: 'requested', date: '2024-01-20' },
    { id: 2, buyerName: user?.name, productType: 'Dry Coconut', quantity: 300, total: 9000, status: 'accepted', date: '2024-01-19' },
    { id: 3, buyerName: user?.name, productType: 'Tender Coconut', quantity: 1000, total: 28000, status: 'completed', date: '2024-01-15' }
  ]);

  const stats = [
    { label: 'Total Orders', value: orders.length, icon: '📦', subtext: 'All time' },
    { label: 'Pending', value: orders.filter(o => o.status === 'requested').length, icon: '⏳', subtext: 'Awaiting acceptance' },
    { label: 'Completed', value: orders.filter(o => o.status === 'completed').length, icon: '✅', subtext: 'Delivered' },
    { label: 'Total Spent', value: '₹51,000', icon: '💰', subtext: 'This month' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.name}! 🛒</h1>
          <p className="text-gray-600">District: {user?.district}</p>
        </div>

        <Stats stats={stats} />

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="flex gap-4">
            <Link
              to="/products"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Browse Listings
            </Link>
            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
              View Saved
            </button>
          </div>
        </div>

        {/* Active Orders */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Active Orders</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.filter(o => ['requested', 'accepted', 'paid'].includes(o.status)).map(order => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>

        {/* Order History */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Order History</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {orders.map(order => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">#{order.id}</td>
                    <td className="px-6 py-4">{order.productType}</td>
                    <td className="px-6 py-4">{order.quantity} kg</td>
                    <td className="px-6 py-4 font-semibold text-primary">₹{order.total}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'accepted' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BuyerDashboard;
