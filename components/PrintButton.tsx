"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded bg-night px-5 py-2.5 font-mono text-sm text-dawn transition-colors hover:bg-night-soft print:hidden"
    >
      Print / save as PDF
    </button>
  );
}
