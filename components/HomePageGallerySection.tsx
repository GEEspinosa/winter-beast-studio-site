// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { homePageImages } from "@/lib/homePageImages";

// export default function HomePageGallerySection() {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

//   const closeModal = useCallback(() => {
//     setSelectedIndex(null);
//   }, []);

//   const previousImage = useCallback(() => {
//     setSelectedIndex((current) => {
//       if (current === null) return null;

//       return current === 0
//         ? homePageImages.length - 1
//         : current - 1;
//     });
//   }, []);

//   const nextImage = useCallback(() => {
//     setSelectedIndex((current) => {
//       if (current === null) return null;

//       return current === homePageImages.length - 1
//         ? 0
//         : current + 1;
//     });
//   }, []);

//   useEffect(() => {
//     if (selectedIndex === null) {
//       document.body.style.overflow = "";
//       return;
//     }

//     document.body.style.overflow = "hidden";

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//       if (e.key === "ArrowLeft") previousImage();
//       if (e.key === "ArrowRight") nextImage();
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [selectedIndex, closeModal, previousImage, nextImage]);

//   const selectedImage =
//     selectedIndex !== null
//       ? homePageImages[selectedIndex]
//       : null;

//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-16">
//       {/* HEADER */}
//       <p className="max-w-6xl mx-auto mt-6 text-[20px] uppercase tracking-[0.22em] mb-10">
//         Gallery
//       </p>

//       <div className="max-w-6xl mx-auto mt-6 text-[12px] uppercase tracking-[0.18em] text-zinc-400">
//         Scanned from 35mm negatives
//       </div>

//       {/* GRID */}
//       <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-3 mt-8">
//         {homePageImages.map((src, index) => (
//           <div
//             key={src}
//             className="mb-3 break-inside-avoid p-[2px] cursor-pointer"
//             onClick={() => setSelectedIndex(index)}
//           >
//             <img
//               src={src}
//               alt=""
//               className="w-full h-auto block hover:invert transition"
//             />
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6"
//           onClick={closeModal}
//         >
//           <div
//             className="
//               relative
//               w-[min(1200px,95vw)]
//               max-h-[92vh]
//               bg-black
//               text-[#e6e6e6]
//               border border-white/10
//               overflow-hidden
//             "
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* FRAME */}
//             <div className="absolute inset-2 border border-white/10 pointer-events-none" />

//             {/* CLOSE */}
//             <button
//               onClick={closeModal}
//               aria-label="Close modal"
//               className="
//                 absolute
//                 top-5
//                 right-5
//                 w-10
//                 h-10
//                 flex
//                 items-center
//                 justify-center
//                 text-zinc-500
//                 hover:text-white
//                 transition
//                 z-30
//                 leading-none
//               "
//             >
//               <span className="text-4xl">×</span>
//             </button>

//             {/* PREVIOUS */}
//             <button
//               onClick={previousImage}
//               aria-label="Previous image"
//               className="
//                 absolute
//                 left-4
//                 md:left-6
//                 top-1/2
//                 -translate-y-1/2
//                 text-5xl
//                 text-zinc-600
//                 hover:text-white
//                 transition
//                 z-30
//                 leading-none
//               "
//             >
//               ‹
//             </button>

//             {/* NEXT */}
//             <button
//               onClick={nextImage}
//               aria-label="Next image"
//               className="
//                 absolute
//                 right-4
//                 md:right-6
//                 top-1/2
//                 -translate-y-1/2
//                 text-5xl
//                 text-zinc-600
//                 hover:text-white
//                 transition
//                 z-30
//                 leading-none
//               "
//             >
//               ›
//             </button>

//             {/* CONTENT */}
//             <div
//               className="
//                 relative
//                 p-8
//                 md:p-10
//                 grid
//                 grid-cols-1
//                 md:grid-cols-[1fr_220px]
//                 gap-8
//                 items-center
//                 max-h-[92vh]
//                 overflow-y-auto
//               "
//             >
//               {/* IMAGE */}
//               <div className="flex items-center justify-center px-8 md:px-12">
//                 <img
//                   src={selectedImage}
//                   alt=""
//                   className="
//                     max-h-[78vh]
//                     max-w-full
//                     w-auto
//                     object-contain
//                   "
//                 />
//               </div>

//               {/* INFO */}
//               <div className="mr-8 md:mr-12 self-end">
//                 <div className="space-y-5 text-[11px] uppercase tracking-[0.18em]">
//                   <div className="border-t border-white/10 pt-4">
//                     <p className="text-zinc-500 mb-1">
//                       Winterbeast Archive
//                     </p>

//                     <p>
//                       {(selectedIndex ?? 0) + 1} /{" "}
//                       {homePageImages.length}
//                     </p>
//                   </div>

//                   <div className="border-t border-white/10 pt-4">
//                     <p className="text-zinc-500 mb-1">
//                       Format
//                     </p>

//                     <p>35mm Scan</p>
//                   </div>

//                   <div className="border-t border-white/10 pt-4">
//                     <p className="text-zinc-500 mb-1">
//                       Context
//                     </p>

//                     <p>Field Documentation</p>
//                   </div>

//                   <div className="border-t border-white/10 pt-4">
//                     <p className="text-zinc-500 mb-1">
//                       Navigation
//                     </p>

//                     <p>← → Arrow Keys</p>
//                     <p>Esc to Close</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }



// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { homePageImages } from "@/lib/homePageImages";

// export default function HomePageGallerySection() {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

//   const closeModal = useCallback(() => {
//     setSelectedIndex(null);
//   }, []);

//   const previousImage = useCallback(() => {
//     setSelectedIndex((current) => {
//       if (current === null) return null;
//       return current === 0 ? homePageImages.length - 1 : current - 1;
//     });
//   }, []);

//   const nextImage = useCallback(() => {
//     setSelectedIndex((current) => {
//       if (current === null) return null;
//       return current === homePageImages.length - 1 ? 0 : current + 1;
//     });
//   }, []);

//   useEffect(() => {
//     if (selectedIndex === null) {
//       document.body.style.overflow = "";
//       return;
//     }

//     document.body.style.overflow = "hidden";

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//       if (e.key === "ArrowLeft") previousImage();
//       if (e.key === "ArrowRight") nextImage();
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [selectedIndex, closeModal, previousImage, nextImage]);

//   const selectedImage =
//     selectedIndex !== null ? homePageImages[selectedIndex] : null;

//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-16">
//       {/* HEADER */}
//       <p className="max-w-6xl mx-auto mt-6 text-[20px] uppercase tracking-[0.22em] mb-10">
//         Gallery
//       </p>

//       <div className="max-w-6xl mx-auto text-[12px] uppercase tracking-[0.18em] text-zinc-400">
//         Scanned from 35mm negatives
//       </div>

//       {/* GRID */}
//       <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-3 mt-8">
//         {homePageImages.map((src, index) => (
//           <div
//             key={src}
//             className="mb-3 break-inside-avoid p-[2px] cursor-pointer"
//             onClick={() => setSelectedIndex(index)}
//           >
//             <img
//               src={src}
//               alt=""
//               className="w-full h-auto block hover:invert transition"
//             />
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {selectedImage && selectedIndex !== null && (
//         <div
//           className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6"
//           onClick={closeModal}
//         >
//           <div
//             className="
//               relative
//               w-[min(1200px,95vw)]
//               max-h-[92vh]
//               bg-black
//               border border-white/10
//               overflow-hidden
//             "
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* frame */}
//             <div className="absolute inset-2 border border-white/10 pointer-events-none" />

//             {/* CLOSE */}
//             <button
//               onClick={closeModal}
//               className="
//                 absolute top-4 right-4 md:top-6 md:right-6
//                 text-4xl leading-none
//                 text-zinc-500 hover:text-white
//                 transition z-30
//               "
//             >
//               ×
//             </button>

//             {/* LEFT */}
//             <button
//               onClick={previousImage}
//               className="
//                 absolute left-2 md:left-4
//                 top-1/2 -translate-y-1/2
//                 text-5xl text-zinc-600 hover:text-white
//                 transition z-30 px-2
//               "
//             >
//               ‹
//             </button>

//             {/* RIGHT */}
//             <button
//               onClick={nextImage}
//               className="
//                 absolute right-2 md:right-4
//                 top-1/2 -translate-y-1/2
//                 text-5xl text-zinc-600 hover:text-white
//                 transition z-30 px-2
//               "
//             >
//               ›
//             </button>

//             {/* CONTENT GRID */}
//             <div
//               className="
//                 grid
//                 grid-cols-1
//                 md:grid-cols-[1fr_200px]
//                 gap-6 md:gap-10
//                 p-6 md:p-10
//                 items-center
//               "
//             >
//               {/* IMAGE */}
//               <div className="flex items-center justify-center px-8 md:px-10">
//                 <img
//                   src={selectedImage}
//                   alt=""
//                   className="
//                     max-h-[78vh]
//                     max-w-[calc(100vw-180px)]
//                     md:max-w-full
//                     object-contain
//                   "
//                 />
//               </div>

//               {/* INFO */}
//               <div className="self-end text-[11px] uppercase tracking-[0.18em] text-zinc-400 space-y-4">
//                 <div className="text-zinc-500">
//                   {(selectedIndex + 1).toString().padStart(2, "0")} /{" "}
//                   {homePageImages.length.toString().padStart(2, "0")}
//                 </div>

//                 <div className="text-zinc-300 normal-case tracking-normal leading-relaxed">
//                   Winterbeast documentation
//                   <br />
//                   35mm field capture
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }



// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { homePageGalleryImageData } from "@/lib/homePageGalleryImageData";

// export default function HomePageGallerySection() {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

//   const closeModal = useCallback(() => {
//     setSelectedIndex(null);
//   }, []);

//   const previousImage = useCallback(() => {
//     setSelectedIndex((current) => {
//       if (current === null) return null;
//       return current === 0
//         ? homePageGalleryImageData.length - 1
//         : current - 1;
//     });
//   }, []);

//   const nextImage = useCallback(() => {
//     setSelectedIndex((current) => {
//       if (current === null) return null;
//       return current === homePageGalleryImageData.length - 1
//         ? 0
//         : current + 1;
//     });
//   }, []);

//   useEffect(() => {
//     if (selectedIndex === null) {
//       document.body.style.overflow = "";
//       return;
//     }

//     document.body.style.overflow = "hidden";

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//       if (e.key === "ArrowLeft") previousImage();
//       if (e.key === "ArrowRight") nextImage();
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [selectedIndex, closeModal, previousImage, nextImage]);

//   const selectedImage =
//     selectedIndex !== null
//       ? homePageGalleryImageData[selectedIndex]
//       : null;

//   return (
//     <section className="px-6 md:px-12 lg:px-20 py-16">
//       {/* HEADER */}
//       <p className="max-w-6xl mx-auto mt-6 text-[20px] uppercase tracking-[0.22em] mb-10">
//         Gallery
//       </p>

//       <div className="max-w-6xl mx-auto text-[12px] uppercase tracking-[0.18em] text-zinc-400">
//         Scanned from 35mm negatives
//       </div>

//       {/* GRID */}
//       <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-3 mt-8">
//         {homePageGalleryImageData.map((image, index) => (
//           <div
//             key={image.url}
//             className="mb-3 break-inside-avoid p-[2px] cursor-pointer"
//             onClick={() => setSelectedIndex(index)}
//           >
//             <img
//               src={image.url}
//               alt={image.description ?? ""}
//               className="w-full h-auto block hover:invert transition"
//             />
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {selectedImage && selectedIndex !== null && (
//         <div
//           className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6"
//           onClick={closeModal}
//         >
//           <div
//             className="
//               relative
//               w-[min(1200px,95vw)]
//               max-h-[92vh]
//               bg-black
//               border border-white/10
//               overflow-hidden
//             "
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* frame */}
//             <div className="absolute inset-2 border border-white/10 pointer-events-none" />

//             {/* CLOSE */}
//             <button
//               onClick={closeModal}
//               className="
//                 absolute top-4 right-4 md:top-6 md:right-6
//                 text-4xl leading-none
//                 text-zinc-500 hover:text-white
//                 transition z-30
//               "
//             >
//               ×
//             </button>

//             {/* LEFT */}
//             <button
//               onClick={previousImage}
//               className="
//                 absolute left-2 md:left-4
//                 top-1/2 -translate-y-1/2
//                 text-5xl text-zinc-600 hover:text-white
//                 transition z-30 px-2
//               "
//             >
//               ‹
//             </button>

//             {/* RIGHT */}
//             <button
//               onClick={nextImage}
//               className="
//                 absolute right-2 md:right-4
//                 top-1/2 -translate-y-1/2
//                 text-5xl text-zinc-600 hover:text-white
//                 transition z-30 px-2
//               "
//             >
//               ›
//             </button>

//             {/* CONTENT */}
//             <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 md:gap-10 p-6 md:p-10 items-center">
//               {/* IMAGE */}
//               <div className="flex items-center justify-center px-8 md:px-10">
//                 <img
//                   src={selectedImage.url}
//                   alt={selectedImage.description ?? ""}
//                   className="max-h-[78vh] max-w-[calc(100vw-180px)] md:max-w-full object-contain"
//                 />
//               </div>

//               {/* INFO */}
//               <div className="self-end text-[11px] uppercase tracking-[0.18em] text-zinc-400 space-y-4">
//                 {selectedImage.project && (
//                   <div className="border-t border-white/10 pt-4">
//                     <p>{selectedImage.project}</p>
//                   </div>
//                 )}

//                 {selectedImage.date && (
//                   <div className="border-t border-white/10 pt-4">
//                     <p>{selectedImage.date}</p>
//                   </div>
//                 )}

//                 {selectedImage.description && (
//                   <div className="border-t border-white/10 pt-4">
//                     <p className="normal-case tracking-normal leading-relaxed text-zinc-300">
//                       {selectedImage.description}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


"use client";

import { useState, useEffect, useCallback } from "react";
import { homePageGalleryImageData } from "@/lib/homePageGalleryImageData";

export default function HomePageGallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const previousImage = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return current === 0
        ? homePageGalleryImageData.length - 1
        : current - 1;
    });
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return current === homePageGalleryImageData.length - 1
        ? 0
        : current + 1;
    });
  }, []);

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, closeModal, previousImage, nextImage]);

  const selectedImage =
    selectedIndex !== null
      ? homePageGalleryImageData[selectedIndex]
      : null;

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16">
      {/* HEADER */}
      <p className="max-w-6xl mx-auto mt-6 text-[20px] uppercase tracking-[0.22em] mb-10">
        Gallery
      </p>

      <div className="max-w-6xl mx-auto text-[12px] uppercase tracking-[0.18em] text-zinc-400">
        Scanned from 35mm negatives
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-3 mt-8">
        {homePageGalleryImageData.map((image, index) => (
          <div
            key={image.url}
            className="mb-3 break-inside-avoid p-[2px] cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={image.url}
              alt={image.description ?? ""}
              className="w-full h-auto block hover:invert transition"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6"
          onClick={closeModal}
        >
          {/* IMPORTANT: this is now the scroll container */}
          <div
            className="
              relative
              w-[min(1200px,95vw)]
              max-h-[92vh]
              bg-black
              border border-white/10
              overflow-hidden
              flex flex-col
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* frame */}
            <div className="absolute inset-2 border border-white/10 pointer-events-none" />

            {/* CLOSE */}
            <button
              onClick={closeModal}
              className="
                absolute top-4 right-4 md:top-6 md:right-6
                text-4xl leading-none
                text-zinc-500 hover:text-white
                transition z-30
              "
            >
              ×
            </button>

            {/* LEFT */}
            <button
              onClick={previousImage}
              className="
                absolute left-2 md:left-4
                top-1/2 -translate-y-1/2
                text-5xl text-zinc-600 hover:text-white
                transition z-30 px-2
              "
            >
              ‹
            </button>

            {/* RIGHT */}
            <button
              onClick={nextImage}
              className="
                absolute right-2 md:right-4
                top-1/2 -translate-y-1/2
                text-5xl text-zinc-600 hover:text-white
                transition z-30 px-2
              "
            >
              ›
            </button>

            {/* SCROLL AREA (THIS FIXES YOUR ISSUE) */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 md:gap-10 p-6 md:p-10 items-start">
                {/* IMAGE */}
                <div className="flex items-center justify-center px-8 md:px-10">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.description ?? ""}
                    className="max-h-[78vh] max-w-full object-contain"
                  />
                </div>

                {/* INFO */}
                <div className="self-start text-[11px] uppercase tracking-[0.18em] text-zinc-400 space-y-4">
                  {selectedImage.project && (
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-zinc-300 normal-case tracking-normal">
                        {selectedImage.project}
                      </p>
                    </div>
                  )}

                  {selectedImage.date && (
                    <div className="border-t border-white/10 pt-4">
                      <p>{selectedImage.date}</p>
                    </div>
                  )}

                  {selectedImage.description && (
                    <div className="border-t border-white/10 pt-4">
                      <p className="normal-case tracking-normal leading-relaxed text-zinc-300">
                        {selectedImage.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}