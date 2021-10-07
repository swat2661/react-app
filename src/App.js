// React Basics
// // import React from 'react'

// const App = () => {
//   return (
//     <>
//       <h1 className="myclassname">Hello Swat in the react world </h1>
//       <MyName />
//     </>
//   );
// };

// const MyName = () => {
//   return (
//     <>
    
//     <h1>Swat means Swatantra</h1>
//     </>
//   )
// }


// export default App;



// const App = () => {
//   return (
//     "div";                                                          complex way of adding div in arrow function but react is watching like this
//     {};
//     React.createElement("h1",{} , "Hello world");                    
//   )
// };
import React from 'react'
// import RestaurantMenu from './component/Basics/RestaurantMenu'      
// import UseState from './component/Hooks/usestate' 
// import UseEffect from './component/Hooks/useeffect' 
// import UseReducer from './component/Hooks/usereducer'   
// import TodoList from './component/Todo Project/todo' 
import Temp from './component/Weather Forecast/temp'


const App = () => {
  return (
    <div>
      <Temp/>

    </div>
  )
}

export default App
