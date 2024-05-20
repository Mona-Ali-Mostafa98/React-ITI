import React, { useState } from 'react'
import { ProductForm } from './ProductForm'
import { ProductTable } from './ProductTable'

export function Products() {
    let [ products, setProducts ] = useState( [] )
    return (
        <>
            <ProductForm products={products} setProducts={setProducts} />
            <ProductTable products={products} setProducts={setProducts} />

        </>
    )
}
