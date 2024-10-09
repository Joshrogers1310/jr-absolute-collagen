# jr-absolute-collagen

<br>

**<h2>Pre-requisites</h2>**

**<h6>To access this store you must have the following:</h6>**

• Have an active Shopify partners account (One can be created here - [https://accounts.shopify.com/signup](https://accounts.shopify.com/signup)<br>
• Have an active Github account (One can be created here - (One can be created here - [https://github.com/signup](https://github.com/signup)<br>
• Download the GitHub Desktop App - [https://desktop.github.com/download/](https://desktop.github.com/download/)<br>
• Installed the Shopify CLI along with the required pre-requisites - (details can be found here - [https://shopify.dev/docs/api/shopify-cli](https://shopify.dev/docs/api/shopify-cli)

**<h6>To be able to develop this store you will also require:</h6>**

• A SCSS compiling tool installed within your code editor<br>
• NPM installed - details can be found here
[https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)

<br>

**<h2>Set-up steps</h2>**

**<h6>Steps to access store:</h6>**

1. Sign in to your Shopify Partners account, go to stores > Add store > Request access to store
2. Enter the store URL: **`https://jr-absolute-collagen.myshopify.com/`**
3. Select the relevant permissions required - at minimum for this test you will require acccess to Online store > Themes
4. If required add the collaborator code **`4928`** to request access
5. Once approved you will be able to access the store via your Shopify Partners account

**<h6>Steps to clone the Github Repository:</h6>**

1. Sign in to your Github account
2. Visit your dashboard and search for the repository named **`jr-absolute-collagen`**
3. Request access to this repository (if not public)
4. Once approved you will be able to clone the repository to your Github Desktop App - details for this can be found here - [https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

**<h6>Running the dev site:</h6>**

1. Open up a command-line tool and cd in to the cloned repository
2. Run the command **`shopify theme dev --store https://jr-absolute-collagen.myshopify.com`**
3. You will be prompted to login to your partners account
4. Once logged in, go back to the command-line tool and you should then be able to access the online store via the generated links
5. If prompted, the store password is **`stahth`**

**<h6>Running Cypress Test:</h6>**

1. To install Cypress using NPM, open up a command-line tool and cd in to the cloned Github repository
2. Run the command **`npm install cypress --save-dev`**
3. Once installed, to execute all tests run the command **`npx cypress run`**
