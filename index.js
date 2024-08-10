/* there are 2 types of variables in javascript: const and let/var 
- the const variable is a constant variable i.e one that cannot change 
- the let/var variable is a dynamic variable i.e it can change dynamically 
- here document is saying that it is referencing a html document 
- it allows us to reference any element in the html document 
- in this case, we want to refernece the whole html document by using getElement by the tag name
- we use TagName because we want to get the tag name of the body element */
const body= document.getElementsByTagName('body')
