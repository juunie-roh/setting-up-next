/* eslint-disable import/prefer-default-export */
import { createEnv } from '@t3-oss/env-nextjs';
// import { z } from 'zod';

export const Env = createEnv({
  server: {},
  client: {},
  runtimeEnv: {},
});
