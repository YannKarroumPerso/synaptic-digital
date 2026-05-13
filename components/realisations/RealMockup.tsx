type MockupStyle = "boulangerie" | "conseil" | "boutique";

interface RealMockupProps {
  style: MockupStyle;
  client: string;
  size?: "small" | "large";
}

export function RealMockup({ style, client, size = "small" }: RealMockupProps) {
  return (
    <div className={`relative bg-bg-warm border-b border-border overflow-hidden ${size === "large" ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
      <div className="bg-bg-light px-3 py-2 flex gap-1 border-b border-border">
        <span className="w-2 h-2 rounded-full bg-[#D9D5CC]" />
        <span className="w-2 h-2 rounded-full bg-[#D9D5CC]" />
        <span className="w-2 h-2 rounded-full bg-[#D9D5CC]" />
      </div>
      <div className={`p-4 h-full flex flex-col ${size === "large" ? "p-6" : ""} ${style === "boulangerie" ? "bg-gradient-to-br from-[#FFF8F0] to-[#FAEAD9] text-[#5B3A1F]" : style === "conseil" ? "bg-gradient-to-br from-[#F4F5F8] to-[#E5E9F2] text-[#14213D]" : "bg-gradient-to-br from-[#FAF0F0] to-[#F3E0E0] text-[#6B2A2A]"}`}>
        {style === "boulangerie" && (
          <>
            <div className={`font-sora font-bold mb-1 ${size === "large" ? "text-[22px]" : "text-[14px]"}`}>{client}</div>
            <div className={`italic text-[#8B5A2B] mb-2 ${size === "large" ? "text-[13px]" : "text-[9px]"}`}>Pain au levain · Pâtisserie maison</div>
            <div className={`inline-block bg-[#8B5A2B] text-white rounded-full self-start ${size === "large" ? "text-xs px-4 py-2 mt-2" : "text-[9px] px-2.5 py-1"}`}>
              Commander en ligne
            </div>
            <div className="grid grid-cols-3 gap-1.5 mt-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`bg-[#8B5A2B]/15 rounded ${size === "large" ? "h-12" : "h-6"}`} />
              ))}
            </div>
          </>
        )}
        {style === "conseil" && (
          <>
            <div className={`font-sora font-bold mb-1 ${size === "large" ? "text-[22px]" : "text-[13px]"}`}>{client}</div>
            <div className={`text-[#4B5563] mb-3 ${size === "large" ? "text-[13px]" : "text-[9px]"}`}>Cabinet conseil en stratégie</div>
            <div className="grid grid-cols-3 gap-1.5 mt-auto text-center">
              {[
                { v: "15", l: "ans" },
                { v: "200+", l: "missions" },
                { v: "96%", l: "fidélité" },
              ].map((s) => (
                <div
                  key={s.l}
                  className={`bg-white rounded-md text-[#6B7280] flex flex-col items-center border border-gray-200 ${size === "large" ? "p-3 text-xs" : "py-1.5 px-1 text-[9px]"}`}
                >
                  <strong className={`font-sora font-bold text-[#14213D] ${size === "large" ? "text-base" : "text-[12px]"}`}>
                    {s.v}
                  </strong>
                  {s.l}
                </div>
              ))}
            </div>
          </>
        )}
        {style === "boutique" && (
          <>
            <div className={`font-sora font-bold italic ${size === "large" ? "text-[22px]" : "text-[14px]"} mb-0.5`}>{client}</div>
            <div className={`text-[#8B4444] mb-2.5 ${size === "large" ? "text-[13px]" : "text-[9px]"}`}>Mode artisanale</div>
            <div className="grid grid-cols-2 gap-1 mt-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`bg-[#8B4444]/15 rounded ${size === "large" ? "h-14" : "h-7"}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
