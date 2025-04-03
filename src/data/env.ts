import { z } from "zod";

function removeTrailingSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const env = (() => {
  const schema = z.object({
    /**
     * Hostname of the server, which cannot have a trailing slash
     * @example "http://localhost:3000"
     *
     * If not set, it will be set to the Vercel project production URL
     * @example "https://my-project.vercel.app"
     *
     * Otherwise it will throw an error
     */
    HOST: z.string().url()
  });

  let HOST = process.env.NEXT_PUBLIC_HOST;

  if (!HOST) {
    /**
     * Check if in Vercel enviroment
     * @see https://vercel.com/docs/environment-variables/system-environment-variables
     */
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) HOST = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  /**
   * Remove trailing slash from HOST
   * @example "http://localhost:3000/" => "http://localhost:3000"
   * @example "https://my-project.vercel.app/" => "https://my-project.vercel.app"
   */
  if (HOST) HOST = removeTrailingSlash(HOST);

  return schema.parse({ ...process.env, HOST });
})();
