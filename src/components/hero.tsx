import Image from "next/image"
import mockup from '/public/images/desktopmocuup.png'
import LayoutEffect from "@/components/layouteffect"
import SubscribeForm from "@/components/subscribeform"

const Hero = ()=> {
   return (

      <LayoutEffect isInviewState={{
         trueState: "opacity-100 -translate-y-0",
         falseState: "opacity-0 -translate-y-3"
     }}>
         <section className=" lg:p-5 py-1 px-3 overflow-hidden duration-300 ease-in">
             <div className="custom-screen items-center gap-12 text-gray-600 md:flex">
                 <div className='flex-none space-y-5 max-w-2xl'>
                     <h1 className="text-xl text-center text-gray-800 font-extrabold lg:text-3xl">
                     Find podcast <span className="text-teal-400">guests</span> /<span className="text-teal-400">hosts</span> instantly.
                     </h1>
                     <h2 className="text-xl text-center text-gray-800 font-extrabold lg:text-3xl">
                     Find <span className="text-teal-400">→</span> Message <span className="text-teal-400">→</span> Scheduel <span className="text-teal-400">→</span> Publish.
                     </h2>
                     <h2 className="text-xl text-center text-gray-800 font-extrabold lg:text-3xl">
                      We help you grow <span className="text-teal-400">Your Audience</span> and Attract <span className="text-teal-400">Sponsors</span> .
                     </h2>
                     <SubscribeForm/>
                 </div>
                 <div className='"mr-auto overflow-hidden mt-12 md:mt-0'>
                     <Image
                         src={mockup}
                         alt="how to find podcast guests"
                         className=" w-full  md:max-w-2xl "
                         priority
                     />
                 </div>
             </div>
         </section>
         </LayoutEffect>
   )
}
export default Hero