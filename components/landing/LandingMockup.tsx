export function LandingMockup() {
  return (
    <div className="relative w-full max-w-[420px]">
      {/* Bezel laptop */}
      <div className="relative bg-[#161616] rounded-t-[10px] rounded-b-[6px] p-[5px] pb-[6px] shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40px] h-[8px] bg-[#161616] rounded-b-[4px] z-10" />
        {/* Écran */}
        <div className="relative aspect-[16/10] bg-bg-card rounded-[4px] overflow-hidden">
          {/* Faux contenu de site */}
          <div className="p-5">
            <div className="flex justify-between items-center mb-4">
              <div className="font-sora font-extrabold text-[12px] text-primary">
                VotreEntreprise<span className="text-accent">.</span>
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((i) => (
                  <span key={i} className="w-7 h-1.5 bg-border rounded" />
                ))}
              </div>
            </div>
            <div className="h-3.5 bg-primary rounded-md w-4/5 mb-1.5" />
            <div className="h-3.5 bg-accent rounded-md w-1/2 mb-3" />
            <div className="space-y-1 mb-3">
              <div className="h-1.5 bg-text-muted/30 rounded w-[88%]" />
              <div className="h-1.5 bg-text-muted/30 rounded w-[78%]" />
              <div className="h-1.5 bg-text-muted/30 rounded w-[68%]" />
            </div>
            <div className="h-5 bg-accent rounded w-[90px] flex items-center justify-center text-[8px] font-bold text-white">
              Commander
            </div>
            <div className="grid grid-cols-3 gap-1.5 mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-bg-light border border-border rounded p-1.5">
                  <div className="w-2.5 h-2.5 bg-accent/40 rounded-sm mb-1" />
                  <div className="h-0.5 bg-border rounded w-2/3 mb-0.5" />
                  <div className="h-0.5 bg-border rounded w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Charnière + socle */}
      <div className="h-[1.5px] bg-gradient-to-b from-[#161616] to-[#444]" />
      <div
        className="h-[8px] bg-gradient-to-b from-[#D4D7DC] to-[#8B9099]"
        style={{ clipPath: "polygon(2% 0, 98% 0, 95% 100%, 5% 100%)" }}
      />
    </div>
  );
}
