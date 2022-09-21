## [nextvel] Getting Started 😁

#### [Database ORM](https://www.prisma.io/), [Iron session](https://github.com/vvo/iron-session), [Nodemailer](https://nodemailer.com/about/),[Tailwind css](https://tailwindcss.com/),

First rename .env.example to .env & configure your environment:

```bash
git clone git@github.com:MwSpaceLLC/nextvel.git awesome.it
```

First rename .env.example to .env & configure your environment:

```dotenv
DATABASE_URL="mysql://root:toor@localhost:3306/database"
```

1) Run the development migration & install dataset as default:

```bash
npx prisma migrate dev && npm run seed admin
```

2) Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3) Deploy Helpers: install nginx, node, mariadb & pm2. After you can serve project like as below (declare port for
   proxypass):

> !! important, set port in serve.sh file

```bash
cd /var/www/{your_next_folder}

bash serve.sh # <= this file is in root dir
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
