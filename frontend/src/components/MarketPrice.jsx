import { marketPrices } from '../data/mockData.js';

const MarketPrice = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">📊 Live Market Prices</h2>
      <div className="space-y-3">
        {marketPrices.map((item) => (
          <div key={item.district} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            <div>
              <p className="font-semibold text-gray-800">{item.district}</p>
              <p className="text-sm text-gray-500">Per kg</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-primary">₹{item.price}</p>
              <p className={`text-sm flex items-center gap-1 ${
                item.trend === 'up' ? 'text-green-600' : 
                item.trend === 'down' ? 'text-red-600' : 'text-gray-600'
              }`}>
                {item.trend === 'up' && '↑'}
                {item.trend === 'down' && '↓'}
                {item.trend === 'stable' && '→'}
                {Math.abs(item.change)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPrice;
