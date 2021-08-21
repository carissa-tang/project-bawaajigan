# Project Bawaajigan Website

Powered by [Gatsby](http://gatsbyjs.com/) and [Contentful](https://www.contentful.com).

## Getting started

### Prerequisites
* Node.js (v12.13 or newer)
* Git
* Gatsby command line interface (CLI) (v3 or newer)
* Visual Studio Code

### Get the source code and install dependencies.

```
git clone https://github.com/carissa-tang/project-bawaajigan.git
cd project-bawaajigan
npm install
```

If you run into errors, try 
https://stackoverflow.com/questions/66363572/vips-vips8-file-not-found-include-vips-vips8-in-ionic-cordova-in-ios .

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `npm run setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./.contentful.json`).

`npm run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.

## Deployment

See the [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).
