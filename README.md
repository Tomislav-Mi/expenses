# Expensify (React study project # 1)
- Web app that tracks expenses

## Key Features
- Tracks expenses
- User can add new expenses
- Expenses are filtered by year, and displayed by month using a bar chart

## What I've learned
- React
  - Structure
  - Components </br>
    All UI can be slip into components. A Button, for instance, can be a component, an input element as well, same goes for filters, and containers, and other pieces of UI. React is all about these components. </br> But what are React components in code? Components are, in-essence, JavaScript functions (or classes) combined with HTML and CSS.
    Before we dive deeper into React components, let's take a quick look at good old vanilla JavaScript. In pure JS (no library or framework attached), you write the concrete DOM updating instructions
    on your own. For example:
    ```javascript
    const para = document.createElement('p');
    para.textContent = 'This is a paragraph';
    document.getElementById('someid').append(para);
    ```
    React favours a declarative approach for building the components: Developer define the desired target state, and React then figures out the actual JavaScript DOM instructions. You essentially build your custom HTML Elements with JavaScript and a special React syntax called JSX, that looks like the love child of JavaScript and HTML.
    
<details><summary>The origin of JSX</summary>
<p>
  
![JavaScriptJSX](https://user-images.githubusercontent.com/98950707/176714252-57e13717-7984-4c76-ba8e-be8e8d06802e.jpg)
  
</p>
</details>

- JavaScript ...
TO BE CONTINUED ...

## What's on the agenda 
- Alternatives files structures
- Custom Hooks
- Rooting etc

