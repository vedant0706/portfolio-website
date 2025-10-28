import { useRef, useEffect, useState, useMemo, useId } from "react";

const CurvedLoop = ({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 0,
  direction = "left",
  interactive = true,
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0";
  }, [marqueeText]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const pathRef = useRef(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);
  const uid = useId();
  const pathId = `curve-${uid}`;

  // Dynamically set pathD based on viewport width
  const [pathD, setPathD] = useState(`M-100,40 L1540,40`); // Initial value, will update
  const updatePathD = () => {
    const width = window.innerWidth;
    setPathD(`M-100,40 L${width + 1400},40`); // Extend path beyond viewport
  };

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);

  const textLength = spacing;
  const totalText = textLength
    ? Array(Math.ceil((window.innerWidth + 1400) / textLength) + 2)
        .fill(text)
        .join("")
    : text;
  const ready = spacing > 0;

  // Measure text width
  useEffect(() => {
    if (measureRef.current) setSpacing(measureRef.current.getComputedTextLength());
  }, [text, className]);

  // Initialize offset
  useEffect(() => {
    if (!spacing) return;
    if (textPathRef.current) {
      const initial = -spacing;
      textPathRef.current.setAttribute("startOffset", initial + "px");
      setOffset(initial);
    }
  }, [spacing]);

  // Update pathD on resize
  useEffect(() => {
    updatePathD();
    window.addEventListener("resize", updatePathD);
    return () => window.removeEventListener("resize", updatePathD);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!spacing || !ready) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        const currentOffset = parseFloat(textPathRef.current.getAttribute("startOffset") || "0");
        let newOffset = currentOffset + delta;
        const wrapPoint = spacing;
        if (newOffset <= -wrapPoint) newOffset += wrapPoint;
        if (newOffset > 0) newOffset -= wrapPoint;
        textPathRef.current.setAttribute("startOffset", newOffset + "px");
        setOffset(newOffset);
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready]);

  // Pointer interactions
  const onPointerDown = (e) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;
    const currentOffset = parseFloat(textPathRef.current.getAttribute("startOffset") || "0");
    let newOffset = currentOffset + dx;
    const wrapPoint = spacing;
    if (newOffset <= -wrapPoint) newOffset += wrapPoint;
    if (newOffset > 0) newOffset -= wrapPoint;
    textPathRef.current.setAttribute("startOffset", newOffset + "px");
    setOffset(newOffset);
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  const cursorStyle = interactive ? (dragRef.current ? "grabbing" : "grab") : "auto";

  return (
    <div
      className="flex flex-row items-center justify-center w-full px-3 sm:px-6 md:px-12"
      style={{ visibility: ready ? "visible" : "hidden", cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <div className="relative w-full">
        <svg
          className={`select-none w-full overflow-visible block h-[10px] sm:h-[6px] md:h-[10px] text-[2rem] sm:text-[2rem] md:text-[6rem] font-bold uppercase leading-none items-center justify-center ${className ?? ""}`}
          viewBox={`0 0 ${window.innerWidth + 500} 8`}
        >
          <text
            ref={measureRef}
            xmlSpace="preserve"
            style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
          >
            {text}
          </text>
          <defs>
            <path ref={pathRef} id={pathId} d={pathD} fill="none" stroke="transparent" />
          </defs>
          {ready && (
            <text xmlSpace="preserve" className="dark:fill-white text-black">
              <textPath ref={textPathRef} href={`#${pathId}`} startOffset={offset + "px"} xmlSpace="preserve">
                {totalText}
              </textPath>
            </text>
          )}
        </svg>
      </div>
    </div>
  );
};

export default CurvedLoop;