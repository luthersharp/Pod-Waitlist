import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="custom-screen mb-5 py-3 px-5 lg:px-10 flex items-center md:py-5">
        <div>
          <Link href="https://podsynk.com"  > {/* Added href attribute for home link */}
            <Image
              src={logo}
              alt="Starboard Logo"
              width={42}
              height={42}
            />
          </Link>
        </div>
        <p className="font-bold text-sm lg:text-2xl lg:mr-auto">P<span className="text-teal-400">o</span>dS<span className="text-teal-400">yn</span>k</p>
        <Link
          className="ml-auto py-2.5 px-1 lg:px-4 text-center rounded-lg duration-150 lg:font-medium text-xs lg:text-sm text-white bg-gray-800 hover:bg-gray-600 focus:bg-gray-900 ring-offset-2 ring-gray-800 focus:ring-2 shadow shadow-teal-400"
          href="#secondcta" // Assuming you have a waitlist page
        >
          Join waitlist
        </Link>
        
          
        
      </nav>
    </header>
  );
};

export default Navbar;
