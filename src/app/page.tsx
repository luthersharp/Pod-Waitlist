import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import CenteredCTA from "@/components/centercta"
import FeatureSection from "@/components/cta"
import FooterCTA from "@/components/footercta"
import Accordion from "@/components/accordition"
import Footer from "@/components/footer"
import Link from "next/link"
import SubscribeForm from "@/components/subscribeform"


const Home = () =>{
  return(
    <div>
      <Navbar />
      <Hero/>
      <CenteredCTA />
      <FeatureSection />
      <FooterCTA />
      <Accordion />
      <Footer />
      
    </div>
  )
}
export default Home