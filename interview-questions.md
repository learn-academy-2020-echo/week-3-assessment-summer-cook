# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer: destructuring is a way to make code shorter and more concise by declaring items in an object above a set of code that will use those items many times.

**Researched answer:**



2. What are React lifecycle methods? Provide three examples.

**Your answer:**

  React lifecycle methods are used in every react app. they include the render, & constructor.

**Researched answer:**

  Lifecycle methods can be called in the following order when an instance of a component is being created and inserted into the DOM. This is called mounting

      **Lifecycle methods for mounting**
        constructor()
        static getDerivedStateFromProps()
        render()
        componentDidMount()

      Updates can be caused by changes to props and state. These methods are called in the following order when a component is being re-rendered.

      **Lifecycle methods for updating updating**

        static getDerivedStateFromProps()
        static getDerivedStateFromProps()
        shouldComponentUpdate()
        render()
        getSnapshotBeforeUpdate()
        componentDidUpdate()


  Here is a diagram of the lifecycle methods
  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


3. What is the difference between a class and an object?

  **Your answer:**
  An object is a data type that contains a set of key:value pairs. a class is the blueprint for an object.

  **Researched answer:**

      **Objects**
      - Objects are the cross section of data and behavior.
      - JSON stands for Javascript Object Notation
      - Objects can be stored in variables
      - You can access specific values from objects with Dot Notation
      - An object can be a single index of an array, and then your can iterate - over objects with .map & .filter

      **Classes**
      - class names are always capitalized
      - similar to functions, classes have their own scope
      - classes are reusable and each object created from the class is independent from each other
      - classes need a constructor - constructors can take arguments, which creates classes with unique data.
      - you use "this." inside a class to refer to arguments within the classe
      - you can use a class to create many different objects with different properties





4. What is the difference between a HTML div and a span?

  **Your answer:**
  An HTML div is a block element and span is inline.

  **Researched answer:**
  div is used while creating CSS based layouts in HTML, span is used to stylize texts.



5. What is React.Fragment (or <>) and why would you want to use it?

  **Your answer:**
  A react fragment is used inside the return of a React render() - it should be used when you have multiple elements that you need to return.

  **Researched answer:**
  Fragments let you group a list of children without adding extra nodes to the DOM.



6. What does it mean to create a responsive web application? What are three options for creating responsive design?

  **Your answer:**
  A responsive web application is one that changes dimensions and functionality based on the device it is viewed on- it is different for desktop than it is for mobile or tablet.
  Three options:
    - 1 React Native App - this is when you have an application that is designed specifically for mobile
    - 2 Mobile apps, one each specifically for iOs and android
    - Hybrid - this is when you create basically a web application that is rendered inside a mobile application

    (I wrote that answer and realized this question may be asking more about how to create a responsive WEB design and not how to create separate mobile apps. I'm not really sure what 3 options you are looking for so need to research but ill leave that answer because its good info anyways)


  **Researched answer:**

  Responsive design is broken down into three main components, including flexible layouts, media queries, and flexible media.
    _Flexible Layouts:_  the practice of building the layout of a website with a flexible grid, capable of dynamically resizing to any width
    _Media Queries:_ provide the ability to specify different styles for individual browser and device circumstances, the width of the viewport or device orientation for example
      - "mobile first " is one popular technique that includes using styles targeted at smaller viewports as the default styles for a website, then use media queries to add styles as the viewport
          - The operating belief behind mobile first design is that a user on a mobile device, commonly using a smaller viewport, shouldn’t have to load the styles for a desktop computer only to have them over written with mobile styles later. Doing so is a waste of bandwidth
    _Flexible Media:_ As viewports begin to change size media doesn’t always follow suit. Images, videos, and other media types need to be scalable, changing their size as the size of the viewport changes




7. What are props in React?

  **Your answer:**
  Props are a way for a child component to pass information "up the river" to a parent component.

  **Researched answer:**



8. What is `this` in JavaScript?

  **Your answer:**
  this refers to any variable within a class. Because it exists within that class you need to use "this"

  **Researched answer:**



9. STRETCH: What is a ternary operator in JavaScript?

  **Your answer:**
  A way to make code shorter and more concise


  **Researched answer:**
  The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.

  _ex._
    var age = 20
    if(age >= 16){
    console.log("You are old enough to drive.")
    } else {
    console.log("You are not old enough to drive.")
    }
  _ex._
    var age = 20
    age >= 16 ? console.log("You are old enough to drive.") : console.log("You are not old enough to drive.")


10. STRETCH: What is an anonymous function in JavaScript?

  **Your answer:**

  **Researched answer:**
  anonymous functions are functions without a name.
  They are stored an variables. they don't need function names because they are invoked using the variable name.
    _ex._
    var x = function (a, b) {return a * b};
    var z = x(4, 3);



## Looking Ahead: Terms for Next Week
- Ruby
    - an open source, object oriented programming language created by Yukihiro Matsumoto in the early 1990s
    - has a reputation that it is both easy to read & write
    - can be embedded into HTML
    - simple & easy to read and write
- Object oriented programming
    - created as a way to deal with large software systems.
    - a way to make containers for data that could be changed and manipulated without affecting the entire program- allows us to section off areas of code that perform certain procedures & programs can become the interaction of many small parts, as opposed to one massive blob of dependency.
- RSpec
    - RSpec is the Ruby testing framework used for Test Driven Development which is best implemented using red-green-refactor
- Instance variable
    - starts with an @ symbol
    - give objects their own private space to store data
- Ruby blocks
    - Ruby Code blocks (called closures in other languages) are definitely one of the coolest features of Ruby and are chunks of code between braces or between do..end that you can associate with method invocations, almost as if they were parameters. A Ruby block is a way of grouping statements, and may appear only in the source adjacent to a method call; the block is written starting on the same line as the method call's last parameter (or the closing parenthesis of the parameter list). The code in the block is not executed at the time it is encountered. Instead, Ruby remembers the context in which the block appears (the local variables, the current object, and so on) and then enters the method.
      http://rubylearning.com/satishtalim/ruby_blocks.html#:~:text=A%20Ruby%20block%20is%20a,the%20time%20it%20is%20encountered.
- Ruby hashes
    - a hash is a collection of key-value pairs that look like this:
          "employee" = > "salary"
- `getter` and `setter` methods in Ruby
    - allow us to access a class's instance variable from outside the class.
    - Getter methods "get" the value of an instance variable
    - Setter methods "set" the value of an instance variable
