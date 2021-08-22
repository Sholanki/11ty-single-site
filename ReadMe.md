# Intro about this website

This website contains all the features that are usually used in 11ty. 
You can see the demo site at: https://sad-shannon-2c6f9c.netlify.app/

# Installing
```bash
# From Source
git clone https://github.com/Sholanki/11ty-single-site.git
cd 11ty-single-site
```

Then install dependencies

```bash
yarn
```

# Running

Start the development server

```bash
yarn start
```

You now have an 11ty site running on your local host. You can put your posts inside `posts` folder, you can change the Introduction page in `intro.njk` file at project directory and change the `author name`, `bio`, `link` on `feed.njk` file in project directory.

# Customize

You can customize by adding your own styles in `css/components/_style.scss` file. You can add other scss files in `css/components` folder and importing it in `css/styles.scss` file. 
You can add functions and layouts under `_includes` folder

# Deploying on Netlify

To deploy to your Netlify account, hit the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Sholanki/11ty-single-site)

Change the publish directory to 'public' before deploying

# Deploying on Vercel

The one-click deploy allows you to add the Vercel application to your GitHub account to clone the `11ty-single-site` repository and deploy it automatically. Be sure to go to [Vercel](https://vercel.com/signup) and sign up for an account with Github, GitLab, or GitBucket before clicking the deploy button.

To deploy to your Vercel account, hit the button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/Sholanki/11ty-single-site)
