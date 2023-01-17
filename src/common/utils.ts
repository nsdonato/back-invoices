require("dotenv").config();

const getEnvVar = (name: any) => {
  const val = process.env[name];
  if (!val) {
    throw "ERROR: ENV variable not set: " + name;
  }
  return val;
};

export { getEnvVar };
