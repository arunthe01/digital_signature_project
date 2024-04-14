import React from "react";

function Modifiers({ setCanvasStyles, canvasStyles }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCanvasStyles((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex Class justify-between align-center">
      <div className="mr-10">
        <label> Stroke color</label>
        <br />
        <input
          type="color"
          className="block mx-auto"
          name="color"
          value={canvasStyles.color}
          onChange={handleChange}
        ></input>
      </div>

      <div className="mr-10">
        <label> Background color</label>
        <br />
        <input
          type="color"
          className="
          block mx-auto"
          name="bgcolor"
          value={canvasStyles.bgcolor}
          onChange={handleChange}
        ></input>
      </div>

      <div>
        <label> Stroke width</label>
        <br />
        <select
          id="dropdown"
          name="strokewidth"
          value={canvasStyles.strokewidth}
          onChange={handleChange}
        >
          <option value="2">2px</option>
          <option value="6">6px</option>
          <option value="12">12px</option>
        </select>
      </div>
    </div>
  );
}

export default Modifiers;
