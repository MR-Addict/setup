import { z } from "zod";

export const env = (() => {
  const schema = z.object({
    /**
     * Hostname of the server
     * @example "http://localhost:3000"
     *
     * If not set, it will be set to the Vercel project production URL
     * @example "https://my-project.vercel.app"
     *
     * Otherwise it will throw an error
     */
    HOST: z.string()
  });

  let HOST = process.env.NEXT_PUBLIC_HOST;

  if (!HOST) {
    /**
     * Check if in Vercel enviroment
     * @see https://vercel.com/docs/environment-variables/system-environment-variables
     */
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) HOST = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return schema.parse({ ...process.env, HOST });
})();
