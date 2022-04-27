# React Busy Town App
 
**Visit the live demo here:** [Live Demo](https://lucid-clarke-dc44ce.netlify.app/)

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On click, alien grows or shrinks based on button click  |        .5 |
| On click, lizard grows or shrinks based on button click  |        .5 |
| On click, the streetlight changes to the correct color |        1 |
| On click, the correct vehicle is added to the traffic section |        1 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : tracks state for `lightColor`, `lizardSize`, `alienSize`, and `traffic` |1|
| `App()` : `lightColor`, `lizardSize`, `alienSize`, and `traffic` all change on button clicks |1|
| `App()` : passes state as props correctly to `TrafficLight` and `VehicleList` |1|
| `TrafficLight({ color })` : renders the correct css class based on the `color` prop |1|
| `VehicleList({ vehicles })` : maps over the list of vehicles in props, rendering a `Vehicle` component for each vehicle string |1|
| `Vehicle({ vehicle })` : render a different emoji depending on what string is passed in for the `vehicle` prop |1|

![image](https://user-images.githubusercontent.com/16160135/150245846-8afae4ba-74f9-4f4f-a40a-a32064e6d429.png)
