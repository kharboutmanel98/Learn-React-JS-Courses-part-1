import PropTypes from "prop-types"; //! responsible de validation
const Product = ({ children, onDeleteProduct , id }) => {
  return (
    <>
      <div className="my-4">
        <div className="card text-white bg-primary mb-3">{children}</div>
        <button className="btn btn-dark" onClick={() => onDeleteProduct(id)}>Delete</button>
      </div>
    </>
  );
};

export default Product;

Product.propTypes = {
  label: PropTypes.string,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  label: "My Product",
  price: 0,
};
