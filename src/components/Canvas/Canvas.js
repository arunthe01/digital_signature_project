import React, { useEffect, useRef, useState } from "react";

function Canvas({ canvasStyles, setContext }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  //const [eraserMode, setEraserMode] = useState(false);

  useEffect(() => {
    setContext(canvasRef.current);
  }, [setContext, canvasRef]);

  //alert(canvasStyles.color);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    //console.log(canvasStyles)
    ctx.lineWidth = canvasStyles.strokewidth;
    ctx.strokeStyle = canvasStyles.color;
    ctx.fillStyle = canvasStyles.bgcolor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [canvasStyles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";

    const handleMouseDown = (event) => {
      const rect = canvas.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      setIsDrawing(true);
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      if (isDrawing) {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
    };

    // const toggleEraserMode = () => {
    //   setEraserMode(!eraserMode);
    // };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDrawing]);

  return (
    <div className="mt-2">
      <canvas
        ref={canvasRef}
        name="signature"
        width="600px"
        height="300px"
        className="bg-white border-8 border-yellow-400 shadow-md"
      />
      {/* <button
        className="eraser-button"
        onClick={() => {
          setEraserMode((prev) => !prev);
        }}
      >
        erase
      </button> */}
    </div>
  );
}

export default Canvas;
