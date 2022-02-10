import React from 'react'

export default function Header() {
  return (
    <>
    <header className="top-0 w-full px-20 py-5 bg-seafoam-400 mb-10 ">
        <brand className="flex">
            <span className="inline pr-2 "><img src="./img/greenlogo40x40.gif" width="40" alt="Logo"/></span><h1 className="text-seafoam-900 hover:text-seafoam-200 font-bold text-lg pt-1">Heading</h1>
        </brand>
    </header>
    </>
  )
}
