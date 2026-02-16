import Container from '../components/Container.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const Analytics = () => {
  const { user } = useAuth();

  const salesData = [
    { month: 'Jan', sales: 45000 },
    { month: 'Feb', sales: 52000 },
    { month: 'Mar', sales: 48000 },
    { month: 'Apr', sales: 61000 }
  ];

  const topBuyers = [
    { name: 'Raja Traders', orders: 12, total: 156000 },
    { name: 'Kumar Store', orders: 8, total: 98000 },
    { name: 'Wholesale Hub', orders: 6, total: 72000 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <h1 className="text-3xl font-bold mb-8">Sales Analytics</h1>

        {/* Monthly Sales Chart */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">Monthly Sales Trend</h2>
          <div className="flex items-end gap-4 h-64">
            {salesData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-primary rounded-t-lg transition-all hover:bg-green-700"
                  style={{ height: `${(data.sales / 70000) * 100}%` }}
                />
                <p className="mt-2 font-semibold text-sm">{data.month}</p>
                <p className="text-xs text-gray-600">₹{(data.sales / 1000).toFixed(0)}k</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Top Buyers */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Top Buyers</h2>
            <div className="space-y-4">
              {topBuyers.map((buyer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">{buyer.name}</p>
                    <p className="text-sm text-gray-600">{buyer.orders} orders</p>
                  </div>
                  <p className="font-bold text-primary">₹{(buyer.total / 1000).toFixed(0)}k</p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Average Order Value</p>
                <p className="text-2xl font-bold text-green-700">₹12,250</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Order Acceptance Rate</p>
                <p className="text-2xl font-bold text-blue-700">94%</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Customer Rating</p>
                <p className="text-2xl font-bold text-yellow-700">4.5 ⭐</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Analytics;
