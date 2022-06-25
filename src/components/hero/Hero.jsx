import React from 'react'
import heroRightImg from '../../assets/hero_right_img.jpg'

const Hero = () => {
  return (
      <>
    <section id="hero">
      <div class="container flex flex-col mx-auto p-6 lg:flex-row">
        <div class="flex flex-col space-y-10 mb-24 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1
            class="text-5xl font-bold text-center text-white lg:text-6xl lg:max-w-md lg:text-left"
          >
            Discover more about legends  
          </h1>
          <p
            class="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left"
          >
            Find your favourite legend and weapon stats here. Fast and easy.
          </p>
          <div class="mx-auto lg:mx-0">
            <a
              href="#"
              class="py-5 px-10 text-2xl font-bold text-white bg-blue-600 rounded-full lg:py-4 hover:opacity-70"
              >Get Started</a
            >
          </div>
        </div>

        <div class="group mx-auto hidden md:block md:w-180 lg:mb-0 lg:w-1/2 backdrop-blur-xl mb-12 lg:mt-16 xl:mb-24">
          <img class="rounded-md transition duration-500 ease-in-out group-hover:animate-pulse" src={heroRightImg} alt="" />
        </div>

      </div>
    </section>

    </>
  )
}

export default Hero