import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';

const Table = (props) => {
    const [url, setURL] = useState(null);
    const [deleted, setDeleted] = useState(false);
    const firebase = useFirebase();

    useEffect(() => {
        firebase.getImageURL(props.imageURL).then(url => setURL(url));
    }, [props.imageURL, firebase, deleted]);

    const handleDelete = (id) => {
        firebase.deleteItem(id)
            .then(() => {
                console.log('Document successfully deleted!');
                setDeleted(prevState => !prevState);
                props.onItemDelete(id);
            })
            .catch((error) => {
                console.error('Error removing document: ', error);
            });
    };

    return (
        <div className=" overflow-x-auto shadow-md bg-white w-full flex justify-center space-x-28">
            <table className=" text-sm text-left text-gray-500">
                <thead className="text-xs uppercase bg-gray-100 text-gray-700">
                    <tr>
                        <th scope="col" className="px-70 py-3">
                            <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ingredients
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Expiry Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-4">
                            <img src={url} className="w-16 h-16 object-cover rounded-md shadow-md" alt="grocery" />
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                            {props.pname}
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                            {props.ingredients}
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                            {props.quantity}
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                            {props.expiry}
                        </td>
                        <td className="px-6 py-4 space-x-4 flex">
                            <button className="font-medium text-white bg-green-500 hover:bg-green-600 py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" >View</button>
                            <button className="font-medium text-white bg-red-500 hover:bg-red-600 py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" onClick={() => handleDelete(props.id)}>Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
