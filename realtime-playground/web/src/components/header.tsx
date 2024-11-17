"use client";

import { PresetSelector } from "@/components/preset-selector";

export function Header() {
  return (
    <header className="flex flex-col lg:flex-row p-4 border rounded-t-md bg-white">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between flex-grow">
        <h2 className="text-lg font-semibold mb-2 lg:mb-0">Realtime Playground</h2>
        <div className="flex items-center justify-end space-x-2 mt-2 lg:mt-0">
          <PresetSelector />
        </div>
      </div>
    </header>
  );
}