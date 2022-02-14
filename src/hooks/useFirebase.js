import { useState,useEffect } from "react"
import initialFirebase from "../pages/Login/Login/Firebase/firebaseInit"
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged ,signInWithEmailAndPassword ,signOut } from "firebase/auth";


initialFirebase()

const useFirebase=()=>{
  const [user,setUser]=useState({})
   
  const auth = getAuth();

  // register user function 
  const registerUser=(email,password)=>{
       createUserWithEmailAndPassword(auth,email,password)
       .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
   } 


   // login user function
   const loginUser=(email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });  
   }
   
   //  state
   useEffect(()=>{
    const unsubscribe=  onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser({})
        }
      });
      return ()=>unsubscribe
   },[])


   //logOut function
   const logOut=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
   }


  return {
      user,
      registerUser,
      loginUser,
      logOut,
  }
}

export default useFirebase 