import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Favela Your Property at One Click</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo/properti.png" />
      </Head>
      <nav className="mx-auto font-poppins bg-white shadow text-xl pt-16 pb-10 px-28 text-black">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src="/assets/logo/properti.png" className="w-9 h-9" />
            <p className="font-poppins font-bold">FAVELA</p>
          </div>
          <div className="flex space-x-16 items-center">
            <div className="space-x-16">
              <a className="border-b-[2.5px] border-black" href="#">
                Home
              </a>
              <a className="nav-button-hover" href="#">
                Order
              </a>
              <a className="nav-button-hover" href="#">
                About
              </a>
              <a className="nav-button-hover" href="#">
                Contact
              </a>
            </div>
            <div>
              <img src="assets/profile/avatar.jpg" alt="" className="w-9 h-9 rounded-full"></img>
            </div>
          </div>
        </div>
        {/* mobile nav */}
      </nav>
      {/* Landing Picture and Search Bar - Start*/}
      <div className="flex justify-center aspect-[3/1] place-items-center">
        {/* Search Bar-Start */}
        <div className="mt-20 grid border-[#bfbebe] border-2 drop-shadow-lg absolute bg-[#e3e3e3] rounded-xl opacity-30 w-2/4 h-[64px] z-10">
          <form className="grid" action="">
            <input className="bg-[#bfbebe00] w-[40rem] appearance-none border-none focus:outline-none focus:ring-0 text-[#0c0c0c] font-poppins text-xl ml-6 mt-4 absolute" type="text" placeholder="Search here" name="search" />
            <button className="flex justify-self-end mt-3 mr-5 ">
              <img className="opacity-50 " src="assets/landing/search.svg" alt="" />
            </button>
          </form>
        </div>
        {/* Search Bar-End */}
        <p className="mb-20 uppercase font-bold font-poppins text-5xl absolute z-10 text-center text-white">Your Property at One Click </p>
        <img className="brightness-[.75] m-auto h-full w-full object-cover" src="assets/landing/greeting.jpg" alt="Greeting" />
      </div>
      {/* Landing Picture and Search Bar - END */}

      {/* content - start */}
      <div className="bg-[#ffffff]">
        <br />
        <br />
        <br />
        <br />
        <p className="bg-[#00000000] text-[#ebebeb] font-[700] text-[14rem] leading-none text-center font-poppins uppercase">Searched</p>
        <p className="bg-[#00000000] text-[#ebebeb] font-[700] text-[14rem] leading-none text-center font-poppins uppercase">This Month.</p>
        <br />
        <div className="columns-2 space-x-5 ml-10">
          <div className="grid w-11/12 ">
            <img className="w-full h-full rounded-sm" src="assets/landing/house1.jpg" alt="" />
            <div className="grid self-end bg-[#ffffff] z-10 absolute w-1/5 h-14 justify-self-center align-self-end rounded-lg mb-5">
              <button className="grid justify-self-end border-l-2 border-[#e7e7e7] w-1/5 h-14">
                <img className="justify-self-end self-center mr-6 w-3" src="assets/landing/arrow.svg" alt="" />
              </button>
              <p className="absolute font-poppins ml-4 text-xs self-start text-[#c8c8c8] mt-1">House 1</p>
              <p className="absolute font-poppins ml-4 text-lg self-start text-[#3d3d3d] mt-4">BTN Dhira Wahyu</p>
            </div>
          </div>
          <div className="grid w-11/12 ">
            <img className="w-full h-full rounded-sm" src="assets/landing/house2.jpg" alt="" />
            <div className="grid self-end bg-[#ffffff] z-10 absolute w-1/5 h-14 justify-self-center align-self-end rounded-lg mb-5">
              <button className="grid justify-self-end border-l-2 border-[#e7e7e7] w-1/5 h-14">
                <img className="justify-self-end self-center mr-6 w-3" src="assets/landing/arrow.svg" alt="" />
              </button>
              <p className="absolute font-poppins ml-4 text-xs self-start text-[#c8c8c8] mt-1">House 2</p>
              <p className="absolute font-poppins ml-4 text-lg self-start text-[#3d3d3d] mt-4">BTN Ali</p>
            </div>
          </div>
        </div>
        <div className="columns-2 space-x-5 ml-10 mt-10 pb-5">
          <div className="grid w-11/12 ">
            <img className="w-full h-full rounded-sm" src="assets/landing/house3.jpg" alt="" />
            <div className="grid self-end bg-[#ffffff] z-10 absolute w-1/5 h-14 justify-self-center align-self-end rounded-lg mb-5">
              <button className="grid justify-self-end border-l-2 border-[#e7e7e7] w-1/5 h-14">
                <img className="justify-self-end self-center mr-6 w-3" src="assets/landing/arrow.svg" alt="" />
              </button>
              <p className="absolute font-poppins ml-4 text-xs self-start text-[#c8c8c8] mt-1">House 3</p>
              <p className="absolute font-poppins ml-4 text-lg self-start text-[#3d3d3d] mt-4">BTN Rehan</p>
            </div>
          </div>
          <div className="grid w-11/12 ">
            <img className="w-full h-full rounded-sm" src="assets/landing/house4.jpg" alt="" />
            <div className="grid self-end bg-[#ffffff] z-10 absolute w-1/5 h-14 justify-self-center align-self-end rounded-lg mb-5">
              <button className="grid justify-self-end border-l-2 border-[#e7e7e7] w-1/5 h-14">
                <img className="justify-self-end self-center mr-6 w-3" src="assets/landing/arrow.svg" alt="" />
              </button>
              <p className="absolute font-poppins ml-4 text-xs self-start text-[#c8c8c8] mt-1">House 4</p>
              <p className="absolute font-poppins ml-4 text-lg self-start text-[#3d3d3d] mt-4">BTN Rama</p>
            </div>
          </div>
        </div>

      </div>

      <section className="block">
        <div className="bg-zinc-900 flex gap-7 pb-36">
          <div>
            <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10 pr-3">
              Explore
            </h1>
            <ul>
              <li><a className="text-footer" href="#">Single house</a></li>
              <li><a className="text-footer" href="#">Multi Family</a></li>
              <li><a className="text-footer" href="#">Townhouse</a></li>
              <li><a className="text-footer" href="#">Modular Home</a></li>
              <li><a className="text-footer" href="#">Bungalow</a></li>
              <li><a className="text-footer" href="#">Ranch Home</a></li>
              <li><a className="text-footer" href="#">Condos & Co-ops</a></li>
            </ul>
          </div>
          <div>
            <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10">
              About
            </h1>
            <ul>
              <li><a className="text-footer" href="#">About Us</a></li>
              <li><a className="text-footer" href="#">Jobs</a></li>
              <li><a className="text-footer" href="#">Reviews</a></li>
              <li><a className="text-footer" href="#">Journal</a></li>
            </ul>
          </div>
          <div>
            <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10">
              Help
            </h1>
            <ul>
              <li><a className="text-footer" href="#">FAQ</a></li>
              <li><a className="text-footer" href="#">Shipping</a></li>
              <li><a className="text-footer" href="#">Returns</a></li>
              <li><a className="text-footer" href="#">Assembly</a></li>
              <li><a className="text-footer" href="#">Payment Options</a></li>
              <li><a className="text-footer" href="#">Privacy Policy</a></li>
              <li><a className="text-footer" href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10">We're here to help</h1>
            <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10">Customer Care</h1>
            <ul>
              <li><p className="text-footer" >Monday-Friday : 10.00-17.00</p></li>
              <li>
                <p className="text-footer" >Phone :
                  <a className="font-poppins font-extralight  text-zinc-300" href="#">+6281392709800</a>
                </p>
              </li>
              <li>
                <p className="text-footer" >E-mail :
                  <a className="font-poppins font-extralight  text-zinc-300" href="#">laVavela@gmal.com</a>
                </p>
              </li>
            </ul>
            <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10">Indonesian Store</h1>
            <ul>
              <li><p className="text-footer" >Monday-Friday : 09.00-18.00</p></li>
              <li><p className="text-footer" >Saturday : 10.00-17.30</p></li>
              <li><p className="text-footer pb-6" >Sunday : 12.00-17.00</p></li>
              <li><a className="text-footer" href="https://www.google.com/maps/place/Fakultas+Teknik+Unram/@-8.5871886,116.0972789,15z/data=!4m6!3m5!1s0x2dcdbf7e38d87149:0xe366299f2ddb40da!8m2!3d-8.5871886!4d116.0972789!16s%2Fg%2F11b6dg8b4w">Mataram, Indonesia</a></li>
            </ul>
          </div>
          <div>
            <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-10">Join the ride.</h1>
            <h3 className="text-white font-poppins ml-5 text-xl font-extralight mb-4 ">Sign up for our newsletter</h3>
            <input type="text" name="E-mail" className="ml-5 px-3 py-3 border shadow rounded-3xl  bg-zinc-900 w-96 font-poppins text-zinc-300 mt-5" placeholder="Enter your email here" required></input>
            <button className="px-3 py-3 border shadow rounded-3xl bg-zinc-300 static mt-5 mr-10 font-poppins">Subscribe</button>
            <section className="flex">
              <div>
                <input type="checkbox" name="Privacy-policy" className="ml-5 mt-3 h-5 w-5 bg-zinc-900 flex" value="False"></input>
              </div>
              <div>
                <p className="ml-3 mt-3 font-extralight font-poppins text-zinc-300">By signing up, I agree to the privacy policy of La Favela</p>

              </div>
            </section>
            <h1 className="text-white font-poppins ml-5 text-2xl mb-4 mt-9">Follow us on social media.</h1>
            <div className="flex">
              <a href="#"><img className="ml-5 w-8 h-8" src="/assets/logo/facebook.png" alt="facebook"></img></a>
              <a href="#"><img className="ml-5 w-8 h-8" src="/assets/logo/instagram.png" alt="facebook"></img></a>
              <a href="#"><img className="ml-5 w-8 h-8" src="/assets/logo/youtube.png" alt="facebook"></img></a>
              <a href="#"><img className="ml-5 w-8 h-8" src="/assets/logo/tiktok.png" alt="facebook"></img></a>
            </div>
          </div>
        </div>
      </section>
      <section className="flex bg-zinc-900 font-poppins m-auto">
        <div className="ml-28"></div>
        <div className="ml-96">
          <p className="text-zinc-300">Copyright</p>
        </div>
        <div>
          <img className="ml-2 mt-1" src="/assets/logo/copyright.png" alt=""></img>
        </div>
        <div>
          <p className="text-zinc-300 ml-2">La Favela. All Right Reserved</p>
        </div>
      </section>

      {/* content - end */}
    </div >
  );
}
