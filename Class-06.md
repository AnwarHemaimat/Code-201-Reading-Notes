# JS Object Literals; The DOM Summary
![image](https://miro.medium.com/max/813/1*3_to30OHvh8T-Em9lT0EfA.png)
# Understanding the problem domain is the hardest part of programming
![image](https://www.codeproject.com/KB/Blogs/1078064/confusion-311388_640.png)
## What is the hardest thing about writing code?
* Learning a new technology.
* Naming things.
* Testing your code.
* Debugging.
* Fixing bugs.
* Making software maintainable.
## How to build the same simple application over and over again in each of courses?
The answer is :  “familiarity”.

## What is a problem domain?
A problem domain is the area of expertise or application that needs to be examined to solve a problem. A problem domain is simply looking at only the topics you are interested in, and excluding everything else. It is the area where the problems your application is intended to solve, belong to.

## Why problem domains are hard?
When writing code is a lot like putting together a jigsaw puzzle (this pictuer):  

![image](https://spzone-simpleprogrammer.netdna-ssl.com/wp-content/uploads/2013/07/81zQGlKs9oS._SL1500_.jpg) 
 so We put together code with the purpose of building components that we have taken out of the “bigger picture” of the problem domain.   
The big issue is that many problem domains are like a puzzle with a blurry picture or no picture at all.
## Programming is easy if you understand the problem domain
![image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1dHvRGD1XryDP6qwyRxLxkQ09e5EZtAMNw&usqp=CAU)

If understanding the problem domain is the hardest part of programming and you want to make programming easier, you can do one of two things:

1. Make the problem domain easier.
2. Get better at understanding the problem domain.

# From the Duckett JS book
## Chapter 3: “Object Literals” (pp.100-105)
![image](https://ak.picdn.net/shutterstock/videos/32365972/thumb/1.jpg)
## What is an Object?
Objects group together a set of variables and functions to create a model of a something you would recognize from the real world.   

If a variable is part of an object, it is called a
property. Properties te ll us about the object, such as
the name of a hotel or the number of rooms it has.
Each individual hotel might have a different name
and a different number of rooms.   

If a function is part of an object, it is called a method.
Methods represent tasks that are associated with
the object. For example, you can check how many
rooms are available by subtracting the number of
booked rooms from the total number of rooms.

## To create an Object :
To create an object, use the new keyword with Object() constructor, like this:  
 const person = new Object();  
Now, to add properties to this object, we have to do something like this : person.

## To accessing an Object And Dot notation 
JavaScript provides two notations for accessing object properties. The first, and most common, is known as dot notation. Under dot notation, a property is accessed by giving the host object's name, followed by a period (or dot), followed by the property name.
## Create more an Object
![image](https://cdn.javascripttutorial.net/wp-content/uploads/2016/09/Create-Objects-in-JavaScript-Prototype-Pattern-new-Object.png)
It is very easy to create a single object than to create multiple objects of the same type. To breach this hurdle, javascript has provided object constructor function. Using this function, initially, we have to create the type of the object and later on, we need to declare the properties of the object.
# Chapter 5: “Document Object Model” (pp.183-242)
The Document Object Model (DOM) specifies
how browsers should create a model of an HTML
page and how JavaScript can access and update the
contents of a web page while it is in the browser window.   
The DOM is neither part of HTML, nor part of JavaScript; it is a separate set of rules.
It is implemented by all major browser makers, and covers two primary areas:  
1. Making a model of the HTML page .
2. Accessing and ahinging the HTML page .
## The DOM tree is a model of a web page
As a browser loads a web page, it creates a model of that page.
The model is called a DOM tree, and it is stored in the browsers' memory.
It consists of four main types of nodes.
![image](https://cf.ppt-online.org/files/slide/l/lG6hjyFR8carDYH7oVAtPW3exEOg0sSpQ1JKfm/slide-4.jpg)
The nodes are:
1. THE DOCUMENT NODE
2. ELEMENT NODES
3. ATTRIBUTE NODES
4. TEXT NODES

## Working with the DOM tree
Accessing and updating the DOM tree involves two steps:
1. Locate the node that represents the element you want to work with.
2. Use its text content, child elements, and attributes.
# Caching DOM queris
Methods that find elements in the DOM tree are called DOM queris.
when you need to work with an element more than once, you should use a variable to store the result of this query.
This example is to look through the DOM tree for an element whose id attribute has a value of one :  

* getElementById('one');

When people talk abouy storing elements in variables, they are really storing the location of the element(s) within the DOM tree in a variable. The properties and methods of that element node work on the variable. 

This example saves the browser looking through the DOM tree to find the same element(s) again. It is known as caching the selection:

* var itemOne = getElementById('one);
## Selecting an element from a nodelist
There are two ways to select an element from a Nodelis t:   
The item() method and array syntax.   
Both require the index number of the element you want.

* The item() method:
1. Select elements that have a class attribute whose value is hot and store the NodeList in a variable called elements.
2. Use the length property to check how many elements were found. If 1 or more are found, run the code in the if statement.
3. Store the first element from the NodeList in a variable called firstItem. (It says 0 because index numbers start at Zero).
* Array syntax
1. Create a NodeList containing elements that have a class attribute whose value is hot, and store it in the variable elements.
2. If that number is greating than or equal to one, run the code inside the if statement.
3. Get the first element from the NodeList ( it says 0 because index numbers start at Zero).

## Attribute Nodes
Once you have an element node, you can use other properites and methods on that elemnt node to access and change its attributes.

There are to steps to accessing and updating attributes:
1. Select the element node that carries the attribute and follow it with a period symbol.
2. Use one of the methods or properties below to work with that element's attributes.

![image](https://9to5mac.com/wp-content/uploads/sites/6/2019/03/Untitled.png?w=1500)
* The browser represents the page using a DOM tree.
* DOM trees have four types of nodes: document nodes,
element nodes, attribute nodes, and text nodes.
* You can select element nodes by their id or cl ass
attributes, by tag name, or using CSS selector syntax.
* Whenever a DOM query can return more than one
node, it will always return a Nadel i st.
* From an element node, you can access and update its
content using properties such as textContent and
i nnerHTML or using DOM manipulation techniques.
* An element node can contain multiple text nodes and
child elements that are siblings of each other.
* In older browsers, implementation of the DOM is
inconsistent (and is a popular reason for using jQuery).
* Browsers offer tools for viewing the DOM tree .