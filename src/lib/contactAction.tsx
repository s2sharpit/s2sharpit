"use server";

import { db } from "@/lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

interface data {
  username: string;
  email: string;
  message: string;
}

const submitContact = async (data: data) => {
  try {
    await addDoc(collection(db, "message"), data);
    return { status: 200, message: "Message sent successfully!" };
  } catch (error) {
    return { status: 500, message: "Server error, please try again!" };
  }
};

export default submitContact;
