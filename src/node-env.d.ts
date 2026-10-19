// Config files read BASE_PATH from the environment; this avoids a @types/node dependency.
declare const process: { env: Record<string, string | undefined> };
