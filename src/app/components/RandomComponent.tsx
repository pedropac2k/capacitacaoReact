"use client"
import {useState} from 'react';
import React, { Dispatch, SetStateAction } from 'react';

export default function Random(){
    const[num, setNum] = useState(0);
    return(
            <div className= "bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
                <h1 className= "text-2xl font-mono text-gray-800 mt-2 ">{num}</h1>
                <button className= "p-4 rounded-xl shadow-lg text-2xl font-semibold text-gray-950 mt-3 bg-blue-500"
                    onClick= {() => gerarNumeroAleatorio(setNum)}>
                    Gerar Número
                </button>
            </div>
        )
}

function gerarNumeroAleatorio(setNum: Dispatch<SetStateAction<number>>){
    const novoNumero = Math.floor(Math.random() * 101);
    setNum(novoNumero);
};