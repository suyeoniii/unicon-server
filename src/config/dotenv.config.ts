import path from 'path';

export const env_config = {
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV === 'production'
      ? '.env.production'
      : '.env.development',
  ),
};
