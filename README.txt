General Project Notes
+++++++++++++++++++++++++++

- 1 component per file.

- only root component uses 'AppRegistry'

- Functional Components: component based on a function that returns JSX to be rendered on the device. Static, used to display basic content to user.

- Class Components: used for larger components. easier to organize. use helper methods. based on ES6 classes. Must define a render method that returns some amount of JSX. Do not require semi-colons.

- Life Cycle methods -

- State: a plain js object used to record and respond to user-triggered events. When one needs to update what a component shows/renders, call 'this.state'. Only change state with 'setState()', not 'this.state = 123'.

- Difference between Prop and State.
  - Prop: used to communicate between a parent and a child.
  - State: used for a components internal record keeping. Only used with class-based components.
