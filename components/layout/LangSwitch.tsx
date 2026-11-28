// export default function LangSwitch() {
//   const base = "";
//   const active = "";
//   const idle = "";

//   return (
//     <div role="group" aria-label="Language">
//       <button className={`${base} ${active}`}>EN</button>
//       <button className={`${base} ${idle}`}>AR</button>
//     </div>
//   );
// }

type LangSwitchProps = {
  variant?: "light" | "dark";
};

/**
 * TODO(i18n): الأزرار شكلية حالياً (EN نشط دائماً).
 * اربطها بالـ locale عند اعتماد آلية الترجمة.
 */
export default function LangSwitch({ variant = "light" }: LangSwitchProps) {
  const isDark = variant === "dark";

  const base = "px-2.5 py-1 text-[11px] font-semibold transition-colors";
  const active = isDark
    ? "bg-brand-purple text-white"
    : "bg-navy-900 text-white";
  const idle = isDark
    ? "text-white/70 hover:text-white"
    : "text-slate-500 hover:text-navy-900";

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex overflow-hidden rounded-md border ${
        isDark ? "border-white/15" : "border-slate-200 bg-white"
      }`}
    >
      <button
        type="button"
        aria-pressed="true"
        className={`py-2 ${base} ${active}`}
      >
        EN
      </button>
      <button
        type="button"
        aria-pressed="false"
        className={`py-2 ${base} ${idle}`}
      >
        AR
      </button>
    </div>
  );
}
