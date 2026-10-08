export default function ProductItem({ product }) {
  return (
    <li>
      {product.title} - ${product.price}
    </li>
  );
}