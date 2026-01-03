import { z } from "zod";

function removeTrailingSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const env = (() => {
  const schema = z.object({
    /**
     * Hostname of the server, which cannot have a trailing slash
     *
     * @example "http://localhost:3000"
     *
     * If not set, it will be set to the Vercel project production URL
     *
     * @example "https://my-project.vercel.app"
     *
     * Otherwise it will throw an error
     */
    HOST: z.url()
  });

  let HOST = process.env.NEXT_PUBLIC_HOST;

  if (!HOST) {
    /**
     * Check if in Vercel enviroment
     *
     * @see https://vercel.com/docs/environment-variables/system-environment-variables
     */
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) HOST = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

    /**
     * Check if in Github actions enviroment
     *
     * @see https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#default-environment-variables
     */
    if (process.env.GITHUB_REPOSITORY) {
      const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
      HOST = `https://${owner}.github.io/${repo}`;
    }
  }

  /**
   * Remove trailing slash from HOST
   *
   * @example "http://localhost:3000/" => "http://localhost:3000"
   * @example "https://my-project.vercel.app/" => "https://my-project.vercel.app"
   */
  if (HOST) HOST = removeTrailingSlash(HOST);

  return schema.parse({ ...process.env, HOST });
})();
