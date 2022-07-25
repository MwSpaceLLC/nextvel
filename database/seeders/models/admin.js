require('dotenv').config()

const bcrypt = require("bcryptjs");
const crypto = require('crypto');

const {PrismaClient} = require('@prisma/client')
const app = require("../../../config/app");

const prisma = new PrismaClient({log: ['query']});

/**
 |--------------------------------------------------------------------------
 | Welcome to install file !!
 |--------------------------------------------------------------------------
 |
 | The following file prepare your system for migrate and create default data in to a database;
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


