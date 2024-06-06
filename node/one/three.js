import _ from "lodash";

console.log(typeof window);


const old = {
  role_name: "T7",
  permissions: {
    CREATE: false,
    READ: true,
    UPDATE: false,
    DELETE: false,
    WRITE: true,
    READWRITE: false,
  },
};

const news = {
  role_name: "T7",
  permissions: {
    CREATE: true,
    READ: true,
    UPDATE: false,
    DELETE: false,
    WRITE: true,
    READWRITE: false,
  },
};

// Function to compare permissions objects using lodash isEqual
function arePermissionsEqual(oldPermissions, newPermissions) {
  return _.isEqual(oldPermissions, newPermissions);
}

// Extract permissions objects from old and new objects
const oldPermissions = old.permissions;
const newPermissions = news.permissions;

// Check if permissions are equal
const permissionsEqual = arePermissionsEqual(oldPermissions, newPermissions);

console.log("Permissions are equal:", permissionsEqual);


