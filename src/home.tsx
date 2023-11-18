import React, { useEffect } from "react";
import {db} from "./firebase";
import { onValue,ref,set } from "firebase/database";
export default function Home(){

    useEffect(() => {

        onValue(ref(db),snapshot => {
            const data = snapshot.val();
            if(data !== null){
                console.log(data)
            }
        })

    })

    return(
       
        <div>
             
            <h1>
                home
            </h1>
        </div>
    );
}

