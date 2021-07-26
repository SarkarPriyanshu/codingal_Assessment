# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Problem Statement

<p align='center'></p>

Assessment Part-1:
https://sarkarpriyanshu.github.io/codingal_Assessment/

Assessment Part-2:
https://codesandbox.io/s/infinite-scroll-ckj8g

Design:
1. Create a responsive navbar. The navbar should have the following representation:
● Normal view:
● Mobile view:
2. The navbar should have a countdown timer which should start at 10 minutes.
3. The navbar should have an end class button, if a user clicks on it, a modal will open
and should work as in this video: Link of the video
4. When the user clicks the ‘End Class’ button in the modal, the modal should be closed
and the timer should stop in the navbar.
5. If the user clicks on the ‘Cancel button’ in the modal, the modal should close and the
timer should keep running.
6. The whole layout should be mobile responsive.
7. Think and implement the dropdown which should open when the 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run compile:sass`

**Note: this is a added script to compile sass into css file!**

It simply compile the sass into css which is attached to index.js.

All the basic setting are in base folder inside Sass file,typography is inside typography file inside Sass/base folder.The styling related to a component is created seperately so we can find a particular styling easily.

you can start the compilation using npm run compile:sass command.

## Dependencies

Redux:
Redux-Thunk:
Redux-Logger:
React-icons:
Node-SASS:

**Note:**

Using Redux we created a basic structure where an Action Creators dispatch the action of fetch-data to dispatch the action, That later on fetch the data and set the response into a Store. What is store? Store is a centralized state that can store states of an application.

Action Creator --> Action --> Reducer --> Store

React-Redux:

**Note:**

React-Redux is an npm package to connect the redux store and help us to retrieve the states out of the redux store.

React-Redux give back Provider and connect methods that help us to connect and retrieve values.

Redux-thunk:

**Note:**

React-Thunk is an npm package that allow us to do asynchronous task inside the redux.

React-thunk allow us to return a function instead of an object from a action creator.

Redux-logger:

**Note:**

React-Logger is an npm package that helps us to debug the redux code make it easy to see that is going on inside the redux world.

Node-Sass:

**Note:**

Node-sass make easy to write css in a better way by compiling it for us and generate a clean css.

## Features

Loading: A simple loading component that shows the loading status.

Error-handler: A component that shows the error response.

## Code-Architecture

App.js:

here I had connect my redux with react and using react-redux i had retrived the default state from redux store and convert those state into
props and send those props to related components.

Users:

List of user props is send to users component where I had map over it and return and structure of list.Each component have a onClick event handler that take that particlar clicked user and send it to redux store. Where it store that user into a variable called selectedUser

Details:

In details I take that Store selectedUser value and render it.

## Code-Lacking

Responsive:

I had added two end points first one is 768px and another one is 320px althought it might not work on various devices where the resolution of device is as like as laptop.

If you know how to resolve this problem a solution will be great feedback for me or any feedback will be great for me.
