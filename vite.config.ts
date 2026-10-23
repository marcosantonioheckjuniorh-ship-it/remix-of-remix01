// Keep the Lovable Vite wrapper for its existing aliases, CSS, React, and TanStack setup.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  // Preserve the custom SSR error wrapper used by this application.
  tanstackStart: {
    server: { entry: "server" },
  },
  // Netlify needs Nitro's Netlify output, not the Cloudflare Workers adapter.
  cloudflare: false,
  plugins: [nitro()],
});
