#!/usr/bin/env node

const {PrismaClient} = require('@prisma/client');
const app = require("../../config/app");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient({
    log: [
        'query',
        'info',
        'warn',
        'error'
    ],
});

/**
 |--------------------------------------------------------------------------
 | Welcome to seeder file
 |--------------------------------------------------------------------------
 |
 | The following file prepare your system for migrate and create
 | default data in to a database;
 |
 */
(async () => {

    /*
     |--------------------------------------------------------------------------
     | Create Admin User
     |-------------------------------------------------------------------------*/
    console.log("\n======= Create Admin User =======")
    console.log(
        await prisma.admin.create({
            data: {
                role: 'root',
                name: 'Nextvel',
                email: 'info@nextvel.com',
                password: bcrypt.hashSync('nextvel', app.salt),
            }
        })
    )

})()