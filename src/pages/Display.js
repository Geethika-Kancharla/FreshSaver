import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import Table from '../components/Table';
import Recipe from '../components/Recipe';

const Display = () => {
    const [items, setItems] = useState([]);
    const [queriedItems, setQueriedItems] = useState([]);
    const firebase = useFirebase();

    const APP_ID = "38eda028";
    const APP_KEY = "f0ce808ed79824c58d8977f482c9b51e";
    const [recipes, setRecipes] = useState([]);

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
                const queriedItems = await firebase.listOnExpiry();
                console.log(queriedItems);
                setQueriedItems(queriedItems);
            } else {
                console.log("User is not authenticated");
            }
        } catch (error) {
            console.error('Error fetching items approaching expiry:', error);
        }
    };

    const resetItems = () => {
        setQueriedItems([]);
    };

    const handleItemDelete = (deletedItemId) => {
        setItems(items.filter(item => item.id !== deletedItemId));
    };


    useEffect(() => {
        getRecipes();
    }, [])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=banana&app_id=${APP_ID}&app_key=${APP_KEY}`)

        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }


    return (
        <div className='h-screen w-screen bg-white'>
            <div className='shadow-md'>
                <div className='mt-36'>
                    {queriedItems.length > 0 ? (
                        queriedItems.map((queryItem, index) => (
                            <Table key={index} onItemDelete={handleItemDelete} {...queryItem} />
                        ))
                    ) : (
                        items.map((item, index) => (
                            <Table key={index} onItemDelete={handleItemDelete} {...item.data()} />
                        ))
                    )}
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={fetchQueriedItems} className='w-fit m-4 bg-blue-200 border border-black text-black'>Query</button>
                    <button onClick={resetItems} className='w-fit m-4 bg-blue-200 text-black'>Reset</button>
                    <button onClick={fetchQueriedItems} className='w-fit m-4 bg-blue-200 border border-black text-black'>Suggest</button>
                </div>
            </div>
            <div className='bg-white'>
                <h1 className='text-5xl text-center mt-16'>Recipes are here</h1>
                <div className='flex flex-wrap space-x-8 space-y-5 justify-center'>
                    {
                        recipes.map(recipe => (
                            <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Display;