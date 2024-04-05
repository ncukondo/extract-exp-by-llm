import {z} from 'zod';

const apiKey = process.env.API_KEY ?? "";

const inputSchema = z.object({
  key: z.literal(apiKey),
  data: z.array(z.object({
    id:z.string(),
    content: z.string(),
  }))
});

type Input = z.infer<typeof inputSchema>;

const successResponseSchema = z.object({
  status: z.literal("success"),
  id: z.string(),
  codes: z.array(z.string()),
  url: z.string(),
});

const failureResponseSchema = z.object({
  status: z.literal("failure"),
  id: z.string(),
  message: z.string(),
});

const responseSchema = z.discriminatedUnion('status',[
  successResponseSchema,
  failureResponseSchema,
]);

const successOutputSchema = z.object({
  status: z.literal("success"),
  key: z.literal(apiKey),
  data: z.array(responseSchema)
});

const failureOutputSchema = z.object({
  status: z.literal("failure"),
  message: z.string(),
});

const outputSchema = z.discriminatedUnion('status',[
  successOutputSchema,
  failureOutputSchema,
]);

type Response = z.infer<typeof outputSchema>;
type Output = z.infer<typeof outputSchema>;

const parseInput = (input: unknown) => {
  return inputSchema.safeParse(input);
}

export {
  type Input,
  type Output,
  type Response,
  inputSchema,
  outputSchema,
  parseInput
}