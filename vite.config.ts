import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(async ({ mode }) => {
  // Dynamically build plugins array
  const plugins: PluginOption[] = [react()];
  if (mode === "development") {
    // Use await import for ESM-only package
    const { componentTagger } = await import("lovable-tagger");
    plugins.push(componentTagger() as PluginOption);
  }

  return {
    // Set base path for GitHub Pages
    base: mode === "production" ? "/christianlazodev-portfolio": "/",
    server: {
      host: "0.0.0.0",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});