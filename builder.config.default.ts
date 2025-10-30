import os from 'node:os'

import { defineBuilderConfig } from '@afilmory/builder'

import { env } from './env.js'

export default defineBuilderConfig(() => ({
  repo: {
    // Use remote repository as manifest and thumbnail cache
    enable: false,
    url: 'https://github.com/username/gallery-public',
  },
  storage: {
    // Storage configuration
    provider: 's3',
    bucket: 'xhka',
    region: 'auto',
    prefix: '',
    customDomain: 'https://r2.xiaohan-kaka.top',
    endpoint: "https://c9ae4045b8e842c7c968fc8a28ede85d.r2.cloudflarestorage.com"
  },
}))