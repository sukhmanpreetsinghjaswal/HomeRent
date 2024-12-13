import React from "react"

const Hero = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="relative w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVudGFsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D")' }}>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="font-bold text-[40px] leading-[48px] text-white lg:text-[48px] lg:leading-[60px] text-center">
          Welcome! Find your Dream Home.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero

