"use client";

import { useState, ReactNode } from "react";

interface ModalProps {
  triggerLabel: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Modal({
  triggerLabel,
  title,
  description,
  children,
}: ModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mx-auto px-6 py-3 bg-buttons text-text_hero_subtitle rounded-full font-fredoka shadow-md hover:brightness-110 transition"
      >
        {triggerLabel}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[85vh] flex flex-col">
            {/* Header */}
            <div className="flex-shrink-0 px-6 py-4 border-b">
              <div className="flex items-start justify-between">
                <div className="pr-4">
                  <h2 className="text-xl font-bold">{title}</h2>
                  {description && (
                    <p className="mt-1 text-gray-600 text-sm">{description}</p>
                  )}
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition flex-shrink-0"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
