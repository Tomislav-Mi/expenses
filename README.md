# Expensify (React study project # 1)
- Web app that tracks expenses

## Key Features
- Tracks expenses
- User can add new expenses
- Expenses are filtered by year, and displayed by month using a bar chart

## What I've learned
- **REACT**</br>
  - **Components** </br>
    All UI can be split into components. A Button, for instance, can be a component, an input element as well, same goes for filters, and containers, and other pieces of UI. React is all about these components. </br> But what are React components in code? Components are, in-essence, JavaScript functions (or classes) combined with HTML and CSS.
    Before we dive deeper into React components, let's take a quick look at good ol' vanilla JavaScript. In pure JS (no library or framework attached), you write the concrete DOM updating instructions
    on your own. For example:<br>
    ```javascript
    const para = document.createElement('p');
    para.textContent = 'Paragraph';
    document.getElementById('someid').append(para);
    ```
    React favours a declarative approach for building the components: Developer define the desired target state, and React then figures out the actual JavaScript DOM instructions. You essentially build your custom HTML elements with JavaScript and a special React syntax that looks like the love child of JavaScript and HTML. React calls this creation JSX. To render a paragraph, you `return` JSX code inside of a function or class. This only works because there are transformation steps running behind the scenes.[^1] Here's a React component:<br>
    ```javascript
    const Para = () => {
        let para = 'Paragraph';

        return (
          <div>
            <p>{para}</p>
          </div>
          );
       }
    ```
    </br>
  - **Event Listening, React State, useState( )**</br>
    To react to events in React (no pun intended), we choose a JSX element, let's use </br> `<button>Click!</button>`, and there we add a special prop that starts with `on`, for example `onClick`:<br>
     ```javascript
    const Button = () => {
        let para = 'Paragraph';

        return (
          <div>
            <p>{para}</p>
            <button onClick={clickHandler}>Click!</button>
          </div>
          );
        }
    ```
    You probably noticed that I assigned a value to this click event, `{clickHandler}`. That's a pointer to a function that we can declare inside the component *before* the function is returned:<br>
     ```javascript
    const Button = () => {
        let para = 'Paragraph';

        const clickHandler = () => {
          console.log('Clicked!');
         } 

        return (
          <div>
            <p>{para}</p>
            <button onClick={clickHandler}>Click!</button>
          </div>
          );
       }
    ```
    Now we can react to events.</br></br>
    Let's say we want to give the variable `para` a new value when we click the button. Since this is still JavaScript, you can just assign a new value to `para` inside `clickHandler()`:<br>
    ```javascript
    const Button = () => {
        let para = 'Paragraph';

        const clickHandler = () => {
          para = 'New paragraph';
         } 

        return (
          <div>
            <p>{para}</p>
            <button onClick={clickHandler}>Click!</button>
          </div>
          );
       }
    ```
    **BUT THAT _WON'T_ WORK!** Don't get me wrong, the variable will receive a new value but React won't render it onto the screen. To show the new value, we need to save the state of the new value with a special React function, the so-called `useState()`. First, we declare a state variable by calling `useState()`. Then, we need to call `setPara()` with a new value inside, i. e. `setPara('NEW VALUE')`. The call must, of course, occur in `clickHandler()`.<br>
     ```javascript
    const Button = () => {
        const [para, setPara] = useState('Paragraph');

        const clickHandler = () => {
          setPara('New paragraph');
         } 

        return (
          <div>
            <p>{para}</p>
            <button onClick={clickHandler}>Click!</button>
          </div>
          );
       }
    ```
  - **JSX limitations** </br>
Adjacent elements produce an error when not wrapped by another JSX element. Children elements can, of course, be adjacent. To be clear, you can't do that in JavaScript either. In the end, every JSX will be transformed into vanilla JavaScript. 
  - `<div>` soup. That can lead to many nested components that add no semantic meaning. You make a <div> soup for the sake of appeasing React. </br>
SOLUTION: Build a wrapper component that returns props.children, and replace the <div> that holds no semantic value. The children prop holds all the content we are passing between the opening and closing tag of that component. </br>
```javascript
	const Wrapper = props => {
    return props.children;
};
```
  - An empty wrapper like that doesn't render any real HTML element to the DOM.
Btw, we don't need to build a wrapper component like that. React already has a build-in one,`<Fragement>`.

    
   - Other concepts I've learned
     - Rendering lists of data
     - Using stateful lists
     - Using "keys" and why React needs them
     - Conditional return statements
     - Dynamic styles
     - useEffect( ), a.k.a. how I learned to make infinite loops in React. useEffect is a side effect in React. React's main job is to render UI & react to user input. Everything else is considered a side effect, like storing data in the browser storage, sending HTTP requests to backend servers etc.
     - Portal
     - useRef( ) - Refs allow us to get access to other DOM elements and work with them. Should only be used to read a value.
      
<details><summary>The origin of JSX</summary>
<p>
  
![JavaScriptJSX](https://user-images.githubusercontent.com/98950707/176714252-57e13717-7984-4c76-ba8e-be8e8d06802e.jpg)
  
</p>
</details>




## What I need to learn
- Alternative file structures
- Custom Hooks
- Rooting
- Redux
- Unit tests
- TypeScript (sorry, JS)

[^1]: If you want to, you can see the code that was transformed into pure JS. Open the dev tools > sources > static/js > bunch of js files.
