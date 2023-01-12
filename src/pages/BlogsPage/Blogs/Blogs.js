import React from 'react';
import AddProducts from '../../DashboardPage/SellerDashboard/AddProducts/AddProducts';

const Blogs = () => {
    return (
      <div className='mx-12 text-neutral py-5  '>
      <div className='blog-header text-center'>
       <h1 className='text-2xl'>Welcome to <span className='bold text-2xl text-primary'><b>Variety Furnishing</b></span>  blog</h1>
       <p className='text-lg'>We make sure quality products and delivery service.   </p>

      </div>
      <div className="blog">
       <h4 className="text-xl text-accent bold my-2" > What are the different ways to manage a state in a React application?</h4>
       <p className="text-lg my-4"><b>Answer : </b> There are several  ways to manage state​s in React, for example</p>
       <ol>
          <li>React Hooks</li>
          <li>React context API</li>
          <li>React Higher order component</li>
          <li>Apollo Link State</li>
       </ol>
      </div>
      <div className="blog">
       <h4 className="text-xl text-accent bold my-2" >How does prototypical inheritance work?</h4>
       <p className="text-lg my-4"><b>Answer : </b>The prototype or prototypical Inheritance is a building method in JavaScript,This feature basically used in javascript to add methods and properties in objects.
       <br /> It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the  of an object,
       <br /> we use Object. getPrototypeOf and Object. Prototypical Inheritance makes life easy for developer and removed re-write code.
        </p>
      </div>
      <div className="blog">
       <h4 className="text-xl text-accent bold my-2" >What is a unit test? Why should we write unit tests?</h4>
       <p className="text-lg my-4"><b>Answer : </b> Unit test is a software testing method. <br />
       Developers write unit tests for their code to make sure that the code works correctly. usually A unit test is a test of the correctness of an individual code module, for example, a test of a method or class. Typically, developers create unit tests for their code as they develop it.
       <br />
       For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.
        </p>
      </div>
      <div className="blog">
       <h4 className="text-xl text-accent bold my-2" >React vs. Angular vs. Vue?</h4>
       <p className="text-lg my-4"><b>Answer : </b> React.js, Angular.js and Vue.js these all are JavaScript libraries.
       <br />
       If we are measuring the popularity, According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively. 
       <br />
       you can chose any of these libraries for your next project, don't worry these all are good.
        </p>
      </div>

   </div>
    );
};

export default Blogs;