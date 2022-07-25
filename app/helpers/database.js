const {PrismaClient} = require('@prisma/client')

const env = process.env.NODE_ENV || 'development';

export const prisma = global.prisma || new PrismaClient(env !== '' ? {
    log: [
        // 'query',
        // 'info',
        'warn',
        'error'
    ],
} : {})

if (env !== 'production') global.prisma = prisma