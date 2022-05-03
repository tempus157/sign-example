import "dotenv/config";

function load(name: string) {
  const result = process.env[name];
  if (!result) {
    throw new Error(`Environment variable ${name} not found.`);
  }
  return result;
}

export const mongoURI = load("MONGO_URI");
export const jwtSecret = load("JWT_SECRET");
