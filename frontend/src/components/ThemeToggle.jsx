import AccentClouds from '../assets/accent_clouds.svg';
import PrimaryClouds from '../assets/primary_clouds.svg';

export default function ThemeToggle({ isDark = false, onToggle = () => {} }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label="Toggle dark mode"
      className={`h-8 md:h-12 w-22 md:w-30 flex items-center overflow-hidden rounded-2xl md:rounded-full relative inset-shadow-sm group hover:cursor-pointer transition-colors duration-300 ${isDark ? 'bg-slate-800 inset-shadow-gray-950' : 'bg-[#3B69FF] inset-shadow-gray-950'}`}
    >
        {/* Sun */}
        <div
          className={`h-6 w-6 md:h-8 md:w-8 rounded-full shadow-[inset_2px_2px_2px_1px_rgba(0,0,0,0.06)] absolute left-2 z-10 transition-all duration-300 ease-in-out ${isDark ? 'bg-gray-400' : 'bg-accent'}`}
          style={{ transform: isDark ? 'translateX(3.75rem)' : 'translateX(0)' }}
        ></div>

        {/* Ray 1 */}
        <div className="bg-gray-100 opacity-30 h-12 w-12 md:h-14 md:w-14 rounded-full absolute -left-1 z-9 transition-transform duration-300 ease-in-out" style={{ transform: isDark ? 'translateX(3.75rem)' : 'translateX(0)' }}></div>

        {/* Ray 2 */}
        <div className="bg-gray-100 opacity-20 h-14 w-14 md:h-18 md:w-18 rounded-full absolute -left-1 z-6 transition-transform duration-300 ease-in-out" style={{ transform: isDark ? 'translateX(3.25rem)' : 'translateX(0)' }}></div>

        {/* Ray 3 */}
        <div className="bg-gray-100 opacity-15 h-16 w-16 md:h-22 md:w-22 rounded-full absolute -left-1 z-5 transition-transform duration-300 ease-in-out" style={{ transform: isDark ? 'translateX(2.75rem)' : 'translateX(0)' }}></div>

        {/* Ray 4 */}
        <div className="bg-gray-100 opacity-5 h-18 w-18 md:h-26 md:w-26 rounded-full absolute -left-1 z-4 transition-transform duration-300 ease-in-out" style={{ transform: isDark ? 'translateX(2rem)' : 'translateX(0)' }}></div>

        {/* Accent Clouds */}
        <img src={AccentClouds} alt="accent_clouds" className="absolute -bottom-1 -right-2 z-7"/>

        {/* Primary Clouds */}
        <img src={PrimaryClouds} alt="accent_clouds" className="absolute -bottom-0.5 left-1.5 z-8"/>
    </button>
  )
}

