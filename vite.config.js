import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { BASE } from "./src/utilities/constants";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    base: `/${BASE}/`,
    define: {
      RAPID_API_KEY: JSON.stringify(env.REACT_APP_RAPID_API_KEY),
      RAPID_API_BASE_URL: JSON.stringify(env.REACT_APP_RAPID_API_BASE_URL),
      RAPID_API_HOST: JSON.stringify(env.REACT_APP_RAPID_API_HOST)
    }
  };
});
