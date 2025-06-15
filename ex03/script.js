let todos = [];

// Load from cookie on start
window.onload = () => {
    const saved = getCookie("todos");
    if (saved) {
        todos = JSON.parse(saved);
        todos.forEach(text => addToDOM(text));
    }
};

// Create new todo
document.getElementById("new-btn").onclick = () => {
    const text = prompt("Enter your new TO DO:");
    if (text && text.trim() !== "") {
        todos.unshift(text);
        updateCookies();
        addToDOM(text);
    }
};

// Add to DOM
function addToDOM(text) {
    const ftList = document.getElementById("ft_list");
    const div = document.createElement("div");
    div.textContent = text;
    div.onclick = () => {
        if (confirm("Do you want to delete this TO DO?")) {
            ftList.removeChild(div);
            todos = todos.filter(item => item !== text);
            updateCookies();
        }
    };
    ftList.insertBefore(div, ftList.firstChild);
}

// Update cookie
function updateCookies() {
    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/";
}

// Read cookie
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const [key, value] = c.split("=");
        if (key === name) return decodeURIComponent(value);
    }
    return null;
}
