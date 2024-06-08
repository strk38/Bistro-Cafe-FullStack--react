import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/config_firebase";
import axios from "axios";
import { url_link } from "../routes/url";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();
    const GoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //     // This gives you a Google Access Token. You can use it to access the Google API.
        //     const credential = GoogleAuthProvider.credentialFromResult(result);
        //     const token = credential.accessToken;
        //     // The signed-in user info.
        //     const loggedInUser = result.user;
        //     // IdP data available using getAdditionalUserInfo(result)
        //     // ...
        //     setUser(loggedInUser);
        // }).catch((error) => {
        //     // Handle Errors here.
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // The email of the user's account used.
        //     const email = error.customData.email;
        //     // The AuthCredential type that was used.
        //     const credential = GoogleAuthProvider.credentialFromError(error);
        //     // ...
        // });
    }

    const fbProvider = new FacebookAuthProvider();
    const fbSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, fbProvider);
    }

    const updateUserInfo = (user_name, photo_url) => {
        updateProfile(auth.currentUser, {
            displayName: user_name,
            photoURL: photo_url ? photo_url : ''
        }).then(() => {
            // Profile updated!
            // ...
            console.log(auth.currentUser)
        }).catch((error) => {
            alert(error);
        });
    }

    const logOut = () => {
        setLoading(true);
        setUser(null);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('currentUser', currentUser)
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                // console.log(userInfo);
                axios.post(`${url_link}/jwt`, userInfo)
                    .then(res => {
                        // console.log('res.data.token 1', res.data.token); 
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            // console.log('res.data.token', res.data.token);
                            setLoading(false);
                        }
                    })
                    .catch(
                    // console.log('failed res.data.token')
                );
            }
            else {
                //rmv token(if stored in client side)
                localStorage.removeItem('access-token');
                setLoading(false);
            }

        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        GoogleSignIn,
        fbSignIn,
        updateUserInfo,
        logOut,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;