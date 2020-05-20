# Dungeon-Master-Manager
MERN Stack Group Project to assist Dungeon Masters Manage the Characters involved in game play.  

Dungeons and Dragons is a fantasy tabletop role-playing game that allows players to embark on a campaign with fellow adventurers led by the Dungeon Master. The Dungeon Master is the narrator of the campaign as well as the architect of the adventure. Players have switched to a digital version of the game and this App is aimed to assist the Dungeon Master (DM).  The App will assist the DM in managing the campaign. It will help keep track of player stats, dice rolls and other various data. 

# Authors
> Justin Acosta
> Helen Maschmeyer 
> Tim Shaffer
> Wayne Wu

## Contents
* [Deployment](#deployment)
* [Tech Used](#tech-used)
* [File Structure](#folder-structure)
* [Original Design](#original-design-documents)


## Deployment
The app is deployed to **Heroku** at the following link:  

## Tech Used

* axios:  promise based HTTP client for the browser and node.js
* bcryptjs: used to hash passwords before they are stored in the database
* body-parser: used to parse incoming request bodies in a middleware before the handlers
* classnames:  a simple JavaScript utility for conditionally joining classNames together
* concurrently: allows us to run our backend and frontend concurrently and on different ports
* dotenv: a zero-dependency module that loads environment variables from a .env file into process.env 
* express: a fast, unopinionated, minimalist web framework for node.js
* is-empty: check to see if a value is empty
* **jsonwebtoken**: JSON Web Token (JWT) - used for authorization
* **jwt-decode**: a browser library to decode JWTs
* mongojs: a module for mongodb that emulates the official mongodb API as much as possible
* mongoose: a mongodb object modeling tool designed to work in an asynchronous environment
* passport: an express-compatible authentication middleware
* passport-jwt: passport strategy for authenticating with a JWT. 
* react: a JavaScript library for creating user interfaces
* react-dom: a React package that serves as the entry point to the DOM and server renderers
* react-redux: designed to work with React's component model, creates wrapper components that manage the store interaction logic, automatically implements complex performance optimizations
* react-router-dom: DOM bindings for React Router
* react-scripts: scripts and configuration used by Create React App
* redux: a predictable state container for JavaScript apps 
* redux-thunk: middleware that allows you to write action creators that return a function instead of an action 
* **validator**: a library of string validators and sanitizers (ie. confirming passwords match)

## Folder Structure

```bash
📦Dungeon-Master-Manager
┃  📦.github
┃  ┣  📂ISSUE_TEMPLATE
┃  ┃  ┣ 📜bug_report.md
┃  ┃  ┣ 📜development-task.md
┃  ┃  ┗ 📜feature_request.md
┃  📦client
┃  📦config
┃  📦controllers
┃  📦models
┃  📦node_modules
┃  📦routes
┃  📦validation
┣ 📜.gitignore
┣ 📜package-lock.json
┣ 📜package.json
┣ 📜README.md
┗ 📜server.js
```

## Original Design Documents
