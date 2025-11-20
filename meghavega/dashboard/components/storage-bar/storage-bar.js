const used = 2;
const total = 5;

document.getElementById("storage-fill").style.width = (used/total * 100) + "%";
document.getElementById("storage-text").textContent = `${used}GB / ${total}GB used`;
