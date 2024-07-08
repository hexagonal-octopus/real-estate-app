## install Prisma

npm i prisma
npx prisma init --datasource-provider <database>

example npx prisma init --datasource-provider mongodb

## Formatting Prism

Command 'Option+Shift+F' after make changes

npx prisma db push

change name database into this

before:
DATABASE_URL = "mongodb+srv://root:root190119!!@mern-proj-db.8eiwydp.mongodb.net/mern-proj-db?retryWrites=true&w=majority"

after:
DATABASE_URL = "mongodb+srv://root:root190119!!@mern-proj-db.8eiwydp.mongodb.net/mern-proj-db?retryWrites=true&w=majority&appName=mern-proj-db"

mongodb using account owlstudio.dsign@gmail.com
postman using account owlstudio.dsign@gmail.com

user:mickie
pass:mickie1234

## Create Random String Generated

on cmd do follow: `openssl rand -base64 32`
