import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function DownloadCVButton() {
  return (
    <button
      className="
        inline-flex
        rounded-full
        shadow-lg
        transition-transform
        hover:scale-105
        relative
        hover:cursor-pointer
        h-12
        md:h-15
        lg:h-20
      "
    >
      <span className="bg-[#4E6AE6] w-28 md:w-36 flex items-center justify-center text-white text-sm md:text-lg font-semibold relative z-1 rounded-full lg:w-56 lg:text-2xl">
        Download CV
      </span>

      <span className="bg-[#FFC107] w-23 md:w-29 flex pr-2 items-center justify-end absolute left-1/2 inset-0 rounded-tr-full rounded-br-full lg:w-46">
        <ArrowDownTrayIcon className="h-3/8 w-3/8 text-black lg:h-3/7 lg:w-3/7" />
      </span>
    </button>
  );
}