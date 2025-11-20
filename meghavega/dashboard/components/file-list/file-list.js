const files = [
  { name: "project.pdf", size: "1.2MB" },
  { name: "photo.png", size: "820KB" },
  { name: "notes.txt", size: "4KB" }
];

const container = document.getElementById("files");

files.forEach(file => {
  const div = document.createElement("div");
  div.className = "file-item";
  div.innerHTML = `
    <img src="../../assets/icons/file.svg" width="24">
    <span class="file-name">${file.name}</span>
    <span>${file.size}</span>
  `;
  container.appendChild(div);
});
