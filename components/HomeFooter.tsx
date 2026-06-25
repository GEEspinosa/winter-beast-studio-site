// export default function Footer() {
//   return (
//     <footer className="relative z-20 p-4 text-center text-sm text-gray-600 bg-white mt-auto">
//       <p>© Gabriel E Espinosa 2025</p>
//     </footer>
//   );
// }

// import { FaInstagram } from "react-icons/fa";

// export default function HomeFooter() {
//   return (
//     <footer className=" px-6 py-10 text-sm text-zinc-500 bg-black">
//       <div className="flex flex-col md:flex-row justify-between gap-6">
//         {/* identity */}
//         <p className="tracking-wide text-zinc-100">© Gabriel E Espinosa 2026</p>

//         {/* contact layer */}
//         <div className="flex flex-col md:items-end gap-3">
//           <a
//             href="mailto:winterbeastpdx@gmail.com"
//             className="text-zinc-100 hover:text-[#e6e6e6] transition"
//           >
//             winterbeastpdx@gmail.com
//           </a>

//           <a
//             href="https://www.instagram.com/winterbeastpdx/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-zinc-100 hover:text-[#e6e6e6] transition"
//           >
//             <FaInstagram className="w-4 h-4" />
//             Instagram
//           </a>
//         </div>

//         <img src="/images/header-footer/sketch-skull.webp" className="invert" />
//       </div>
//     </footer>
//   );
// }

// import { FaInstagram } from "react-icons/fa";

// export default function HomeFooter() {
//   return (
//     <footer className="bg-black border-t border-white/10">
//       <div className="max-w-6xl mx-auto px-6 py-10">
//         <div className="flex flex-col md:flex-row items-end justify-between gap-8">
//           {/* Identity */}
//           <div>
//             <p className="tracking-[0.18em] uppercase text-[11px] text-zinc-500">
//               Winterbeast
//             </p>

//             <p className="mt-2 text-[12px] text-zinc-200">© Gabriel E Espinosa 2026</p>
//           </div>

//           {/* Contact */}
//           <div className="flex flex-col md:items-end gap-3">
//             <a
//               href="mailto:winterbeastpdx@gmail.com"
//               className="text-zinc-200 text-[12px] hover:text-white transition"
//             >
//               winterbeastpdx@gmail.com
//             </a>

//             <a
//               href="https://www.instagram.com/winterbeastpdx/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-[12px] text-zinc-400 hover:text-white transition"
//             >
//               <FaInstagram className="text-[12px] w-4 h-4" />
//               Instagram
//             </a>
//           </div>

//           {/* Mark */}
//           <img
//             src="/images/header-footer/sketch-skull.webp"
//             alt=""
//             className="
//               w-12
//               h-12
//               object-contain
//               invert
//               opacity-40
//               hover:opacity-70
//               transition
//               select-none
//               pointer-events-none
//             "
//           />
//         </div>
//       </div>
//     </footer>
//   );
// }


import { FaInstagram } from "react-icons/fa";

export default function HomeFooter() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
  <p className="uppercase tracking-[0.22em] text-[12px] text-zinc-500">
    Winterbeast
  </p>

  <p className="text-[13px] text-zinc-200">
    © Gabriel E Espinosa 2026
  </p>
</div>

<div className="flex items-center gap-6">
  <a
    href="mailto:winterbeastpdx@gmail.com"
    className="text-[13px] text-zinc-200 hover:text-white transition"
  >
    winterbeastpdx@gmail.com
  </a>

  <a
    href="https://www.instagram.com/winterbeastpdx/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-[13px] text-zinc-400 hover:text-white transition"
  >
    <FaInstagram className="w-4 h-4" />
    Instagram
  </a>

  <img
    src="/images/header-footer/sketch-skull.webp"
    alt=""
    className="
      w-16
      h-16
      object-contain
      invert
      opacity-35
      hover:opacity-60
      transition
      select-none
      pointer-events-none
    "
  />
</div>
        </div>
      </div>
    </footer>
  );
}