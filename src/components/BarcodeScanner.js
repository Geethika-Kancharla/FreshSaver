import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import Quagga from 'quagga';
import axios from 'axios';
import { useFirebase } from '../context/Firebase';

const BarcodeScanner = () => {

    const firebase = useFirebase();

    const webcamRef = useRef(null);
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState('Scanning for barcodes...');


    const [pname, setPname] = useState();
    const [quantity, setQuantity] = useState();
    const [brand, setBrand] = useState();
    const [coverPic, setCoverPic] = useState();

    const handleBarcodeDetected = (result) => {
        if (result && result.codeResult && result.codeResult.code) {
            setStatus(`Barcode detected: ${result.codeResult.code}`);
            fetchProductDetails(result.codeResult.code);
            Quagga.offDetected(handleBarcodeDetected); // Stop scanning after a successful detection
        }
    };

    const handleStore = () => {

        // Check if product details exist
        if (product) {
            // Call the Firebase function to store the details
            firebase.handleCreateNewListing(product.name, product.quantity, product.brand, { coverPic: product.imageUrl });
            setStatus('Product stored successfully in Firebase.');
        } else {
            setStatus('No product details to store.');
        }

    }

    const fetchProductDetails = async (barcode) => {
        try {
            const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
            console.log('API Response:', response.data);
            if (response.data.status === 1) {
                const productData = response.data.product;
                console.log('Product Data:', productData); // Log the product data
                setProduct({
                    name: productData.product_name || 'N/A',
                    brand: productData.brands || 'N/A',
                    quantity: productData.quantity || 'N/A',
                    imageUrl: productData.image_url || null, // Ensure this is available in the response
                });
                setPname(productData.product_name);
                setQuantity(productData.quantity);
                setBrand(productData.brands);
                setCoverPic(productData.image_url);
                console.log(pname);
                console.log(quantity);
                console.log(brand);
                console.log(coverPic);
                setStatus('Product details fetched successfully.');
            } else {
                setStatus('Product not found.');
            }
        } catch (error) {
            console.error('API Error:', error);
            setStatus('Failed to fetch product details.');
        }
    };

    useEffect(() => {
        Quagga.init({
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                target: webcamRef.current.video,
                constraints: {
                    facingMode: 'environment',
                },
            },
            decoder: {
                readers: ['ean_reader'],
            },
        }, (err) => {
            if (err) {
                console.error(err);
                setStatus('Failed to initialize barcode scanner.');
                return;
            }
            Quagga.start();
        });

        Quagga.onDetected(handleBarcodeDetected);

        return () => {
            Quagga.stop();
        };
    }, []);

    return (
        <div>
            <h2>Barcode Scanner</h2>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{ width: '40%', height: '40%' }}
            />
            <p>Status: {status}</p>
            {product && (
                <div>
                    <h3>Product Details</h3>
                    {product.imageUrl ? (
                        <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100%' }} />
                    ) : (
                        <p>No image available</p>
                    )}
                    <p><strong>Name:</strong> {product.name}</p>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Quantity:</strong> {product.quantity}</p>
                    <button onClick={handleStore}>Store</button>
                </div>
            )}
        </div>
    );
};

export default BarcodeScanner;