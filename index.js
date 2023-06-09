// ReactDOM.render(<h1>Hello, evryone, my name is Daman!</h1>, document.getElementById("root"))

// ReactDOM.render(<h1>Hello, evryone, my name is Daman!</h1>, document.getElementById("root"))

// ReactDOM.render(<ul>
//                   <li>Men</li>
//                   <li>Women</li>
//                   <li>None other exist</li>
//                </ul>, document.getElementById("root"))

// function MainContent() {
//    return (
//       <h1>I'm learning React, yo!</h1>
//    )
// }

// function MainContent() {
//    return (
//       <h1>I'm learning React</h1>
//    )
// }

// ReactDOM.render(
//    <div>
//       <Navbar />
//       <MainContent />
//    </div>,
//    document.getElementById("root")
// )

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }


// function MainContent() {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const h1 = document.createElement("h1")
// h1.textContent = "This is and imperative way to program"
// h1.className = "header"
// console.log(h1)

//JSX

// const page = (
//    <div>
//       <h1 className="Header">This is JSX</h1>
//       <p>This is a paragraph</p>
//    </div>
// )
// console.log(page)

// ReactDOM.render(
//    page,
//    document.getElementById("root"))



// Challenge:
// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//         - Inside the `ul`, have three `li`s for "Pricing",
//         "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now

// const navbar = (
//    <nav>
//       <h1>Tito's Frito's</h1>
//       <ul>
//          <li>Pricing</li>
//          <li>About</li>
//          <li>Contact Me..</li>
//       </ul>
//    </nav>
// )

// ReactDOM.render(
//    navbar,
//    document.getElementById("root")
// )

// const navbar = (
//    <nav>
//       <h1>Tito's Tortillas and More</h1>
//       <ul>
//          <li>Items</li>
//          <li>Pricing</li>
//          <li>Services</li>
//          <li>Contact Us</li>
//          <li>Review Us and Leave a Comment</li>
//       </ul>
//    </nav>
// )
// ReactDOM.render(
//    navbar,
//    document.getElementById("root")
// )

// const sportsBet = (
//    <nav>
//       <h1>Sports R Us</h1>
//          <h3>Pick Your Sport</h3>
//          <li>Baseball</li>
//          <li>Football</li>
//          <li>Futball</li>
//          <li>Hockey</li>
//          <li>Tennis</li>
//          <li>Basketball</li>
//          <li>Place Bet</li>
//          <li>Contact Us</li>
//    </nav>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(sportsBet)

// ReactDOM.createRoot(document.getElementById("root")).render(sportsBet)
// ReactDOM.render(sportsBet, document.getElementById("root"))


// const page = (
//    <div>
//       <h1>My awesome React page</h1>
//       <h4>Why I love React</h4>
//       <ol>
//          <li>It's composable</li>
//          <li>It's declarative</li>
//          <li>It's a hirable skill</li>
//          <li>It's the future</li>
//       </ol>
//    </div>
// )
// ReactDOM.render(page, document.getElementById("root"))



// document.getElementById("root").append(JSON.stringify(page))


// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(page)


// const firstPage = (
//    <div>
//       <img src="react-logo.png" width="40px"></img>
//       <h1>Fun facts about React</h1>
//       <ul>
//          <li>Was first released in 2013</li>
//          <li>Was originally created by Jordan Walke</li>
//          <li>Has wel over 100k stars on Github</li>
//          <li>Is maintained by Facebook</li>
//          <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//    </div>
// )
// ReactDOM.render(firstPage, document.getElementById("root"))


// QUIZ

// 1. Why do we need to `import React from "react"` in our files?
// - React is what defines JSX

// 2. If I were to console.log(page) in index.js, what would show up?
// - A JavaScript object. React elements that describe what React should
// - eventually add to the real DOM for us.

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// - There is no parent element(div).

// 4. What does it mean for something to be "declarative" instead of "imperative"?
//  -Part 1.- You tell me(computer) what to do, It would know how to do it.
//  -Part 2.- I need step by step instructiuon to be able to do what you want me to do.

// 5. What does it mean for something to be "composable"?
//  - We have small piesces we can put together to make ssomething larger/greater than the individual pieces.


// function TemporaryName() {
//    return (
//       <div>
//          <img src="react-logo.png" width="40px"></img>
//          <h1>Fun facts about React</h1>
//          <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has wel over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//          </ul>
//       </div>
//    )
// }
// ReactDOM.render(<TemporaryName />, document.getElementById("root"))


function MyPage() {
   return (
   <div>
      <img src="react-logo.png"></img>
         <h1>My Awesome React Page</h1>
         <ul>
            <li>It's great to learn React</li>
            <li>Highly piad skill</li>
            <li>In high demand</li>
            <li>People love React and what it can do</li>
            <li>I am sold on React</li>
         </ul>
   </div>
   )
}
ReactDOM.render(<MyPage />, document.getElementById("root"))
