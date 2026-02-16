const OrderCard = ({ order, onAccept, onReject, showActions = false }) => {
  const statusColors = {
    requested: 'bg-yellow-100 text-yellow-800',
    accepted: 'bg-blue-100 text-blue-800',
    paid: 'bg-green-100 text-green-800',
    completed: 'bg-gray-100 text-gray-800',
    rejected: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-800">Order #{order.id}</h3>
          <p className="text-sm text-gray-500">{order.date}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}>
          {order.status.toUpperCase()}
        </span>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Buyer:</span>
          <span className="font-semibold">{order.buyerName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Product:</span>
          <span className="font-semibold">{order.productType}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Quantity:</span>
          <span className="font-semibold">{order.quantity} kg</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Total:</span>
          <span className="font-bold text-primary text-lg">₹{order.total}</span>
        </div>
      </div>

      {showActions && order.status === 'requested' && (
        <div className="flex gap-3">
          <button
            onClick={() => onAccept(order.id)}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Accept
          </button>
          <button
            onClick={() => onReject(order.id)}
            className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
