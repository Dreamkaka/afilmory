import os from 'node:os'

import { defineBuilderConfig } from '@afilmory/builder'

import { env } from './env.js'

export default defineBuilderConfig(() => ({
  repo: {
    enable: false,
    url: process.env.BUILDER_REPO_URL ?? '',
    token: env.GIT_TOKEN,
  },
  storage: {
    provider: 's3',
    bucket: 'xhka',
    region: "auto",
    endpoint: "https://c9ae4045b8e842c7c968fc8a28ede85d.r2.cloudflarestorage.com",
    accessKeyId: env.S3_ACCESS_KEY_ID,
    secretAccessKey: env.S3_SECRET_ACCESS_KEY,
    prefix: "",
    customDomain: "https://r2.xiaohan-kaka.top",
    maxFileLimit: 1000,
    keepAlive: true,
    maxSockets: 64,
    connectionTimeoutMs: 5_000,
    socketTimeoutMs: 30_000,
    requestTimeoutMs: 20_000,
    idleTimeoutMs: 10_000,
    totalTimeoutMs: 60_000,
    retryMode: 'standard',
    maxAttempts: 3,
    downloadConcurrency: 16,
  },
  options: {
    defaultConcurrency: 10,
    enableLivePhotoDetection: true,
    showProgress: true,
    showDetailedStats: true,
    digestSuffixLength: 0,
  },
  logging: {
    verbose: false,
    level: 'info',
    outputToFile: false,
  },
  performance: {
    worker: {
      workerCount: os.cpus().length * 2,
      timeout: 30_000,
      useClusterMode: true,
      workerConcurrency: 2,
    },
  },
  plugins: [],
}))
