export default function ProductItem({ product }) {
    return (
        <>

            <td>{product.name}</td>
            <td>{product.manufactureDate}</td>
            <td>{product.expiryDate}</td>
            <td>{product.price}</td>
            <td>{product.type}</td>
            <td>{product.isActive}</td>
        </>
    );
}