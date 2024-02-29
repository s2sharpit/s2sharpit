import { Section, Title, Wrapper } from "@/components/ui";
import { db } from "@/lib/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default async function page() {
  const data = await getDocs(collection(db, "message"));
  //   data.forEach((doc) => {

  //     console.log(`${doc.id} => ${doc.data().username}`);
  //   });

  return (
    <Section>
      <Title>Messages</Title>
      <Wrapper>
        <ul>
          {data.docs.map((doc) => (
            <li key={doc.id}>
              {doc.data().username}:
              <span className="text-neutral-800"> {doc.data().message}: </span>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Section>
  );
}
