import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../utils/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  /*  payload of add item(product) */
  function handleAddItem(product) {
    dispatch(addItem(product));
  }

  return (
    <div
      className="rounded p-4 flex flex-col items-center sm:max-w-xs mx-auto
                 transform transition-transform duration-300 hover:scale-105"
    >
      {product.images.length > 0 ? (
        <img
          className="w-full h-48 object-cover rounded"
          src={product.images[0]}
          alt={product.title}
        />
      ) : null}
      <br />
      <h1 className="text-lg font-semibold text-center">{product.title}</h1>
      <h2 className="text-sm text-gray-600">{product.brand}</h2>
      <p className="text-green-700 font-bold">${product.price}</p>
      <p className="text-red-500">{product.discountPercentage}% off</p>

      {/* Buttons side by side */}
      <div className="flex w-full gap-2 mt-2">
        <Link to={`/product/${product.id}`} className="w-1/2">
          <button className="w-full bg-blue-100 text-blue-700 hover:bg-blue-200 rounded py-1 transition-colors duration-200">
            view Details
          </button>
        </Link>

        <button
          onClick={() => handleAddItem(product)}
          className="w-1/2 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 rounded transition-colors duration-200"
        >
          add cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
