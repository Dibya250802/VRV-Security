// Mock data
let users = [
    { id: 1, name: "Dibya", email: "dibya@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Dearth", email: "dearth@example.com", role: "User", status: "Inactive" },
];

let roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] },
];

// Utility: Render UI
function renderUsers() {
    const userTable = document.getElementById("user-list");
    userTable.innerHTML = users
        .map(
            (user) => `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.status}</td>
            <td>
                <button onclick="editUser(${user.id})">Edit</button>
                <button class="danger" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        </tr>`
        )
        .join("");
}

function renderRoles() {
    const roleTable = document.getElementById("role-list");
    roleTable.innerHTML = roles
        .map(
            (role) => `
        <tr>
            <td>${role.id}</td>
            <td>${role.name}</td>
            <td>${role.permissions.join(", ")}</td>
            <td>
                <button onclick="editRole(${role.id})">Edit</button>
                <button class="danger" onclick="deleteRole(${role.id})">Delete</button>
            </td>
        </tr>`
        )
        .join("");
}

// Event Handlers
function addUser() {
    const name = prompt("Enter name:");
    const email = prompt("Enter email:");
    const role = prompt("Enter role:");
    users.push({
        id: users.length + 1,
        name,
        email,
        role,
        status: "Active",
    });
    renderUsers();
}

function editUser(id) {
    const user = users.find((u) => u.id === id);
    user.name = prompt("Edit name:", user.name);
    user.email = prompt("Edit email:", user.email);
    renderUsers();
}

function deleteUser(id) {
    users = users.filter((u) => u.id !== id);
    renderUsers();
}

function addRole() {
    const name = prompt("Enter role name:");
    const permissions = prompt("Enter permissions (comma-separated):").split(",");
    roles.push({ id: roles.length + 1, name, permissions });
    renderRoles();
}

function editRole(id) {
    const role = roles.find((r) => r.id === id);
    role.name = prompt("Edit role name:", role.name);
    role.permissions = prompt("Edit permissions (comma-separated):", role.permissions.join(","))
        .split(",");
    renderRoles();
}

function deleteRole(id) {
    roles = roles.filter((r) => r.id !== id);
    renderRoles();
}

// Tabs
function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach((tab) => tab.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
}

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
    renderUsers();
    renderRoles();
    showTab("users");
});
