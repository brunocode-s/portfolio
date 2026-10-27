"use client";

import { useEffect, useRef, useState } from "react";

interface LivePreviewProps {
  url: string;
  title: string;
  /** Width the site is rendered at before being scaled down to fit the card */
  viewportWidth?: number;
  /** Height the site is rendered at before being scaled down to fit the card */
  viewportHeight?: number;
}

/**
 * Renders the real, running website inside a scaled-down iframe so the card
 * shows the live site instead of a static screenshot.
 * The iframe is non-interactive (clicks go to the overlay link, which opens
 * the site in a new tab).
 */
const LivePreview = ({
  url,
  title,
  viewportWidth = 1280,
  viewportHeight = 720,
}: LivePreviewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setScale(el.clientWidth / viewportWidth);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [viewportWidth]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video overflow-hidden bg-neutral-800"
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-neutral-500 animate-pulse">
          Loading live preview…
        </div>
      )}

      {scale > 0 && (
        <iframe
          src={url}
          title={`${title} live preview`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          onLoad={() => setLoaded(true)}
          sandbox="allow-scripts allow-same-origin allow-forms"
          referrerPolicy="no-referrer"
          className={`absolute left-0 top-0 border-0 pointer-events-none origin-top-left transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: viewportWidth,
            height: viewportHeight,
            transform: `scale(${scale})`,
          }}
        />
      )}

      {/* Click-through: opens the real site instead of interacting with the preview */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} live site`}
        className="absolute inset-0 z-10"
      />
    </div>
  );
};

export default LivePreview;
