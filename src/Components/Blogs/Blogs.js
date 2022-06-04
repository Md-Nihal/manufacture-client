import React from 'react';

const Blogs = () => {
    return (
        <section>
            <h1 className='text-2xl font-semibold text-primary'>
                # How will you improve the performance of a React Application?
            </h1>
            <ul>

                1)When possible, keep component state local.
                2)Memoization of React components to avoid unwanted re-rendering
                3)Using dynamic import to separate code in React ()

                4)In React, windowing or list virtualization

                5)In React, lazy image loading
                
            </ul>
            <h1 className='text-2xl font-semibold text-primary'>
                # Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
            </h1>
            <div>
                1) If you update it directly, calling the setState() afterward may just replace the update you made.
                2) When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                3) You will lose control of the state across all components.
            </div>
            <h1 className='text-2xl font-semibold text-primary'>
                #  What are the different ways to manage a state in a React application?
            </h1>
            <div >
                Ans: There are four main types of state we need to properly manage in your React apps:

                Local state
                Global state
                Server state
                URL state

            </div>
            <h1 >
                Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.
            </h1>
            <h1 className='text-2xl font-semibold text-primary'>
                 What is a unit test?Why should write unit tests?
            </h1>
            <div>(i)
                Ans: UNIT TESTING is a type of software testing where individual units or components of a software are tested.
                (ii) 
                Ans: Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
            </div>
        </section>
    );
};

export default Blogs;