import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import Table from '../components/Table';

const Display = () => {
    const [items, setItems] = useState([]);
    const [queriedItems, setQueriedItems] = useState([]);
    const firebase = useFirebase();

    useEffect(() => {

        const fetchAllItems = async () => {
            try {
                const user = firebase.user;
                if (user) {
                    const allItems = await firebase.listAllItems();
                    setItems(allItems);
                } else {
                    console.log("User is not authenticated");
                }
            } catch (error) {
                console.error('Error fetching all items:', error);
            }
        };

        fetchAllItems();
    }, [firebase]);

    const fetchQueriedItems = async () => {
        try {
            const user = firebase.user;
            if (user) {
                const items = await firebase.listOnExpiry();
                setQueriedItems(items);
            } else {
                console.log("User is not authenticated");
            }
        } catch (error) {
            console.error('Error fetching items approaching expiry:', error);
        }
    };

    const handleItemDelete = (itemId) => {
        // Logic to delete item
    };

    return (
        <div>
            <button onClick={fetchQueriedItems}>Fetch Items Approaching Expiry</button>
            <h1>Displaying details here</h1>
            {queriedItems.length > 0 ? (
                queriedItems.map((item, index) => (
                    <Table key={index} onItemDelete={handleItemDelete} {...item.data()} />
                ))
            ) : (
                items.map((item, index) => (
                    <Table key={index} onItemDelete={handleItemDelete} {...item.data()} />
                ))
            )}
        </div>
    );
};

export default Display;