"use client"
import {useState, useEffect} from 'react';

export default function Contador(){
    const[contador, setContador] = useState(10);
    const isButtonDisabled: boolean = contador === 0;

    return(
        <div className= "bg-white p-6 rounded-xl shadow-lg flex flex-col items-center w-85">
            <h1 className= "text-2xl font-mono text-gray-800 mt-2 ">{contador} cliques sobrando</h1>
            <button className= {`p-4 rounded-xl shadow-lg text-2xl font-semibold text-gray-950 mt-3 ${isButtonDisabled ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500'}`}
                onClick= {() => setContador(contador-1)}
                disabled= {isButtonDisabled}>
                Clique Aqui
            </button>
        </div>
    )
}