function Product(props) {

    //destructuring
    let {name,price,specs} =props;
    return (
        <div className="product">
            <h3>{name}</h3>
            <h4>Price:{price}</h4>
            <h4>RAM:{specs.ram}</h4>
            <h4>Size: {specs.screen}</h4>
        </div>
    )
}

export default Product;