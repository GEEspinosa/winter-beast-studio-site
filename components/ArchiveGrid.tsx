"use client";

import ArchiveTile from "./ArchiveTile";

type Item = {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  onSelect: () => void;
};

export default function ArchiveGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <ArchiveTile
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          imageUrl={item.imageUrl}
          onSelect={item.onSelect}
        />
      ))}
    </div>
  );
}