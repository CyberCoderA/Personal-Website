import AccentClouds from '../assets/accent_clouds.svg';
import PrimaryClouds from '../assets/primary_clouds.svg';

export default function ThemeToggle() {
  return (
    <button className="bg-[#3B69FF] h-12 w-30 flex items-center overflow-hidden inset-shadow-sm rounded-full relative inset-shadow-gray-950 group hover:cursor-pointer">

        {/* Sun */}
        <div className="bg-accent h-8 w-8 rounded-full shadow-[inset_2px_2px_2px_1px_rgba(0,0,0,0.06)] absolute left-2 z-10 transition-transform duration-300 ease-in-out group-hover:translate-x-8"></div>

        {/* Ray 1 */}
        <div className="bg-gray-100 opacity-30 h-14 w-14 rounded-full absolute -left-1 z-9 transition-transform duration-300 ease-in-out group-hover:translate-x-8"></div>

        {/* Ray 2 */}
        <div className="bg-gray-100 opacity-20 h-18 w-18 rounded-full absolute -left-1 z-6 transition-transform duration-300 ease-in-out group-hover:translate-x-6"></div>

        {/* Ray 3 */}
        <div className="bg-gray-100 opacity-15 h-22 w-22 rounded-full absolute -left-1 z-5 transition-transform duration-300 ease-in-out group-hover:translate-x-4"></div>

        {/* Ray 4 */}
        <div className="bg-gray-100 opacity-5 h-26 w-26 rounded-full absolute -left-1 z-4 transition-transform duration-300 ease-in-out group-hover:translate-x-2"></div>

        {/* Accent Clouds */}
        <img src={AccentClouds} alt="accent_clouds" className="absolute -bottom-1 -right-2 z-7"/>

        {/* Primary Clouds */}
        <img src={PrimaryClouds} alt="accent_clouds" className="absolute -bottom-0.5 left-1.5 z-8"/>
    </button>
  )
}

