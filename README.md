Final version with small correction.

Here you'll find me testing and implementing novalidate on HTML forms and using only JS and constrains API to validate and display form information.

It's only meant to be done on a client-side, and the password check is the one I am the happiest about. It has regex to check the different conditions.

Given time and refactoring, this can become a decent template to deal with instances where creating a form would be useful.

Additionally, I would've love to split my code into modules - adding

<script src='xyz.js' type="module"> 
//causes CORS erors, as it expects a logical HTTP structure.
