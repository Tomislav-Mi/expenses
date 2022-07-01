# Expensify (React study project # 1)
- Web app that tracks expenses

## Key Features
- Tracks expenses
- User can add new expenses
- Expenses are filtered by year, and displayed by month using a bar chart

## What I've learned
- React</br>
  - Components </br>
    All UI can be split into components. A Button, for instance, can be a component, an input element as well, same goes for filters, and containers, and other pieces of UI. React is all about these components. </br> But what are React components in code? Components are, in-essence, JavaScript functions (or classes) combined with HTML and CSS.
    Before we dive deeper into React components, let's take a quick look at good old vanilla JavaScript. In pure JS (no library or framework attached), you write the concrete DOM updating instructions
    on your own. For example:
    ```javascript
    const para = document.createElement('p');
    para.textContent = 'This is a paragraph';
    document.getElementById('someid').append(para);
    ```
    React favours a declarative approach for building the components: Developer define the desired target state, and React then figures out the actual JavaScript DOM instructions. You essentially build your custom HTML Elements with JavaScript and a special React syntax called JSX that looks like the love child of JavaScript and HTML. To render a paragraph in React, you `return` HTML code inside of a function or class. This only works because there are transformation steps running behind the scenes. Here's a React component:[^1]
    ```javascript
    const Para = () => {
      return (
        <div>
          <p>This is a paragraph</p>
        </div>
        );
     }
    ```
  - Event Listening, React State, useState()</br>
    To react to events in React (no pun intended), we go to the JSX element, for instance</br> `<button>Click!</button>`, and there we add a special prop which start with `on`, for example `onClick`:
     ```javascript
    const Button = () => {
    return (
      <div>
        <button onClick={clickHandler}>Click!</button>
      </div>
      );
    }
    ```
    You probably noticed that we assigned a value to this click event, `{clickHandler}`. That's a pointer to a function that we can declare inside the component:
     ```javascript
    const Button = () => {
    const clickHandler = () => {
       return (
        console.log(
       );
    } 
    return (
      <div>
        <button onClick={clickHandler}>Click!</button>
      </div>
      );
    }
    ```
 
<details><summary>The origin of JSX</summary>
<p>
  
![JavaScriptJSX](https://user-images.githubusercontent.com/98950707/176714252-57e13717-7984-4c76-ba8e-be8e8d06802e.jpg)
  
</p>
</details>




## What I need to learn
- Alternatives files structures
- Custom Hooks
- Rooting etc

[^1]: If you want to, you can see the code that was transformed into pure JS. Open the dev tools > sources > static/js > bunch of js files.
