import { useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import productService from './productService';

function ProductList() {

    const columns = useMemo(
        () => [
          {
            accessorKey: 'name', 
            header: 'Product Name',
            size: 100,
          },
          {
            accessorKey: 'manufactureDate',
            header: 'Manufacturing Date',
            size: 100,
          },
          {
            accessorKey: 'manufactureDate',
            header: 'Manufacturing Date',
            size: 100,
          },
          {
            accessorKey: 'expiryDate',
            header: 'Expiry Date',
            size: 200,
          },
          {
            accessorKey: 'price',
            header: 'Price',
            size: 100,
          },
          {
            accessorKey: 'isActive',
            header: 'Is Active',
            size: 100,
          },
        ],
        [],
      );

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        productService.getProducts().then((response => {
            setProducts(response.data);
        }))
    }


 
    return (
            <MaterialReactTable  
                columns={columns} 
                data={products}
                
                muiTableProps={{
                  sx: {
                    border: '1px solid rgba(81, 81, 81, 1)',
                  },
                }}
                muiTableHeadCellProps={{
                  sx: {
                    border: '1px solid rgba(81, 81, 81, 1)',
                  },
                }}
                muiTableBodyCellProps={{
                  sx: {
                    border: '1px solid rgba(81, 81, 81, 1)',
                  },
                }}
                >

            </MaterialReactTable >       
    );
}

export default ProductList;