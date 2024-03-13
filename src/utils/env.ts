export function getEnv(request: Request, metaEnv: ImportMetaEnv, name: string) {
    const env = metaEnv;

    if (!env[name])
        throw new Error(`Missing environmental variable "${name}"`);

    return env[name];
}