import z from "zod";

const Env = z.object({
  ORIGIN_URL: z.string(),
});

const env = Env.parse(process.env);

export default env;
