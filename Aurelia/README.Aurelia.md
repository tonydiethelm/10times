# Aurelia

From the docs... https://aurelia.io/docs/tutorials/creating-a-todo-app#creating-a-new-aurelia-project

install aurelia-cli (annoyingly have to do that globally?), run au new, answer questions. ESNext or Typescript? 

au run --open to dev serve project

Has Babel and Webpack set up for us. 

VERY basic app.html file
app.js is just export a class App. 
Not entirely certain how main.js is involved? 
https://aurelia.io/docs/fundamentals/app-configuration-and-startup/

We immediately notice that Aurelia is class based. 

Hmmm... Not a lot of VSCode completion. Let's install a VSCode plugin?

binding modes
.binding creates two way or one way link between element and attribute
Any DOM element can have a .trigger on it. Will trigger the expression when event fires.
Aurelia will use two-way binding for all form control value bindings and one-way binding for everything else. However, you can always override this by using an explicit binding command. 



