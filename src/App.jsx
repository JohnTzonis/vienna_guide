import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function MapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  );
}


function App() {
  const [count, setCount] = useState(0);
  
  const schwarzenbergCafeLink = 'https://www.google.com/maps/place/Caf%C3%A9+Schwarzenberg/@48.20174,16.3736709,18.49z/data=!3m1!5s0x476d079d0c65e7a9:0x7edf0a3a98d66d7c!4m14!1m7!3m6!1s0x476d079d700641d9:0xd68179f5c7581c65!2sCaf%C3%A9+Schwarzenberg!8m2!3d48.2017943!4d16.3738665!16s%2Fm%2F0h1f74n!3m5!1s0x476d079d700641d9:0xd68179f5c7581c65!8m2!3d48.2017943!4d16.3738665!16s%2Fm%2F0h1f74n?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D';

  const cafeDemel = 'https://www.google.com/maps/place/Demel/@48.2077925,16.3652741,15.92z/data=!4m6!3m5!1s0x476d079852ff8d89:0x765904ee1e1b2258!8m2!3d48.2085962!4d16.3672185!16s%2Fg%2F1tj5jyx8?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D';

  const hawelkaCafeLink = 'https://www.google.com/maps/place/Caf%C3%A9+Hawelka/@48.2079316,16.3697835,17z/data=!3m1!4b1!4m6!3m5!1s0x476d07992145fee5:0xf04c05a748ab1574!8m2!3d48.2079316!4d16.3697835!16zL20vMDh4XzRi?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D';

  const kleinesCafeLink = 'https://www.google.com/maps/place/Kleines+Caf%C3%A9/@48.2061573,16.3723553,15.08z/data=!4m6!3m5!1s0x476d079e597e2b1d:0x51bf27666a76795d!8m2!3d48.2065836!4d16.3743355!16s%2Fg%2F11ghxw501b?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D';

  const sancherCafeLink = 'https://www.google.com/maps/place/Caf%C3%A9+Sacher+Wien/@48.2031904,16.3676507,15.92z/data=!4m6!3m5!1s0x476d079c6e70ce23:0xdb83f04c896f79da!8m2!3d48.2039281!4d16.3696029!16s%2Fg%2F11b5wcsvwd?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D';

  const pruckelCafeLink = 'https://www.google.com/maps/place/Caf%C3%A9+Pr%C3%BCckel/@48.2075943,16.3804047,17z/data=!3m1!4b1!4m6!3m5!1s0x476d077516158fa1:0xde798876217c145a!8m2!3d48.2075943!4d16.3804047!16s%2Fg%2F122sftbq?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D';
  
  const needleBarLink = 'https://www.google.com/maps/place/Needle+Vinyl+Bar/@48.2121143,16.3688626,17z/data=!4m6!3m5!1s0x476d07a2ed1e352b:0x64ce11105f84e18e!8m2!3d48.2121143!4d16.3688626!16s%2Fg%2F11c2q_z_gd?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D';

   const onyxBarLink = 'https://www.google.com/maps/place/Onyx+Restaurant/@48.2083333,16.3716667,17z/data=!3m1!4b1!4m6!3m5!1s0x476d079f2c500731:0x17d5336e9f2ab5a1!8m2!3d48.2083333!4d16.3716667!16s%2Fg%2F1tdwzbd8?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D';

   const tachlesBarLink = 'https://www.google.com/maps/place/Tachles/@48.2156068,16.3783412,15.6z/data=!4m6!3m5!1s0x476d07a72280921f:0x92849dc8e9f661ff!8m2!3d48.215504!4d16.3798208!16s%2Fg%2F1tgxsb9j?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D';

   const barPigalleLink ='https://www.google.com/maps/place/Pigalle/@48.2128794,16.3805465,17z/data=!4m14!1m7!3m6!1s0x476d07b9c4ab696d:0xda271a0193b6d12c!2sPigalle!8m2!3d48.2128794!4d16.3805465!16s%2Fg%2F11tk6_2c8c!3m5!1s0x476d07b9c4ab696d:0xda271a0193b6d12c!8m2!3d48.2128794!4d16.3805465!16s%2Fg%2F11tk6_2c8c?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D';

   const skopicRestLink = 'https://www.google.com/maps/place/Skopik+%26+Lohn/@48.2201719,16.3767059,17z/data=!3m1!4b1!4m6!3m5!1s0x476d07af5de73fd9:0x4d8e08c6a061497e!8m2!3d48.2201719!4d16.3767059!16s%2Fg%2F1wk6ykqt?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D';

   const stadtparkLink = 'https://www.google.com/maps/place/Stadtpark/@48.2047335,16.3796601,17z/data=!3m1!4b1!4m6!3m5!1s0x476d0775d3324143:0xbf209e4513aec145!8m2!3d48.2047335!4d16.3796601!16zL20vMDR6Y3g5?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D';

  return (
    <div className='p-6 bg-gray-900 text-zinc-300'>
      <div className='mb-2'>
        <span className='text-5xl'>Vienna guide 2024</span>
      </div>
      Hotel:<span className='ml-2 text-xl hover:text-blue-400'><a href='https://www.google.com/maps/search/?api=1&query=Schnirchgasse%2011%2C%201030%20Vienna%2C%20%20Austria'>Triiple Tower Dream Apartmenes hotel</a></span>
      <div>
        {/* MUSEUMS */}
        <div className='flex flex-col gap-y-2 mt-2 pb-4 border-b border-gray-100'>
          <span className='text-3xl'>Museums</span>
          <ul className='flex flex-col justify-start gap-y-2'>
            {/* BELVEDERE */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.belvedere.at/en/visit" target="_blank">Belvedere Museum</a></span>
                <span className='mt-1 italic text-zinc-400'>Gustav Klimt</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href="https://virtualglobetrotting.com/map/belvedere/view/google/" target="_blank"><MapIcon /></a></span>
            </li>
            {/* LEOPOLD */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.leopoldmuseum.org/en" target="_blank">Leopold Museum</a></span>
                <span className='mt-1 italic text-zinc-400'>Gustav Klimt</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href="https://www.leopoldmuseum.org/en/visit/getting-here" target="_blank"><MapIcon /></a></span>
            </li>
            {/* Austrian National Library */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <span className='text-lg grow hover:text-blue-400'><a href="https://www.onb.ac.at/en/" target="_blank">Austrian National Library</a></span>
              {/* <span className='mt-1 italic text-zinc-400'>Gustav Klimt</span> */}
              <span className='mt-1.5 hover:text-blue-400'><a href="https://www.google.com/maps/place/Austrian+National+Library,+State+Hall/@48.2062609,16.3668953,17z/data=!3m1!4b1!4m6!3m5!1s0x476d0799632723f5:0x57ddf9c606b46f47!8m2!3d48.2062609!4d16.3668953!16zL20vMDZrOHRy?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><MapIcon /></a></span>
            </li>
            {/* Kunsthistorisches Museum */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://en.wikipedia.org/wiki/Kunsthistorisches_Museum" target="_blank">Kunsthistorisches</a></span>
                <span className='mt-1 italic text-zinc-400'>Paintings, cafe view</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href="https://www.google.com/maps/place/Kunsthistorisches+Museum+Wien/@48.2038016,16.3617874,17z/data=!3m1!4b1!4m6!3m5!1s0x476d079a63cf77f1:0x6f6052b56ca6b841!8m2!3d48.2038016!4d16.3617874!16zL20vMDN5eTcw?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><MapIcon /></a></span>
            </li>
            {/* Albertina museum */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.albertina.at/en/" target="_blank">Albertina museum</a></span>
                <span className='mt-1 italic text-zinc-400'>Picasso & Mone</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href="https://www.google.com/maps/place/Albertina/@48.2046992,16.3681824,17z/data=!3m1!4b1!4m6!3m5!1s0x476d079bf27e5ac1:0x66ef8a989f37deb8!8m2!3d48.2046992!4d16.3681824!16zL20vMDR6Y3Qx?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><MapIcon /></a></span>
            </li>
            {/* Hundertwasser House */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://en.wikipedia.org/wiki/Hundertwasserhaus" target="_blank">Hundertwasser House</a></span>
                <span className='mt-1 italic text-zinc-400'>Alternative art</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href="https://www.google.com/maps/place/Hundertwasser+House/@48.207337,16.3942941,17z/data=!4m14!1m7!3m6!1s0x476d0712b414b477:0x84544d7e3739819c!2sHundertwasser+House!8m2!3d48.207337!4d16.3942941!16zL20vMDVrcXM1!3m5!1s0x476d0712b414b477:0x84544d7e3739819c!8m2!3d48.207337!4d16.3942941!16zL20vMDVrcXM1?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><MapIcon /></a></span>
            </li>
            {/* House of music */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.hdm.at/en/" target="_blank">House of music</a></span>
                <span className='mt-1 italic text-zinc-400'>Interractive</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href="https://www.google.com/maps?hl=en&gl=gr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x476d079dc7fd5755:0x48afae99a1418b3d" target="_blank"><MapIcon /></a></span>
            </li>
          </ul>
        </div>
        {/* CAFES */}
        <div className='flex flex-col gap-y-2 mt-2 pb-4 border-b border-gray-100'>
          <span className='text-3xl'>Kaffehaus</span>
          <ul className='flex flex-col justify-start gap-y-2'>
            {/* Café Schwarzenberg */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.cafe-schwarzenberg.at/en/" target="_blank">Schwarzenberg</a></span>
                <span className='mt-1 italic text-zinc-400'>Wed 11, 10:30 reservation</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href={schwarzenbergCafeLink} target="_blank"><MapIcon /></a></span>
            </li>
            {/* Café Demel */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.demel.com/en/pages/cafe" target="_blank">Café Demel</a></span>
                <span className='mt-1 italic text-zinc-400'>Central spot</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href={cafeDemel} target="_blank"><MapIcon /></a></span>
            </li>
            {/* Gerstner K.u.K Hofzuckerbäcker */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.gerstner.at/reservierung/" target="_blank">Hofzuckerbäcker</a></span>
                <span className='mt-1 italic text-zinc-400'>Thu 10:30</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href='https://www.google.com/maps/place/Gerstner+K.+u.+K.+Hofzuckerb%C3%A4cker/@48.203383,16.3704336,17z/data=!3m1!4b1!4m6!3m5!1s0x476d079c5c4ce2eb:0x42c2403faf2a656e!8m2!3d48.203383!4d16.3704336!16s%2Fg%2F11b77cnsbs?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D' target="_blank"><MapIcon /></a></span>
            </li>
            {/* Café Hawelka */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://hawelka.at/en/" target="_blank">Café Hawelka</a></span>
                <span className='mt-1 italic text-zinc-400'>Central spot</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href={hawelkaCafeLink} target="_blank"><MapIcon /></a></span>
            </li>
            {/* Kleines Café */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://hawelka.at/en/" target="_blank">Kleines Café</a></span>
                <span className='mt-1 italic text-zinc-400'>Central spot</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href={kleinesCafeLink} target="_blank"><MapIcon /></a></span>
            </li>
            {/* Café Sacher */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.sacher.com/en/restaurants/cafe-sacher-wien/" target="_blank">Café Sacher</a></span>
                <span className='mt-1 italic text-zinc-400'>Central spot</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href={sancherCafeLink} target="_blank"><MapIcon /></a></span>
            </li>
            {/* Café Prückel */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.prueckel.at/en/cafe-prueckel/" target="_blank">Café Prückel</a></span>
                <span className='mt-1 italic text-zinc-400'>Central spot</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href={pruckelCafeLink} target="_blank"><MapIcon /></a></span>
            </li>
          </ul>
        </div>
        {/* BARS */}
        <div className='flex flex-col gap-y-2 mt-2 pb-4 border-b border-gray-100'>
          <span className='text-3xl'>Bars</span>
          <ul className='flex flex-col justify-start gap-y-2'>
            {/* Bar Pigalle */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <span className='text-lg grow hover:text-blue-400'><a href="https://pigalle-wien.com/" target="_blank">Bar Pigalle</a></span>
              {/* <span className='mt-1 italic text-zinc-400'></span> */}
              <span className='mt-1.5 hover:text-blue-400'><a href={barPigalleLink} target="_blank"><MapIcon /></a></span>
            </li>
            {/* Needle Vinyl Bar */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://needlevinylbar.com/" target="_blank">Needle Vinyl Bar</a></span>
                <span className='mt-1 italic text-zinc-400'>Alternative</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href={needleBarLink} target="_blank"><MapIcon /></a></span>
            </li>
            {/* Kulturcafé Tachles */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://cafe-tachles.at/" target="_blank">Kulturcafé Tachles</a></span>
                <span className='mt-1 italic text-zinc-400'>Cafe - bar</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href={tachlesBarLink} target="_blank"><MapIcon /></a></span>
            </li>
            {/* Onyx Bar */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'>Onyx Bar</span>
                <span className='mt-1 italic text-zinc-400'>Against central cathedral</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href={onyxBarLink} target="_blank"><MapIcon /></a></span>
            </li>
          </ul>
        </div>
        {/* FOOD */}
        <div className='flex flex-col gap-y-2 mt-2 pb-4 border-b border-gray-100'>
          <span className='text-3xl'>Food places</span>
          <ul className='flex flex-col justify-start gap-y-2'>
            {/* Pfarrwirt */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.pfarrwirt.com/en/" target="_blank">Pfarrwirt</a></span>
                <span className='mt-1 italic text-zinc-400'>Wed 21:00, RID: BLs6ve</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href='https://www.google.com/maps/place//@28.6472232,179.996658,14.95z/data=!4m3!3m2!1s0x476d0618f5c86a49:0xd87b4b072e46b0e1!16s%2Fg%2F1tl7mj20?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D' target="_blank"><MapIcon /></a></span>
            </li>
            {/* Glacis Beisl */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://glacisbeisl.at/en/" target="_blank">Glacis Beisl</a></span>
                <span className='mt-1 italic text-zinc-400'>Fri 21:00, RID: Nf50XAsBCw</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href='https://www.google.com/maps/place/Glacis+Beisl/@48.2031407,16.3571362,17z/data=!3m1!4b1!4m6!3m5!1s0x476d0791cbf88dd9:0x672e2e997bba5f80!8m2!3d48.2031407!4d16.3571362!16s%2Fg%2F1tj2m804?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D' target="_blank"><MapIcon /></a></span>
            </li>
            {/* Skopik & Lohn */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <span className='text-lg grow hover:text-blue-400'><a href="https://skopikundlohn.at/en/home-english/" target="_blank">Skopik & Lohn</a></span>
              {/* <span className='mt-1 italic text-zinc-400'></span> */}
              <span className='mt-1.5 hover:text-blue-400'><a href={skopicRestLink} target="_blank"><MapIcon /></a></span>
            </li>
            {/* Vienna Ribs */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.ribsofvienna.at/en/booking/" target="_blank">Vienna Ribs</a></span>
                <span className='mt-1 italic text-zinc-400'>best Schnitzel</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href='https://www.google.com/maps?hl=en&gl=gr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x476d079e6b781f1d:0x3cdce97ab8eef9f7' target="_blank"><MapIcon /></a></span>
            </li>
            {/* Centimeter */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://centimeter.at/" target="_blank">Centimeter</a></span>
                <span className='mt-1 italic text-zinc-400'>ribs & chicken nuggets</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href='https://www.google.com/maps/place/Centimeter/@48.2094618,16.3483567,14.5z/data=!4m6!3m5!1s0x476d0783eed6992f:0xce9bf85372255553!8m2!3d48.210481!4d16.3540045!16s%2Fg%2F1tdgz2hw?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D' target="_blank"><MapIcon /></a></span>
            </li>
            {/* 7Stern Bräu */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.7stern.at/en/" target="_blank">7Stern Bräu</a></span>
                <span className='mt-1 italic text-zinc-400'>ribs & chicken nuggets</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href='https://www.google.com/maps/place/7Stern+Br%C3%A4u/@48.202198,16.353508,17z/data=!3m1!4b1!4m6!3m5!1s0x476d078e064ea2a9:0xa73f1ac61940242d!8m2!3d48.202198!4d16.353508!16s%2Fg%2F11h51k15hd?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D' target="_blank"><MapIcon /></a></span>
            </li>
            {/* Brandauer Schlossbräu */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.bierig.at/schlossbrau/" target="_blank">Brandauer Schlossbräu</a></span>
                <span className='mt-1 italic text-zinc-400'>ribs</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href='https://www.google.com/maps/place/Brandauer+Schlossbr%C3%A4u/@48.1858708,16.3010277,17z/data=!3m1!4b1!4m6!3m5!1s0x476da7e3f16706b7:0xd701585fdeef7bdb!8m2!3d48.1858708!4d16.3010277!16s%2Fg%2F1td79z7w?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D' target="_blank"><MapIcon /></a></span>
            </li>
            {/* Das Columbus */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.dascolumbus.at/en/das-columbus-en/" target="_blank">Das Columbus</a></span>
                <span className='mt-1 italic text-zinc-400'>ribs</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href='https://www.google.com/maps/place/Das+Columbus/@48.1823067,16.3745353,17z/data=!3m1!4b1!4m6!3m5!1s0x476da9d0faccd3bf:0xf2b9d2aa9dd1d69c!8m2!3d48.1823067!4d16.3745353!16s%2Fg%2F1th5h7rq?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D' target="_blank"><MapIcon /></a></span>
            </li>
            {/* Schnitzelwirt */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <span className='text-lg grow hover:text-blue-400'><a href="https://www.schnitzelwirt.co.at/" target="_blank">Schnitzelwirt</a></span>
              {/* <span className='mt-1 italic text-zinc-400'></span> */}
              <span className='mt-1.5 hover:text-blue-400'><a href='https://www.google.com/maps/place/Schnitzel+Wirt/@48.2025369,16.3491982,17z/data=!3m1!4b1!4m6!3m5!1s0x476d078d7184e8db:0xd2ab08af25112f7b!8m2!3d48.2025369!4d16.3491982!16s%2Fg%2F1tdvhzkk?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D' target="_blank"><MapIcon /></a></span>
            </li>
            {/* XO-Grill */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.xo-grill.at/" target="_blank">XO-Grill</a></span>
                <span className='mt-1 italic text-zinc-400'>Street food, burgers</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href='https://www.google.com/maps/place/XO+Grill+1050/@48.1956119,16.3602136,17z/data=!3m1!4b1!4m6!3m5!1s0x476d07624e485da1:0x2d73aff694d5119d!8m2!3d48.1956119!4d16.3602136!16s%2Fg%2F11qsnnklp9?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D' target="_blank"><MapIcon /></a></span>
            </li>
          </ul>
        </div>
        {/* Other */}
        <div className='flex flex-col gap-y-2 mt-2 pb-4 border-b border-gray-100'>
          <span className='text-3xl'>Other</span>
          <ul className='flex flex-col justify-start gap-y-2'>
            {/* Comics Hutterer */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <span className='text-lg grow hover:text-blue-400'><a href="http://www.comicshutterer.at/" target="_blank">Comics Hutterer</a></span>
              {/* <span className='mt-1 italic text-zinc-400'></span> */}
              <span className='mt-1.5 hover:text-blue-400'><a href='https://www.google.com/maps?hl=en&gl=gr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x476d07a1c1a0806b:0x48f20521c7b86c69' target="_blank"><MapIcon /></a></span>
            </li>
            {/* St. Charles's Church */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.wien.info/en/see-do/sights-from-a-to-z/st-charles-church-359636" target="_blank">St. Charles's Church</a></span>
                <span className='mt-1 italic text-zinc-400'>Roof view & square</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href='https://g.co/kgs/3Pjbwem' target="_blank"><MapIcon /></a></span>
            </li>
            {/* Minoritekirche */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://www.visitingvienna.com/entertainment/minoritenkirche/" target="_blank">Minoritekirche</a></span>
                <span className='mt-1 italic text-zinc-400'>next to Cafe Central</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href='https://www.google.com/maps/place/Wiener+Minoritenkirche/@48.2095482,16.3638147,17z/data=!3m1!4b1!4m6!3m5!1s0x476d07979b405775:0x45ab2c802fe8d5c6!8m2!3d48.2095482!4d16.3638147!16zL20vMDFjOTIx?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D' target="_blank"><MapIcon /></a></span>
            </li>
            {/* Stadtpark */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://en.wikipedia.org/wiki/Stadtpark,_Vienna" target="_blank">Stadtpark</a></span>
                <span className='mt-1 italic text-zinc-400'>Straus statue</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href={stadtparkLink} target="_blank"><MapIcon /></a></span>
            </li>
            {/* Votivkirche church */}
            <li className='flex items-center gap-x-2 px-2 pt-1 pb-1.5 rounded bg-gray-700'>
              <div className='flex items-center gap-x-2 grow'>
                <span className='text-lg hover:text-blue-400'><a href="https://en.wikipedia.org/wiki/Votivkirche,_Vienna" target="_blank">Votivkirche church</a></span>
                <span className='mt-1 italic text-zinc-400'>Gothic & park</span>
              </div>
              <span className='mt-1.5 hover:text-blue-400'><a href="https://www.google.com/maps/place/Votive+Church/@48.2149485,16.3560681,13.84z/data=!4m6!3m5!1s0x476d07beed9e4ccd:0xb1cdb0d22f1d8336!8m2!3d48.2154012!4d16.3590821!16zL20vMDZ2eXFw?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><MapIcon /></a></span>
            </li>
          </ul>
        </div>
        <div className='mt-2'>
          <span>Airport's best train option is S7</span>
          <span className='mt-1.5 hover:text-blue-400'><a href='https://viennamap360.com/vienna-metro-map' target="_blank"> Metro map here</a></span>
        </div>
      </div>
    </div>
  )
}

export default App
