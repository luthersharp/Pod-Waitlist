

import { useState } from "react"
import SubscribeForm from "@/components/subscribeform"

export default function FooterCTA() {


    
return (
      <main id="formTwo" className="py-0 px-4 lg:px-56">
          <div className="border py-5 rounded-md  border-black max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
              <div className="max-w-lg mx-auto space-y-3 sm:text-center lg:mb-10">
                  <h3 className="text-teal-400 lg:text-4xl font-semibold">
                      Podsynk
                  </h3>
                  <p>
                      "For a successful podcasting journey.."
                  </p>
                  <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                      Join Waitlist
                  </p>
                  
                  <p className="text-sm">My Mission as Hamza (CEO) is to make you reach your Buisiness/Carrer gloas through podcasting</p>
              </div>
              
                  <SubscribeForm/>

              
              
          </div>
      </main>
  )
}