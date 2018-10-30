# Map Mock UI

React based component showing a Mock Map UI with adding Marker and Zooming Functionality


## Usage

Follow these steps to Get Started:

 - Clone the Repository ( if you don't have the zip )<br/>
 `git clone https://github.com/evilc0des/map-mock-ui.git`
 
 - Install Dependency<br/>
    `npm install`
    
 - Start the App<br/>
	`npm start`<br/>
	Runs the app in the development mode with hot-reloading and linting.  
	Open  [http://localhost:3000](http://localhost:3000/)  to view it in the browser.

### Other Available Commands

#### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about  [running tests](https://facebook.github.io/create-react-app/docs/running-tests)  for more information.

#### `npm run build`

Builds the app for production to the  `build`  folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

## Component API

The component can be used as follows.

 - Import the component<br/>
 `import Map from  "./Map";`
 
 - Use the Component in your Render method<br/>
  `<Map/>`

The Component optionally takes the props **maxZoom** and **zoomStep**<br/>
`<CropComponent maxZoom={5} zoomStep={0.2}/>`

**maxZoom** expects a number which denotes the maximum amount of zoom to be allowed. The number is the multiplier. i.e. 2 denotes 2x the normal zoom.
*(Defaults to 5)*

**zoomStep** expects a number which denotes the increment and decrement steps of the zoom which affects how fast you can zoom in or out.
*(Defaults to 0.2)*


## Additional Notes

 - The component is built totally with React. Redux is not used as a State Store would be an overkill for a small app as this with only three levels of nesting and one Container Component. There are no other dependency, zoom and all other required functionality is implemented manually. 
 
 - For styling, i have used CSS in JS and use JSS for implementing it. Although small projects as such don't have issues that arise from Sass/LESS or traditional CSS in big projects at scale like Global Namespaces and Non deterministic resolution of specifity, CSS in JS is still a good practise in my opinion to establish isolation in our code and to establish true essence of Component based Architecture.
 - The Code is Commented thoroughly explaining the implementation details
 
## Implementation Walkthrough
This section provides Screenshots and walkthrough of the features and functionalities - 
 - The UI contains of three sections: 
	 - The top `<Controls>`  component provides butons to zoom in, zoom out and Reset Zoom. 
	 - The middle `<Box>` component contains the main visual UI which contains the marker circles and is affected by zoom functionality
	 - The `<MarkerControl>` component at the bottom provides one button to add new marker circles. 
	 
 ![Initial UI Screen](./assets/scr1.png)
 
 - On clicking the Add Marker Button a new circle marker is created and added to the Box. All new circles are initialized at position (0,0) offset to the Box.
 
 ![Adding A Circle](./assets/scr2.png)
 - Clicking on a individual marker circle selects that marker.
 
 ![Selecting a Circle](./assets/scr3.png)
 - Then clicking on another spot in the box moves the marker to that location.
 
 ![Moving a Circle](./assets/scr4.png)
 - The zoom in buttons lets you zoom into the box. The hidden content can be viewed using the scroll bars or scrolling with the mouse.
 
![Zooming In](./assets/scr5.png)
 - Zoom Out Button lets you zoom out of the Box.
 
![Zooming Out](./assets/scr6.png)
 - Reset Button resets all zoom and takes the box back to its original view level.
 
![Resetting to initial Zoom](./assets/scr7.png)

## Implementation Timeline<br/>
Time Logs for the assignment (in IST):<br/>
30/10/18-15:00 - Assignment Review and Planning.<br/>
30/10/18-16:00 - Setup the Development Environment.<br/>
30/10/18-16:10 - Started Coding the Component Frameworks<br/>
30/10/18-17:00 - Started building core functionality.<br/>
30/10/18-17:45- Done with functionality.<br/>
30/10/18- 18:00 - Done with Styling.<br/>
30/10/18- 18:15 - Done with Testing and Debugging.<br/>
30/10/18- 18:15 - Started Documentation.<br/>
30/10/18- 19:05 - Done with Documentation.
