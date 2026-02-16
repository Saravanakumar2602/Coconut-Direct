import { useState } from 'react';
import Container from '../components/Container.jsx';
import Stats from '../components/Stats.jsx';

const AdminDashboard = () => {
  const [pendingVerifications] = useState([
    { id: 1, name: 'Murugan', district: 'Pollachi', type: 'Farmer', date: '2024-01-20' },
    { id: 2, name: 'Kumar', district: 'Coimbatore', type: 'Farmer', date: '2024-01-19' }
  ]);

  const [disputes] = useState([
    { id: 1, orderId: 101, farmer: 'Ravi', buyer: 'Raja Traders', issue: 'Quality dispute', status: 'pending' }
  ]);

  const stats = [
    { label: 'Total Users', value: '1,234', icon: '👥', subtext: '856 farmers, 378 buyers' },
    { label: 'Active Listings', value: '456', icon: '📦', subtext: 'Across all districts' },
    { label: 'Total Transactions', value: '₹12.5L', icon: '💰', subtext: 'This month' },
    { label: 'Pending Verifications', value: pendingVerifications.length, icon: '⏳', subtext: 'Needs review' }
  ];

  const handleVerify = (id) => {
    alert(`User ${id} verified successfully`);
  };

  const handleReject = (id) => {
    alert(`User ${id} rejected`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <Stats stats={stats} />

        {/* Pending Verifications */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Pending Verifications</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">District</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {pendingVerifications.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">{user.name}</td>
                    <td className="px-6 py-4">{user.type}</td>
                    <td className="px-6 py-4">{user.district}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleVerify(user.id)}
                          className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 text-sm"
                        >
                          Verify
                        </button>
                        <button
                          onClick={() => handleReject(user.id)}
                          className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 text-sm"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disputes */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Active Disputes</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Farmer</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Buyer</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Issue</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {disputes.map(dispute => (
                  <tr key={dispute.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">#{dispute.orderId}</td>
                    <td className="px-6 py-4">{dispute.farmer}</td>
                    <td className="px-6 py-4">{dispute.buyer}</td>
                    <td className="px-6 py-4">{dispute.issue}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                        {dispute.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-primary hover:underline text-sm">
                        Review
                      </button>
                    </td>
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

export default AdminDashboard;
