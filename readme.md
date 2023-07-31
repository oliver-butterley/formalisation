# Formalisation in Rome

## Website

The site uses [vitepress](https://vitepress.dev) to generate everything from content written in markdown. Site is available at [https://www.mat.uniroma2.it/butterley/formalisation/].

### Local editing

Clone this repository by `git clone git@github.com:oliver-butterley/formalisation.git` or your favourite way to clone repos. In order to edit and preview locally, run `npm install` and then run `npm run site:dev`. Edit the markdown files and the page will update automatically. 

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

### Continuous deployment 

Changes committed to the `main` branch will be processed by a github action and then deployed to the server. Deploy to the server uses `rsync` over `ssh`. In order to prepare the keys:

1. Create a key pair `ssh-keygen -m PEM -t rsa -b 4096`
2. Upload private key as `secrets.SERVER_SSH_KEY` on github
3. Copy public key to server using `ssh-copy-id` with username and host
4. Set `vars.REMOTE_HOST` "www.mat.uniroma2.it", `vars.REMOTE_USER` "butterle", `vars.REMOTE_TARGET` "~/public_html/formalisation/"