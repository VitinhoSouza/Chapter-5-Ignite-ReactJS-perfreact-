import React from 'react';
import {List, ListRowRenderer} from 'react-virtualized';
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
    totalPrice: number,
    results: Array<{
        id: number;
        price: number;
        title: string;
        priceFormatted: string;
    }>,
    onAddToWishList: (id:number) => void;
}

export function SearchResults({totalPrice, results, onAddToWishList}:SearchResultsProps){

    // const totalPrice = results.reduce((total,product) => {
    //     return total + product.price;
    // }, 0)

    // const totalPrice = useMemo(()=>{
    //     return results.reduce((total,product) => {
    //         return total + product.price;
    //     }, 0)
    // }, [results])

    const rowRenderer:ListRowRenderer = ({index, key, style}) => (
        <div key={key} style={style}>
            <ProductItem product={results[index]} onAddToWishList={onAddToWishList}/>
        </div>
    )

    return (
        <div>
            <h2>{totalPrice}</h2>

            {/* <List
                height={300} rowHeight={30} width={900} overscanRowCount={5} rowCount={results.length} rowRenderer={rowRenderer}
            /> */}

            {results.map(product => {
                return (
                    <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList}/>
                )
            })}

        </div>
    )
}