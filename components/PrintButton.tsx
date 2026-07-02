"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="bevel-out bg-panel px-4 py-1 font-display text-sm font-bold text-ink hover:text-link active:bevel-in print:hidden"
    >
      🖨 Print / save as PDF
    </button>
  );
}
