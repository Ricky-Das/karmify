import { auth, db } from "./firebase-config";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

const donationItemsRef = collection(db, "DonationItems");
const requestsItmesRef = collection(db, "Requests");
const addressesItemsRef = collection(db, "Addresses");
const deliveriesItemsRef = collection(db, "Deliveries");

export const getDonationItems = async () => {
  try {
    const data = await getDocs(donationItemsRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData;
  } catch (err) {
    console.error(err);
  }
};

export const deleteDonationItem = async (id) => {
  await deleteDoc(doc(donationItemsRef, id));
};

export const getRequestItems = async () => {
  try {
    const q = query(
      requestsItmesRef,
      where("userId", "==", auth.currentUser.uid)
    );
    const data = await getDocs(q);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData;
  } catch (err) {
    console.error(err);
  }
};

export const createRequestItem = async (
  title,
  description,
  category,
  userId
) => {
  await setDoc(doc(requestsItmesRef), {
    title: title,
    description: description,
    category: category,
    dateAdded: "Placeholder date",
    userId: userId,
  });
};

export const deleteRequestItem = async (id) => {
  await deleteDoc(doc(requestsItmesRef, id));
};

export const getAddressItems = async () => {
  try {
    const q = query(
      addressesItemsRef,
      where("userId", "==", auth.currentUser.uid)
    );
    const data = await getDocs(q);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData;
  } catch (err) {
    console.error(err);
  }
};

export const deleteAddressItem = async (id) => {
  await deleteDoc(doc(addressesItemsRef, id));
};

export const getDeliveryItems = async () => {
  try {
    const q = query(
      deliveriesItemsRef,
      where("userId", "==", auth.currentUser.uid)
    );
    const data = await getDocs(q);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData;
  } catch (err) {
    console.error(err);
  }
};

export const deleteDeliveryItem = async (id) => {
  await deleteDoc(doc(deliveriesItemsRef, id));
};
