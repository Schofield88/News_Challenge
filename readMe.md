# News Challenge

## Objective

Finally attempt the Makers week 7 News Challenge as a full-stack exercise.

## Setup

This is an Express-based app; to run it, you will need Node installed on your machine.

Clone the repository, then at the command line run:

`npm install`

to install dependencies. To start the server:

`npm start`

The server listens on port 3000 - [click here to view.](http://localhost:3000/)

## Design choices

The original challenge was to create a single-page app that rendered a selection of news article links gathered from the Guardian API. This was principally a demonstration of the power of JavaScript running in-browser plus programmatic DOM manipulation.

At the time, I did not have the first clue how to even start attempting this.

The challenge was also a demonstration of a "Fat Client", in which the entirety of the page ran in the front end. The app was statically-served with a basic HTTP server.

As this was a follow-up/continuation project to finally lay a ghost to rest, plus stitch everything I've learnt together, this solution to the challenge has been written full-stack as an Express.js app with all of the logic occurring server-side. The API call is made by the controller function for the /news URL, which then renders the resulting links in a Handlebars template.
