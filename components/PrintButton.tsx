"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="bg-green px-5 py-2 font-display text-xs font-bold uppercase tracking-wider text-navy transition-colors hover:bg-navy hover:text-white print:hidden"
    >
      🖨 Print / save as PDF
    </button>
  );
}
