import React from 'react'
import StoreCard from '../StoreCard/StoreCard';
import './StoreList.css'

export default function StoreList({ stores, sale, loadData }) {
    const getMoreStores = () => {
        console.log("Hello world");
        loadData();
    };

    return (
        <div className={sale ? "sale" : ""}>
            <h2>All the Stores!!!</h2>

            {stores.map((item) => (
                <StoreCard key={item.id} address={item.address} />
            ))}

            <button onClick={getMoreStores}>load more stores</button>
        </div>
    );
}
