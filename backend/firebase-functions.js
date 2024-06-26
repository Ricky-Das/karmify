import { uploadBytes, getDownloadURL, ref, deleteObject } from "firebase/storage";
import { auth, db, storage } from "./firebase-config";
import uuid from "react-native-uuid";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  deleteDoc,
  setDoc,
  addDoc,
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

export const createDonationItem = async (
  title,
  description,
  quantity,
  condition,
  location,
  imageURI
) => {
  const newId = uuid.v4().slice(0, 23).replace(/-/g, "");
  const docImage = await uploadImage(imageURI,  newId)
  await setDoc(doc(donationItemsRef, newId), {
    title: title,
    description: description,
    quantity: quantity,
    condition: condition,
    location: location,
    imageURI: docImage,  
    userId: auth.currentUser.uid,
  });
};

export const uploadImage = async (image, donationId) => {
    try {
      const imageRef = ref(storage, "images/" + donationId);
      const file = await fetch(image);
      const blob = await file.blob();
      await uploadBytes(imageRef, blob);
      return getDownloadURL(imageRef);
    } catch (err) {
      console.error(err);
      return ""
    }
};

export const deleteDonationItem = async (id) => {
  try {
    await deleteDoc(doc(donationItemsRef, id));
    const imageRef = ref(storage, "images/" + id);
    await deleteObject(imageRef);
  } catch(err) {
    console.log("delete error", err)
  }
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
) => {
  const today = new Date();
  const date = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
  await setDoc(doc(requestsItmesRef), {
    title: title,
    description: description,
    category: category,
    dateAdded: date,
    userId: auth.currentUser.uid,
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
