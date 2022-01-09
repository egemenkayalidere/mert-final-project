export let count = 0;

export const drawRect = (detections, ctx) => {
  count = detections.length;
  // Loop through each prediction
  detections.forEach((prediction) => {
    // Extract boxes and classes
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];
    if (text === "person") {
      // Set styling
      const color = "#1e1e1e";
      ctx.strokeStyle = "#" + color;
      ctx.font = "18px Arial";

      // Draw rectangles and text
      ctx.beginPath();
      ctx.fillStyle = "#" + color;
      ctx.fillText(text, x, y);
      ctx.rect(x, y, width, height);
      ctx.stroke();
    }
  });
};
