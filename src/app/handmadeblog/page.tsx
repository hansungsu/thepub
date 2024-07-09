'use client';

import { useEffect, useState } from 'react';
import { firebase__db } from "@/services/firebase";
import { collection, doc, addDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore"; 




const Handmadeblog = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {

    // CRUD :: Create
    const createData = async () => {
      try {
        const docRef = await addDoc(collection(firebase__db, "blog"), {
          first: "Alan",
          middle: "Mathison",
          last: "Turing",
          born: 1912
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    // CRUD :: Read
    const readData = async () => {
      const querySnapshot = await getDocs(collection(firebase__db, "blog"));
      const dataList = querySnapshot.docs.map(doc => (
        {
          id: doc.id,
          ...doc.data()
        }
      ));
      setData(dataList)
    }

    // CRUD :: Delate
    const delateData = async () => {
      await deleteDoc(doc(firebase__db, "blog", "item"));
    }

    // CRUD :: Update
    const updateData = async () => {
      const docRef = doc(firebase__db, "blog", "EMbNrDYPoWGoPcXy1z4i");
      const newData = {
        first: "Han",
        middle: "Sung",
        last: "Soo",
        born: 1989
      }
      await updateDoc(docRef, newData);
    }


    readData();
    updateData();

   
  }, []);

  return (
    <div>
      <h1>Firestore Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.first +  item.last}</li>
        ))}
      </ul>
    </div>
  );
};

export default Handmadeblog;
