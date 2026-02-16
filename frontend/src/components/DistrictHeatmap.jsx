import { districtSupplyDemand } from '../data/mockData.js';

const DistrictHeatmap = () => {
  const getColor = (score) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getSupplyIcon = (supply) => {
    if (supply === 'high') return '🟢';
    if (supply === 'medium') return '🟡';
    return '🔴';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">🗺️ District Supply-Demand Map</h2>
      <div className="space-y-3">
        {districtSupplyDemand.map((item) => (
          <div key={item.district} className="border rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg">{item.district}</h3>
              <span className={`px-3 py-1 rounded-full text-white text-sm ${getColor(item.score)}`}>
                {item.score}
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span>{getSupplyIcon(item.supply)}</span>
                <span className="text-gray-600">Supply: <span className="font-semibold capitalize">{item.supply}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span>📦</span>
                <span className="text-gray-600">Demand: <span className="font-semibold capitalize">{item.demand}</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">
          <span className="font-semibold">Score:</span> Higher score = Better supply availability
        </p>
      </div>
    </div>
  );
};

export default DistrictHeatmap;
