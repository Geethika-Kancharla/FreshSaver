import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup
} from 'firebase/auth'
import { getFirestore, collection, query, where, getDocs, doc, deleteDoc, setDoc, serverTimestamp, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'


const FirebaseContext = createContext(null);


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
export const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);


export const useFirebase = () => {
    const firebase = useContext(FirebaseContext);
    if (!firebase) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return firebase;
}

export const FirebaseProvider = (props) => {


    const [user, setUser] = useState(null);

    const addUser = (email, password, name, phno) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
            .then((userCredential) => {
                const loggedInuser = userCredential.user;
                const user = {
                    name,
                    phno,
                    email,
                    userId: loggedInuser.uid
                };
                const userDocRef = doc(firestore, 'users', loggedInuser.uid);

                setDoc(userDocRef, user)
                    .then(() => {
                        console.log('User document created with UID: ', loggedInuser.uid);
                    })
                    .catch((error) => {
                        console.error('Error creating user document: ', error);
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, user => {
            if (user)
                setUser(user);
            else
                setUser(null);
        })
    }, [])

    const handleCreateNewListing = async (pname, quantity, brand, coverPic) => {

        const imageRef = ref(storage, `uploads/images/${Date.now()}-${coverPic.name}`)
        const uploadResult = await uploadBytes(imageRef, coverPic);
        const randomId = Math.random().toString(36).substring(2, 15);
        const messageDetail = {
            pname,
            brand,
            quantity,
            imageURL: uploadResult.ref.fullPath,
            userId: user.uid,
            userEmail: user.email,
            id: randomId
        };
        const messageDocRef = doc(firestore, 'items', randomId);
        return await setDoc(messageDocRef, messageDetail)
            .then(() => {
                console.log('User document created with UID: ', randomId);
            })
            .catch((error) => {
                console.error('Error creating user document: ', error);
            });
    }

    const getImageURL = (path) => {
        return getDownloadURL(ref(storage, path));
    }

    const listAllItems = async () => {

        if (user) {
            try {
                const qr = query(
                    collection(firestore, "items"),
                    where("userId", "==", user.uid)
                );
                const querySnap = await getDocs(qr);
                const fetchedItems = [];
                querySnap.forEach((doc) => {
                    fetchedItems.push(doc);
                });
                return fetchedItems;
            } catch (error) {
                console.error("Error fetching item data:", error);
                return [];
            }
        } else {
            console.log("User is null in listAllItems");
            return [];
        }
    };


    const deleteItem = async (id) => {
        await deleteDoc(doc(firestore, "items", id));
    }

    const signinUserWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    const signinWithGoogle = () => {
        signInWithPopup(firebaseAuth, googleProvider);
    }
    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider value={{
            addUser,
            signinUserWithEmailAndPassword,
            signinWithGoogle,
            isLoggedIn,
            handleCreateNewListing,
            deleteItem,
            listAllItems,
            getImageURL
        }
        }>
            {props.children}
        </FirebaseContext.Provider>
    )
}
