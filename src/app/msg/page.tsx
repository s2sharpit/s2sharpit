import { Section, Title, Wrapper } from "@/components/ui";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default async function page() {
  const data = await getDocs(collection(db, "message"));
  //   data.forEach((doc) => {

  //     console.log(`${doc.id} => ${doc.data().username}`);
  //   });

  return (
    <Section>
      <Title>Messages</Title>
      <Wrapper>
        <ul className="">
          {data.docs.map((doc) => {
            const msgData = doc.data();
            const creationTime = doc.data().createdAt
              ? doc.data().createdAt.toDate()
              : null;

            return (
              <li key={doc.id} className="border-b last:border-0 p-2 grid gap-0.5">
                <div className="flex justify-between items-center text-xs">
                  <span>{msgData.email}</span>
                  <span className="text-xs">{creationTime?.toLocaleString()}</span>
                </div>
                <div className="">

                <span>{msgData.username}: </span>
                <span className="text-neutral-800">{msgData.message}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </Section>
  );
}
