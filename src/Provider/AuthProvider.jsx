import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const crateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }



    const logOut = () => {
        return signOut(auth)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state change ', currentUser);
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const auhtInfo = {
        user,
        crateUser,
        signIn,
        logOut,

    }



    return (
        <AuthContext.Provider value={auhtInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;