import Card from "./Card";
import Button from "./Button";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <h2 className="text-lg font-bold">{product.type}</h2>
      <p>Farmer: {product.farmer}</p>
      <p>District: {product.district}</p>
      <p>Quantity: {product.quantity}</p>
      <p className="text-primary font-semibold">
        ₹{product.price} / piece
      </p>
      <Button>Place Order</Button>
    </Card>
  );
};

export default ProductCard;
