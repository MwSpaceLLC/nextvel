#!/usr/bin/env node

const bcrypt = require("bcryptjs");
const app = require("../../config/app");
const {prisma} = require("../../app/helpers/database");

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