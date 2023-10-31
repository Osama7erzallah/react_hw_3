import { useEffect, useState } from 'react'
import Product from './Product.jsx';

export default function Proudcts() {

    const [productt, setProducts] = useState([]);

    const getProducts = async () => {
        let reponse = await fetch('https://fakestoreapi.com/products');
        let data = await reponse.json();
        setProducts(data);

    }

    useEffect(() => {
        getProducts();

    }, [])

    return (
        <div className='row' >

            {productt.map((e) => {
                return (<Product image={e.image} title={e.title} key={e.id} />);

            }
            )}

        </div>

    )
}
