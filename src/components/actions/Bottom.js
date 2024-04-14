import React from "react";
import toast from "react-hot-toast";

function Bottom({ context }) {
  function handleClear() {
    const canvas = context;
    console.log(canvas);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function restore() {
    if (!localStorage.getItem("canvas-img")) {
      toast("You don't have any saved signatures, try creating a new one!", {
        icon: "😒",
      });
      return;
    }
    const img = new Image();
    img.src = localStorage.getItem("canvas-img");
    const ctx = context.getContext("2d");
    ctx.drawImage(img, 0, 0, context.width, context.height);
  }
  function save() {
    const dataURL = context.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "canvas_image.png";
    downloadLink.click();
    localStorage.setItem("canvas-img", dataURL);
  }
  return (
    <div className="flex justify-center align-center text-white mt-5">
      <button
        class="block w-40 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm p-3 text-center me-2 mb-2"
        onClick={() => handleClear()}
      >
        clear
      </button>
      <button
        class="block w-40 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm p-3 text-center me-2 mb-2"
        onClick={save}
      >
        {" "}
        save
      </button>
      <button
        class="block w-40 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm p-3 text-center me-2 mb-2"
        onClick={restore}
      >
        restore
      </button>
    </div>
  );
}

export default Bottom;
