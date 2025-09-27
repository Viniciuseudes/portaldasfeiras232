export function DecorativeShapes() {
  return (
    <>
      {/* Top left corner shapes */}
      <div className="absolute top-0 left-0 opacity-30">
        <div className="w-32 h-32 bg-brand-red/20 quarter-circle-br" />
      </div>
      <div className="absolute top-8 left-8 opacity-25">
        <div className="w-24 h-24 bg-brand-green/20 quarter-circle-br" />
      </div>

      {/* Top right corner shapes */}
      <div className="absolute top-0 right-0 opacity-30">
        <div className="w-40 h-40 bg-brand-blue/20 quarter-circle-bl" />
      </div>
      <div className="absolute top-12 right-12 opacity-25">
        <div className="w-28 h-28 bg-brand-yellow/20 quarter-circle-bl" />
      </div>

      {/* Bottom left corner shapes */}
      <div className="absolute bottom-0 left-0 opacity-30">
        <div className="w-36 h-36 bg-brand-green/20 quarter-circle-tr" />
      </div>
      <div className="absolute bottom-16 left-16 opacity-25">
        <div className="w-20 h-20 bg-brand-red/20 quarter-circle-tr" />
      </div>

      {/* Bottom right corner shapes */}
      <div className="absolute bottom-0 right-0 opacity-30">
        <div className="w-44 h-44 bg-brand-blue/20 quarter-circle-tl" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-25">
        <div className="w-32 h-32 bg-brand-yellow/20 quarter-circle-tl" />
      </div>

      {/* Scattered middle shapes for visual interest */}
      <div className="absolute top-1/4 left-1/3 opacity-15">
        <div className="w-16 h-16 bg-brand-red/20 quarter-circle-bl" />
      </div>
      <div className="absolute top-2/3 right-1/4 opacity-15">
        <div className="w-20 h-20 bg-brand-green/20 quarter-circle-tr" />
      </div>
      <div className="absolute top-1/2 left-1/5 opacity-15">
        <div className="w-12 h-12 bg-brand-yellow/20 quarter-circle-br" />
      </div>
    </>
  )
}
