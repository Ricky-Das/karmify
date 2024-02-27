import { db } from "./firebase-config";
import { getDocs, collection, query, where } from "firebase/firestore";

const donationItemsRef = collection(db, "DonationItems")
const requestsItmesRef = collection(db, "Requests")
const addressesItemsRef = collection(db, "Addresses")
const deliveriesItemsRef = collection(db, "Deliveries")

export const getDonationItems = async () => {
    try {
        const data = await getDocs(donationItemsRef)
        const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        return filteredData
    } catch (err) {
        console.error(err)
    }
}

export const getRequests = async () => {
    try {
        const q = query(requestsItmesRef, where('userId', '==', '1'))
        const data = await getDocs(q)
        const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        return filteredData
    } catch (err) {
        console.error(err)
    }
}

export const getAddresses = async () => {
    try {
        const q = query(addressesItemsRef, where('userId', '==', '1'))
        const data = await getDocs(q)
        const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        return filteredData
    } catch (err) {
        console.error(err)
    }
}

export const getDeliveries = async () => {
    try {
        const q = query(deliveriesItemsRef, where('userId', '==', '1'))
        const data = await getDocs(q)
        const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        return filteredData
    } catch (err) {
        console.error(err)
    }
}