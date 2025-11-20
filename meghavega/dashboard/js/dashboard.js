// Simulated user object (replace with API later)
const user = {
    plan: "free",
    storage_used: 3.2 * 1e9,
    storage_limit: 5 * 1e9,
    free_expires_at: "2025-12-01",
};

// Update storage fill
function updateStorageBar() {
    const pct = (user.storage_used / user.storage_limit) * 100;
    const fill = document.getElementById("storageFill");
    fill.style.width = pct + "%";

    const text = document.getElementById("storageText");
    text.innerHTML = `${(user.storage_used/1e9).toFixed(1)} GB / ${user.storage_limit/1e9} GB`;
}

function loadFiles() {
    const list = document.getElementById("fileList");
    list.innerHTML = "";

    for (let i = 1; i <= 8; i++) {
        const div = document.createElement("div");
        div.className = "fileItem";
        div.innerHTML = `File ${i}`;
        list.appendChild(div);
    }
}

// Expiry banner (mock logic)
function updateBanner() {
    const banner = document.getElementById("expiryBanner");
    if (user.plan === "free") {
        banner.classList.remove("hidden");
        banner.textContent = "Your free 5GB trial will expire soon.";
    }
}

updateStorageBar();
updateBanner();
loadFiles();
