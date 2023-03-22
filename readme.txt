HOW to create server in node
1. go to address of your folder and type in cmd  - npm init -y
2. install typescript in cmd - npm install --save-dev typescript
3. execute typescript  - npx tsc --init
4. install express - npm i express
5. install typescript with express - npm i --save-dev @types/express
6. create file named server.ts
7. type npx tcs to convert ts to js and execute code by typing node server.js
8. go to tsconfig.json and uncomment outdir and add ./dist
9. install nodemon type - npm install --save-dev nodemon
10. install ts-node - npm i -D ts-node
11. run serve with node - npx nodemon src/server.ts
12. add in package.json in scripts "start": "nodemon src/server.ts"
13. install eslint - npm i -D eslint
14. configure eslint - npx eslint --init
15. check if have a error or bad habit in your code - npx eslint . --ext .ts
16. Add in package.js scripts - "lint": "eslint . --ext .ts"


NOTE: 
1. shortcut for --save-dev is -D
2. shortcut for install is i
3. to run system type - npm start
4. to run link type - npm run lint

MONGODB
1. Go to cloud.mongodb.com and register 
2. create .env file under server folder and add MONGO_CONNECTION_STRING and PORT
3. Under server folder type - npm i dotenv
4. install invalid type - npm i invalid
5. create new folder under src named util nad create new file validateEnv.ts

MONGO + EXPRESS error handling
1. Create model folder under src and create new file notes.ts

Routers, Controllers and creating notes
1. install morgan - npm i morgan  - morgan is middleware that  will log every upcoming request

Express HTTP Error Handling
1.  install http-error to handling http errors - npm i http-errors


React Setup
1. create react app type - npx create-react-app client --template typescript
2. fix vulnerabilities - npm audit
3. install boostrap - npm install react-bootstrap bootstrap

Forms
1. install react-hook - npm i react-hook-form
2. install react-icons in front end - npm i react-icons

Install password encryptor
1. npm i bcrypt
2. npm i -D @types/bcrypt
3. install express-session for user-session - npm i express-session
4. npm i -D @types/express-session
5. install connection for mongo - npm install connect-mongo


SHIFT + ALT + O - Organize imports
SHIFT + ALT + F - Proper indention

install react Router
1. npm i react-router-dom

Username: fernandezjockey24
Password : zcpmJdj3DEmxCCRL

 