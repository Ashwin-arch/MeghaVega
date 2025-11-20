document.getElementById("uploadBtn").onclick = () =>
  document.getElementById("fileInput").click();

document.getElementById("fileInput").onchange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  document.getElementById("upload-status").textContent = "Uploading...";

  await new Promise(r => setTimeout(r, 1200)); // mock API

  document.getElementById("upload-status").textContent =
    `${file.name} uploaded successfully!`;
};
