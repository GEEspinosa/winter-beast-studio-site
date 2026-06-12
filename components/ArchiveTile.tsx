"use client";

import { useDirectoryToggle } from "../context/DirectoryToggleContext";

type ArchiveTileProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  onSelect: () => void;
};

export default function ArchiveTile({
  title,
//   subtitle,
  imageUrl,
  onSelect,
}: ArchiveTileProps) {
  const { highlightColor } = useDirectoryToggle();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect();
      }}
      className="group relative overflow-hidden border border-white/20 hover:border-white/60 transition"
      style={{ aspectRatio: "3 / 2" }}
    >
      {/* IMAGE */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* SOFT OVERLAY (STATE FEEDBACK ONLY) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{
          backgroundColor: highlightColor,
          mixBlendMode: "multiply",
        }}
      />

    </div>
  );
}



 {/* TEXT LAYER */}
      {/* <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-xs text-white tracking-wide">{title}</p>
        {subtitle && (
          <p className="text-[11px] text-zinc-300">{subtitle}</p>
        )}
      </div> */}