const news = {
  role_name: "tester",
  permissions: {
    CREATE: true,
    READ: true,
    UPDATE: true,
    DELETE: false,
    WRITE: false,
    READWRITE: false,
  },
};

const { permissions } = news;

const customer = {
  role_name: "tester",
  permissions: {
    CREATE: true,
    READ: true,
    UPDATE: true,
    DELETE: false,
    WRITE: false,
    READWRITE: false,
  },
};

// Check for modified permissions
const modifiedPermissions = Object.keys(permissions).filter((permission) => {
  return permissions[permission] !== customer.permissions[permission];
});

console.log(modifiedPermissions);
