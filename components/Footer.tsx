// export default function Footer() {
//   return (
//     <footer className="relative z-20 p-4 text-center text-sm text-gray-600 bg-white mt-auto">
//       <p>© Gabriel E Espinosa 2025</p>
//     </footer>
//   );
// }


import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" px-6 py-10 text-sm text-zinc-500 bg-black">

      <div className="flex flex-col md:flex-row justify-between gap-6">

        {/* identity */}
        <p className="tracking-wide text-zinc-100">
          © Gabriel E Espinosa 2026
        </p>

        {/* contact layer */}
        <div className="flex flex-col md:items-end gap-3">

          <a
            href="mailto:winterbeastpdx@gmail.com"
            className="text-zinc-100 hover:text-[#e6e6e6] transition"
          >
            winterbeastpdx@gmail.com
          </a>

          <a
            href="https://www.instagram.com/winterbeastpdx/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-100 hover:text-[#e6e6e6] transition"
          >
            <FaInstagram className="w-4 h-4" />
            Instagram
          </a>

        </div>

      </div>
    </footer>
  );
}