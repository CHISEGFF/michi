import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById("main-canvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#88f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Michi Homepage</h1>
      <canvas id="main-canvas" width="400" height="300" style={{ border: "1px solid #ccc" }}></canvas>
    </div>
  );
}
