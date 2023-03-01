# Angular

From the docs... 
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started
https://www.geeksforgeeks.org/how-to-create-todo-list-in-angular-7/

Again, have to install globally? Tried locally, didn't work. 
npm install -g @angular/cli

written in TypeScript

app.module.ts is all the files the app uses. Sort of a central hub.
app.component.ts contains logic for main page. Also called the "class". 
app.component.html template, the HTML for the app
app.component.css can define styles that are specific to JUST my components, not the whole application.

Use the @component() decorator to specify HTML and styles about a class

Has an index.html with an <app-root></app-root>, that's where the components are loaded. 

#Directives
"*ngFor" dynamically creates DOM elements based on an array
"*ngIf" add or remove DOM elements based on a condition

