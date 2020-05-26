# Dungeon-Master-Manager
MERN Stack Group Project to assist Dungeon Masters Manage the Characters involved in game play.  

Dungeons and Dragons is a fantasy tabletop role-playing game that allows players to embark on a campaign with fellow adventurers led by the Dungeon Master. The Dungeon Master is the narrator of the campaign as well as the architect of the adventure. Players have been switching to digital versions of the game and this App is aimed to assist the Dungeon Master(DM) manage the characters involved in the game play or campaign.  By using this app, the DM will no longer have to maintain physical character sheets which become messy and hard to read over time.  The character statistics are maintained in a database and can be viewed by the DM or the player that originally created the character.  

Dungeon Master Manager allows the DM to effectively run the campaign, roll dice whenever needed, and efficiently update character stats for each turn in a given campaign.  

# Authors
* Justin Acosta
* Helen Maschmeyer
* Tim Shaffer
* Wayne Wu


## Contents
* [Deployment](#deployment)
* [Tech Used](#tech-used)
* [File Structure](#folder-structure)


## Deployment
The app is deployed to **Heroku** at the following link:  https://maws-dungeon-master-mgr.herokuapp.com/

## Tech Used

* **annyang**: a Speech Recognition library to allow for voice commands to control some actions
* axios:  promise based HTTP client for the browser and node.js
* **bcryptjs**: used to hash passwords before they are stored in the database
* body-parser: used to parse incoming request bodies in a middleware before the handlers
* classnames:  a simple JavaScript utility for conditionally joining classNames together
* concurrently: allows us to run our backend and frontend concurrently and on different ports
* dotenv: a zero-dependency module that loads environment variables from a .env file into process.env 
* express: a fast, unopinionated, minimalist web framework for node.js
* if-env: simplify development be able to run the correct script in all environments
* is-empty: check to see if a value is empty
* **jsonwebtoken**: JSON Web Token (JWT) - used for authorization
* **jwt-decode**: a browser library to decode JWTs
* mongojs: a module for mongodb that emulates the official mongodb API as much as possible
* mongoose: a mongodb object modeling tool designed to work in an asynchronous environment
* **passport**: an express-compatible authentication middleware
* **passport-jwt**: passport strategy for authenticating with a JWT. 
* react: a JavaScript library for creating user interfaces
* react-dom: a React package that serves as the entry point to the DOM and server renderers
* react-redux: designed to work with React's component model, creates wrapper components that manage the store interaction logic, automatically implements complex performance optimizations
* react-router-dom: DOM bindings for React Router
* react-scripts: scripts and configuration used by Create React App
* redux: a predictable state container for JavaScript apps 
* redux-thunk: middleware that allows you to write action creators that return a function instead of an action 
* **socket.io**: enables real-time bidirectional event-based communication
* **uifx**: simple library for playing sound effects
* **validator**: a library of string validators and sanitizers (ie. confirming passwords match)

## Folder Structure

```bash
📦Dungeon-Master-Manager
┃  📂.github
┃  ┣  📂ISSUE_TEMPLATE
┃  ┃  ┣ 📜bug_report.md
┃  ┃  ┣ 📜development-task.md
┃  ┃  ┗ 📜feature_request.md
┃  📂client
┃  ┃ ┣ 📂node_modules
┃  ┃ 📂public
┃  ┃ ┃ ┣ 📜favicon.ico
┃  ┃ ┃ ┣ 📜index.html
┃  ┃ ┃ ┣ 📜logo192.png
┃  ┃ ┃ ┣ 📜logo512.png
┃  ┃ ┃ ┣ 📜manifest.json
┃  ┃ ┃ ┗ 📜robots.txt
┃  ┃ 📂src
┃  ┃ ┣ 📂actions
┃  ┃ ┃ ┣ 📜authActions.js
┃  ┃ ┃ ┗ 📜types.js
┃  ┃ ┣ 📂assets
┃  ┃ ┃ ┗ 📂images
┃  ┃ ┃ ┃ ┣ 📜D10.png
┃  ┃ ┃ ┃ ┣ 📜D12.png
┃  ┃ ┃ ┃ ┣ 📜D20.png
┃  ┃ ┃ ┃ ┣ 📜D4.png
┃  ┃ ┃ ┃ ┣ 📜D6.png
┃  ┃ ┃ ┃ ┗ 📜D8.png
┃  ┃ ┣ 📂components
┃  ┃ ┃ ┣ 📂auth
┃  ┃ ┃ ┃ ┣ 📜Login.js
┃  ┃ ┃ ┃ ┣ 📜loginstyle.css
┃  ┃ ┃ ┃ ┗ 📜Register.js
┃  ┃ ┃ ┣ 📂campaign
┃  ┃ ┃ ┃ ┗ 📜index.js
┃  ┃ ┃ ┣ 📂Checkbox
┃  ┃ ┃ ┃ ┗ 📜index.js
┃  ┃ ┃ ┣ 📂CreateCampaign
┃  ┃ ┃ ┃ ┣ 📂sounds
┃  ┃ ┃ ┃ ┃ ┗ 📜soundfx.mp3
┃  ┃ ┃ ┃ ┣ 📜CreateCampaign.js
┃  ┃ ┃ ┃ ┗ 📜style.css
┃  ┃ ┃ ┣ 📂CreatePlayer
┃  ┃ ┃ ┃ ┣ 📂sounds
┃  ┃ ┃ ┃ ┃ ┗ 📜soundfx.mp3
┃  ┃ ┃ ┃ ┣ 📜CreatePlayer.css
┃  ┃ ┃ ┃ ┗ 📜CreatePlayer.js
┃  ┃ ┃ ┣ 📂dashboard
┃  ┃ ┃ ┃ ┣ 📜Dashboard.js
┃  ┃ ┃ ┃ ┗ 📜style.css
┃  ┃ ┃ ┣ 📂DiceRoll
┃  ┃ ┃ ┃ ┣ 📜index.js
┃  ┃ ┃ ┃ ┗ 📜style.css
┃  ┃ ┃ ┣ 📂DMcard
┃  ┃ ┃ ┃ ┣ 📂sounds
┃  ┃ ┃ ┃ ┃ ┗ 📜soundfx.mp3
┃  ┃ ┃ ┃ ┣ 📜DMcard.js
┃  ┃ ┃ ┃ ┗ 📜style.css
┃  ┃ ┃ ┣ 📂DMview
┃  ┃ ┃ ┃ ┣ 📜dmstyle.css
┃  ┃ ┃ ┃ ┗ 📜DMview.js
┃  ┃ ┃ ┣ 📂Footer
┃  ┃ ┃ ┃ ┣ 📜Footer.js
┃  ┃ ┃ ┃ ┗ 📜footerstyle.css
┃  ┃ ┃ ┣ 📂IncrementDecrementButton
┃  ┃ ┃ ┃ ┣ 📜DecrementButton.js
┃  ┃ ┃ ┃ ┣ 📜incDec.css
┃  ┃ ┃ ┃ ┗ 📜IncrementButton.js
┃  ┃ ┃ ┣ 📂Info
┃  ┃ ┃ ┃ ┣ 📜Info.css
┃  ┃ ┃ ┃ ┗ 📜Info.js
┃  ┃ ┃ ┣ 📂Instructions
┃  ┃ ┃ ┃ ┣ 📜Instructions.css
┃  ┃ ┃ ┃ ┗ 📜Instructions.js
┃  ┃ ┃ ┣ 📂layout
┃  ┃ ┃ ┃ ┗ 📜Landing.js
┃  ┃ ┃ ┣ 📂List
┃  ┃ ┃ ┃ ┣ 📜index.js
┃  ┃ ┃ ┃ ┗ 📜style.css
┃  ┃ ┃ ┣ 📂Music
┃  ┃ ┃ ┃ ┣ 📜Music.css
┃  ┃ ┃ ┃ ┗ 📜Music.js
┃  ┃ ┃ ┣ 📂Navbar
┃  ┃ ┃ ┃ ┣ 📜Navbar.js
┃  ┃ ┃ ┃ ┣ 📜NavbarLanding.js
┃  ┃ ┃ ┃ ┣ 📜NavbarLogin.js
┃  ┃ ┃ ┃ ┗ 📜style.css
┃  ┃ ┃ ┣ 📂NotFound
┃  ┃ ┃ ┃ ┗ 📜NotFound.js
┃  ┃ ┃ ┣ 📂PlayerCard
┃  ┃ ┃ ┃ ┣ 📜Playercard.js
┃  ┃ ┃ ┃ ┗ 📜style.css
┃  ┃ ┃ ┣ 📂Playerview
┃  ┃ ┃ ┃ ┣ 📜playerstyle.css
┃  ┃ ┃ ┃ ┗ 📜Playerview.js
┃  ┃ ┃ ┣ 📂private-route
┃  ┃ ┃ ┃ ┗ 📜PrivateRoute.js
┃  ┃ ┃ ┣ 📂RegisterBtn
┃  ┃ ┃ ┃ ┣ 📜index.js
┃  ┃ ┃ ┃ ┗ 📜style.css
┃  ┃ ┃ ┣ 📂SavedModal
┃  ┃ ┃ ┃ ┣ 📜index.js
┃  ┃ ┃ ┃ ┗ 📜style.css
┃  ┃ ┃ ┗ 📂Voice
┃  ┃ ┃ ┃ ┗ 📜Voice.js
┃  ┃ ┣ 📂reducers
┃  ┃ ┃ ┣ 📜authReducer.js
┃  ┃ ┃ ┣ 📜errorReducer.js
┃  ┃ ┃ ┗ 📜index.js
┃  ┃ ┣ 📂utils
┃  ┃ ┃ ┣ 📜campaign_controller.js
┃  ┃ ┃ ┣ 📜character_controller.js
┃  ┃ ┃ ┗ 📜setAuthToken.js
┃  ┃ ┣ 📜App.css
┃  ┃ ┣ 📜App.js
┃  ┃ ┣ 📜App.test.js
┃  ┃ ┣ 📜index.css
┃  ┃ ┣ 📜index.js
┃  ┃ ┣ 📜logo.svg
┃  ┃ ┣ 📜serviceWorker.js
┃  ┃ ┣ 📜setupTests.js
┃  ┃ ┗ 📜store.js
┃  ┣ 📜.env
┃  ┣ 📜package-lock.json
┃  ┣ 📜package.json
┃  ┣ 📜React README.md
┃  📂config
┃  ┃ ┣ 📜keys.js
┃  ┃ ┗ 📜passport.js
┃  📂models
┃  ┃ ┣ 📜Campaign.js
┃  ┃ ┣ 📜Character.js
┃  ┃ ┣ 📜index.js
┃  ┃ ┗ 📜User.js
┃  📂node_modules
┃  📂routes
┃   ┃ ┣ 📂api
┃   ┃ ┃  ┣ 📜campaign.js
┃   ┃ ┃  ┣ 📜character.js
┃   ┃ ┃  ┗ 📜users.js
┃   ┃ ┣ 📂user
┃   ┃ ┃  ┣ 📜index.js
┃   ┃ ┃  ┗ 📜users.js
┃   ┃ ┗ 📜index.js
┃  📂validation
┃   ┣ 📜login.js
┃   ┗ 📜register.js
┣ 📜.gitignore
┣ 📜package-lock.json
┣ 📜package.json
┣ 📜README.md
┗ 📜server.js
```
