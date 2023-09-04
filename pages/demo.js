import { useState } from "react";

export default function Demo() {

    const [text1Value, setText1] = useState('Anup');
    const [text2Value,setText2] = useState('Jawanjal')

    return (
        <div className="container">
            <h3>Test App</h3>
            <input onChange={(e) => {setText1(e.target.value)}} value={text1Value}></input>
            <input onChange={(e) => {setText2(e.target.value)}} value={text2Value}></input>
           

            <h1>{text1Value} {text2Value}</h1>

        </div>
    );


}