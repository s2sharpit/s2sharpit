"use server";

// import { db } from "@/lib/firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";
// import { revalidatePath } from "next/cache";

// interface data {
//   username: string;
//   email: string;
//   message: string;
//   createdAt: Date;
// }

const submitContact = async () => {
  // try {
  //   await addDoc(collection(db, "message"), data);
  //   revalidatePath("/msg"); // revalidate the cache for this page after submitting a new message.
  //   return { status: 200, message: "Message sent successfully!" };
  // } catch (error) {
  //   return { status: 500, message: "Server error, please try again!" };
  // }
};

export default submitContact;
