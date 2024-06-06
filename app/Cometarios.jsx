"use client";
import React, { useContext } from 'react'
import { UsuarioContext } from './Context/UsuarioContext'

const Cometarios = () => {

 const {Usuario} = useContext(UsuarioContext);
 let date = new Date();
 date = (date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear());
  return (
      <>
       {
        Usuario.length > 0 && (
            Usuario.map(elemento =>(
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div   className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
                </div>
                <div style={{width:"50%", marginLeft:"7%"}}className="border-r border-b border-l border-t mt-3 border-red-200  bg-transparent rounded-b  flex flex-col justify-between ">
                    <div className="mb-8">
                    <p className="text-sm text-teal-200 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    {/* <div className="text-gray-900 font-bold text-xl mb-2">{elemento.titulo}</div> */}
                    <p className="text-red-200 text-base  items-center">{elemento.comentario}</p>
                    </div>
                    <div className="flex items-center">
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{elemento.usuario}</p>
                        <p className="text-teal-200">{date}</p>
                    </div>
                    </div>
                </div>
                </div>
            ))
        )
       }
      </>
  )
}

export default Cometarios
