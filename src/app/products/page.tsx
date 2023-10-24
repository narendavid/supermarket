"use client"
import { products } from "../../../data/data.json"


export default function Page() {
    return (
        <>
            <h1>Bodega</h1>
            {
                products.length > 0 ?
                    products.map((product) => {
                        <p>{product.name}</p>
                    })
                    :
                    <p>Not found</p>
            }
        </>
    )
}
