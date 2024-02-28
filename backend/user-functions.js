import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth, db } from "./firebase-config"
import { collection } from "firebase/firestore"

const usersRef = collection(db, "Users")

//create a userDatabase object to store other fields so it can be retrieved by any other files

export const register = async(registerEmail, registerPassword, firstName, lastName, phoneNumber) => {
    //other fields will go into a database document as firebase auth only holds email and password
    try {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        //Will also create a user database object
    } catch(err) {
        console.error(err)
    }
}

export const login = async(loginEmail, loginPassword) => {
    try {
        //replace this with actual loginEmail and loginPassword once login page is set up
        const user = await signInWithEmailAndPassword(auth, "test@gmail.com", "password123")
    } catch(err) {
        console.error(err)
    }
}

export const logout = async() => {
    //redirect to logout page
    signOut(auth)
}

//In progress function
export const createUserItem = async (firstName, lastName, phoneNumber) => {

}

