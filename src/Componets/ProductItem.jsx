import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addItem } from "../utils/cartSlice"
function ProductItem({ product }) {

  const dispatch = useDispatch()
  /*  payload of add item(product) */
  function handleAddItem(product) {
    dispatch(addItem(product))
  }
  return (
    <div >
      {product.images.length > 0 ? (
        <img
          className="w-full h-auto object-cover"
          src={product.images[0]}
          alt={product.title}
        />
      ) : null}
      <br />
      <h1>{product.title}</h1><br />
      <h2>{product.brand}</h2><br />
      <p>{product.price}</p><br />
      <p>{product.discountPercentage}% off</p><br />

      <Link to={`/product/${product.id}`}>view Details </Link>
      <button onClick={() => handleAddItem(product)}> add cart</button>
    </div>
  )
}

export default ProductItem

