import React ,{ useEffect, useState } from 'react'




export default function Home() {


    const [productt,setProducts]=useState([]);

    const getProducts=async()=>{
let reponse=await fetch('https://fakestoreapi.com/products' );
let data=await reponse.json();
setProducts(data);

    }

    useEffect(()=>{
getProducts();

    },[])

  return (
     <div className='row' >

    {productt.map((e)=>{
return( 
    
<div className='col-md-4' key={e.id}>
<h2>{e.title}</h2>
<img src={e.image} className='w-50' alt="product" />
</div>
)

    }
    )}

</div>

  )
}
