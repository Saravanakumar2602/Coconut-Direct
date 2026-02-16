export const districts = [
  'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem',
  'Tirunelveli', 'Tiruppur', 'Erode', 'Vellore', 'Thoothukudi',
  'Dindigul', 'Thanjavur', 'Ranipet', 'Sivaganga', 'Karur',
  'Namakkal', 'Pollachi', 'Ramanathapuram', 'Virudhunagar', 'Pudukkottai'
];

export const marketPrices = [
  { district: 'Pollachi', price: 28, change: 5.2, trend: 'up' },
  { district: 'Coimbatore', price: 30, change: 3.1, trend: 'up' },
  { district: 'Chennai', price: 35, change: -2.5, trend: 'down' },
  { district: 'Madurai', price: 27, change: 1.8, trend: 'up' },
  { district: 'Salem', price: 29, change: 0, trend: 'stable' }
];

export const districtSupplyDemand = [
  { district: 'Pollachi', supply: 'high', demand: 'medium', score: 85 },
  { district: 'Coimbatore', supply: 'medium', demand: 'high', score: 72 },
  { district: 'Chennai', supply: 'low', demand: 'high', score: 45 },
  { district: 'Madurai', supply: 'high', demand: 'low', score: 90 },
  { district: 'Salem', supply: 'medium', demand: 'medium', score: 65 }
];

export const mockListings = [
  {
    id: 1,
    farmerId: 'F001',
    farmerName: 'Murugan',
    district: 'Pollachi',
    type: 'Tender',
    quantity: 500,
    unit: 'kg',
    pricePerUnit: 28,
    harvestDate: '2024-01-15',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1589606663923-283bbd309229?w=400'
  },
  {
    id: 2,
    farmerId: 'F002',
    farmerName: 'Kumar',
    district: 'Coimbatore',
    type: 'Dry',
    quantity: 1000,
    unit: 'kg',
    pricePerUnit: 30,
    harvestDate: '2024-01-10',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=400'
  },
  {
    id: 3,
    farmerId: 'F003',
    farmerName: 'Ravi',
    district: 'Madurai',
    type: 'Tender',
    quantity: 750,
    unit: 'kg',
    pricePerUnit: 27,
    harvestDate: '2024-01-18',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1589606663923-283bbd309229?w=400'
  }
];
