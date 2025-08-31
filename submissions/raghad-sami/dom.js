// Task 1: DOM Archaeologist
// The tag name of the last element child of , using only navigation properties (no query selectors).

console.log(document.body.lastElementChild.tagName);

// The number of element children in

console.log(document.body.children.length);

// The difference in length between childNodes and children of . Explain why they differ.
console.log(document.body.children.length);  // 3
console.log(document.body.childNodes.length);  // 6 
// Explanation : 
// The children property returns only the HTML element nodes (like <div>, <p>, <button>, etc.) 
// The childNodes property returns all types of nodes,

// So the difference in length is usually because of those invisible text nodes.


// What is the nodeType and nodeName of the first node in document.body.childNodes?

console.log(document.body.childNodes[0].nodeType); // 3
console.log(document.body.childNodes[0].nodeName); // #text

// Is the first paragraph a sibling of the second, or a descendant?
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
console.log(p1.parentElement === p2.parentElement); // true

// => siblings



// Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin.

// Text nodes like "\n" (new lines) appear in the DOM
// because of how the HTML is formatted with line breaks.
// These are not visible in the page but they are part of the DOM as text nodes.
 const Nodes = document.body.getElementsByTagName("*"); 

  for (let el of Nodes) {
    for (let child of el.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        if (child.textContent.trim() === "") {
          console.log("unexpected text node:", JSON.stringify(child.textContent));
        } 
      }
    }
  }

// Task 2: Synthetic DOM Injection

// Log the value of the data-role as a JS property, not via .getAttribute.

const div = document.createElement('div');
const heading = document.createElement('h2');
const paragraph = document.createElement('p');
div.className = 'card';                 
div.dataset.role = 'admin'; 
heading.textContent = 'Access Panel';  
paragraph.textContent = 'Authenticated';
div.appendChild(heading);
div.appendChild(paragraph);
document.body.appendChild(div);
console.log(div.dataset.role); 
// Change the paragraph text to "Welcome back, Admin" using a property, not a method.

paragraph.textContent = 'Welcome back, Admin';

// Add two classes to the div: "authenticated" and "highlight" using classList.

div.classList.add('authenticated', 'highlight');

// Use classList.contains() to verify that "card" still exists, and remove it while keeping the others.

if (div.classList.contains('card')) {
  div.classList.remove('card');
}