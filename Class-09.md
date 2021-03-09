## From the Duckett HTML book:
## Chapter 7: “Forms” (p.144-175)   

# Forms and JS Events
![image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNhDYedWqGiVvVk5L3aLTrWmnwCQlIFLXUw&usqp=CAU)

# Forms
Traditionally, the term 'form' has referred to a printed document that contains spaces for you to fill in information.
## What does FORM mean?
An HTML form is a section of a document containing normal content, markup, special elements called controls (checkboxes, radio buttons, menus, etc.), and labels on those controls.
![image](https://mobile.htmlgoodies.com/imagesvr_ce/1902/HTML%20Form.PNG)
## Form Controls
There are several types of form controls that you can use to collect information from visitors to your site:   
1. ADDING TEXT:   
* Text input (single-line).
* Password input.
* Text area (multi-line).
2. Making Choices:
* Radio buttons.
* Checkboxes.
* Drop-down boxes.
3. Submitting Forms:
* Submit buttons.
* Image buttons.
4. Uploading Files:
* File upload.

## How do forms work in HTML?
1. Your visitor loads the form page in her web browser. The browser sends a request to the web server.
2. Your visitor fills the form and submits it.
3. The form submission data is sent to the web server.
4. The web server processes the request.
5. A response is sent back to the browser.
## Form Structure
![image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHhLvYbqR8z9-UrOOrtHNRwNBzNgRdMfyHQ&usqp=CAU)
Form controls live inside a
(form tag) element. This element
should always carry the action
attribute and will usually have a
method and id attribute too.
1. action   
Every (form tag) element requires
an action attribute. Its value
is the URL for the page on the
server that will receive the
information in the form when it
is submitted.
2. method   
Forms can be sent using one of
two methods: get or post.

## Can I have 2 forms in HTML?
![image](https://pbs.twimg.com/profile_images/1169743501581570049/n73USraJ_400x400.jpg)
On the OP question: Yes, you can have any number of forms on a page. The forms have "action" field, which may be different for different form. This is a URL which handles the form. The HTTP server receives the local part of the URL as a part of GET or POST request.
## What is form input?
![image](https://i.pinimg.com/originals/9b/07/6b/9b076bd78ba45bfb51a32f1282872fbe.webp)
The INPUT element defines a form control for the user to enter input. While INPUT is most useful within a FORM, HTML 4 allows INPUT in any block-level or inline element other than BUTTON.When a form is submitted, the current value of each INPUT element within the FORM is sent to the server as name/value pairs.

![image](https://miro.medium.com/max/2620/0*K-FAwwnvrzLsJr7m)
# Notes
![image](https://9to5mac.com/wp-content/uploads/sites/6/2019/03/Untitled.png?w=1500)

1. Whenever you want to collect information from visitors you will need a form, which lives inside a
(form tag) element.
2. Information from a form is sent in name/value pairs.
3. Each form control is given a name, and the text the user types in or the values of the options they select are sent to the server.
4. HTML5 introduces new form elements which make it easier for visitors to fill in forms.

## Chapter 14: “Lists, Tables & Forms” (pp.330-357)
![image](https://c8.alamy.com/comp/PHRK7M/chapter-14-green-grunge-stamp-PHRK7M.jpg)
# Lists
There are several CSS properties that were created to work with specific types of HTML elements, such as lists, tables, and forms.
## What are the lists in HTML?
There are three list types in HTML:
1. Unordered list — used to group a set of related items in no particular order.
2. Ordered list — used to group a set of related items in a specific order.
3. Description list — used to display name/value pairs such as terms and definitions.
## What is the list style?
The list-style-type property defines the type of list by setting the content of each marker, or bullet, on the list. Acceptable keyword values for list-style-type include: disc. circle.
## How do I make a list in HTML?
![image](https://s3.amazonaws.com/webucator-how-tos/419.png)
* Unordered HTML List. An unordered list starts with the (ul tag). Each list item starts with the (li tag).   

* Ordered HTML List. An ordered list starts with the ( ol tag). Each list item starts with the (li tag).
* HTML Description Lists. HTML also supports description lists.

## Table Properties
![image](https://1.bp.blogspot.com/-Z3gIwonB54A/WtOcwFhYxII/AAAAAAAAARE/cIRGmSVZ_HAuuJttImPoi8jRZOVJ3MjWACLcBGAs/s640/firstrow-firstcolumn.png)
You have already met several
properties that are commonly
used with tables. Here we will
put them together in a single
example using the following:
1. width : to set the width of the
table.
2. padding : to set the space
between the border of each table
cell and its content
3. text-transform : to convert the
content of the table headers to
uppercase.
4. letter-spacing, font-size :
to add additional styling to the
content of the table headers
5. border-top, border-bottom
: to set borders above and below
the table headers.
6. text-align : to align the writing to the left of some table cells and to the right of the others.
7. background-color : to change
the background color of the
alternating table rows.
8. :hover : to highlight a table row when a user's mouse goes over it.
## Border in empty cells
If you have empty cells in
your table, then you can use
the empty-cells property to
specify whether or not their
borders should be shown.
Since browsers treat empty cells
in different ways, if you want to
explicitly show or hide borders
on any empty cells then you
should use this property.
It can take one of three values :
1. show  
This shows the borders of any
empty cells.
2. hide   
This hides the borders of any
empty cells.
3. inherit   
If you have one table nested
inside another, the inherit
value instructs the table cells to
obey the rules of the containing
table.
# Notes 
![image](https://9to5mac.com/wp-content/uploads/sites/6/2019/03/Untitled.png?w=1500)
1. In addition to the CSS properties covered in other
chapters which work with the contents of all elements, there are several others that are specifically used to control the appearance of lists, tables, and forms.
2. List markers can be given different appearances
using the list-style-type and list-style image
properties.
3. Table cells can have different borders and spacing in different browsers, but there are properties you can use to control them and make them more consistent.
4. Forms are easier to use if the form controls are vertically aligned using CSS.
5. Forms benefit from styles that make them feel more interactive.

# From the Duckett JS book
## Chapter 6: “Events” (pp.243-292)
![image](https://c8.alamy.com/comp/PHRYKM/chapter-6-green-grunge-stamp-PHRYKM.jpg)
# Events
## What is event in JS?
JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page. When the page loads, it is called an event. When the user clicks a button, that click too is an event. Other examples include events like pressing any key, closing a window, resizing a window, etc.
![image](https://www.kirupa.com/html5/images/dom_capturing2_200.png)
## What are all the JavaScript events?
1. onclick   
	The user clicks an HTML element.
2. onmouseover   
The user moves the mouse over an HTML element.
3. onmouseout   
The user moves the mouse away from an HTML element.
4. onkeydown   
	The user pushes a keyboard key.

## Where events occur?
The event object can tell you where the cursor was positioned when an event was triggered, Screen , Page , or Client.

# Notes
![image](https://9to5mac.com/wp-content/uploads/sites/6/2019/03/Untitled.png?w=1500)
1. Event are the browser's way of indicating when something has happened ( such as when a page has finished loading or a button has been clicked).
2. Binding is the process of stating which event you are waiting to happen, and which element you are waiting for that event to happen upon.
3. When an event occurs on an element, it can trigger a JavaScript function. When this function then changes the web page in some way, it feels interactive because it has responded to the user.
4. You can use event delegation to monitor for events that happen on all of the children of an element.
5. The most commonly used events are W3C DOM events, although there are others in the HTML5 specification as well as browser-specific events. 


