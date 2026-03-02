import React, { useRef, useEffect } from 'react';

const CanvasSaver = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const saveCanvasAsImage = () => {
    // capture the visible preview elements and draw them into the canvas, then save the canvas as a PNG.
    const capture = Array.from(document.querySelectorAll<HTMLImageElement>('.preview'));
    if (!capture.length) return;

    // compute bounding box that contains all preview elements
    const rects = capture.map(el => el.getBoundingClientRect());
    const minLeft = Math.min(...rects.map(r => r.left));
    const minTop = Math.min(...rects.map(r => r.top));
    const maxRight = Math.max(...rects.map(r => r.right));
    const maxBottom = Math.max(...rects.map(r => r.bottom));

    const width = Math.max(1, Math.round(maxRight - minLeft));
    const height = Math.max(1, Math.round(maxBottom - minTop));

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    // sort elements by z-index so they are drawn in the correct stacking order
    const items = capture.map((el, i) => ({ el, rect: rects[i], z: parseInt(getComputedStyle(el).zIndex || '0') || 0 }));
    items.sort((a, b) => a.z - b.z);

    // draw each image to the canvas at the position it appears on the page
    const drawSequence = async () => {
      for (const item of items) {
        const img = new Image();
        img.src = item.el.src;
        // preserve cross-origin behavior if present
        if ((item.el as HTMLImageElement).crossOrigin) img.crossOrigin = (item.el as HTMLImageElement).crossOrigin;

        await new Promise<void>(resolve => {
          if (img.complete) return resolve();
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });

        const dx = Math.round(item.rect.left - minLeft);
        const dy = Math.round(item.rect.top - minTop);
        const dw = Math.round(item.rect.width);
        const dh = Math.round(item.rect.height);
        ctx.drawImage(img, dx, dy, dw, dh);
      }

      // export and download
      const imageURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imageURL;
      link.download = 'kates-closet-outfit.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    void drawSequence();
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        aria-hidden="true"
        style={{ display: 'none' }}
      />
      <br />
      {/* Button to trigger the save function */}
      <button onClick={saveCanvasAsImage}>
        Save Canvas as PNG
      </button>
    </div>
  );
};

export default CanvasSaver;