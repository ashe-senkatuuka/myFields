# myFields
Simple HTML form validation

### index.html
Contains three fields for user input
utilities.js must be included before validation.js because validation.js depends on addEvent() which is declared in utilities.js

### validation.js
1. Name is alphabets only
2. National ID starts with 3 alphabets followed by 10 numbers
3. Telephone number should contain atleast 10 numbers

### custom.css
Error styles are declared in this file

### utilities.js (handles events in older versions of IE)
Forms use a lot of event handlers. You can use jQuery to deal with cross-browser event handling. But, if you do not want to include the entire jQuery script just to handle events in older versions of IE, then you need to write your own fallback code to handle the events.
1. The addEvent() function is declared with three parameters: element, event type, callback function.
2. A conditional statement checks if the element supports the addEventListener() method.
3. If it does, then addEventListener() is used.
4. If not, the fallback code will run instead.
5. The fallback must add two methods to the element the event handler will be placed upon. It then uses Internet Explorer's attachEvent () method to call them when the event occurs on that element.