import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import { BrowserRouter,createBrowserRouter,RouterProvider } from "react-router-dom";
import Details from "./pages/app/details/Details";

function App() {
  const brouserRouter =createBrowserRouter([
    {
      path:'/',element:<Nav/>,
      children:[
        {path:'',element:<Hero/>},
        {path:'/courses',
          children:[
            {index:true,element:<Courses/>},
            {path:':courseId',element:<Details/>}
          ]}
      ]
    }
  ])

  return (
    <div className="App">
       <RouterProvider router ={brouserRouter}/>
    </div>
  );
}

export default App;

