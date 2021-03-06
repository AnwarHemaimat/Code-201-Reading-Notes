# HTML Lists, Control Flow with JS, and the CSS Box Model
# Lists
![image](https://744025.smushcdn.com/1245953/wp-content/uploads/2020/02/HTML-LISTS.jpg?lossy=1&strip=1&webp=1)
## There are lots of occasions when we
need to use lists. HTML provides us with
three different types:
1. Ordered lists are:
a collection of items where each item holds a relative position that is based upon some underlying characteristic of the item

2. Unordered lists are:
 displayed with a bullet, which can be of several forms, like a dot, a circle, or a square

3. Definition lists are:
a list of terms and corresponding definitions. Definition lists are typically formatted with the term on the left with the definition following on the right or on the next line.

## Ordered Lists
![image](https://cdn.educba.com/academy/wp-content/uploads/2019/11/HTML-Ordered-List.jpg)

To create ordered list in HTML, use the "tag ol tag" . Ordered list starts with the " tag ol tag" . The list item starts with the "tag li tag" and will be marked as numbers, lowercase letters uppercase letters, roman letters, etc. The default numbers for list items.

## Unordered Lists
The "tag ul tag" defines an unordered (bulleted) list. Use the "tag ul tag" together with the "tag li tag" to create unordered lists. Tip: Use CSS to style lists. Tip: For ordered lists, use the "tag ol tag" .
![image](https://i1.wp.com/codeexercise.com/wp-content/uploads/2016/10/order-list-og.png?resize=363%2C192)

## Definition lists
![image](https://i.ytimg.com/vi/gGh6Vyo7eKk/maxresdefault.jpg)
Use the "tag dl tag" to add definition lists. The HTML "tag dl tag" is used for declaring a definition list. This tag is used within "tag dd tag". A definition list is similar to other lists but in a definition list, each list item contains two entries; a term and a description.

![image](https://vnelsontx.files.wordpress.com/2017/08/hqdefault.jpg?w=480)

# Boxes
![image](https://i.stack.imgur.com/tL5zM.png)
## What is a box in HTML?
All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

## How do you insert a box in HTML?
Using CSS to Draw a Border Around Your Block of Text and Pictures:
1. Create the HTML for the block. For this tutorial, I shall use a DIV block to enclose the text/pictures. "tag div class="boxed" tag" ...
Next, you will need to style the DIV box by adding a border. 

## Box model for border in html:
In Html, we can add the border using the following two different ways: Using Inline Style attribute. Using Internal CSS.

Using Internal CSS   
1. tag ! Doctype Htmltag
2. tag Html tag
3. tag Head tag
4. tag Title tag
5. Add the border using internal CSS.
6. tag /Title tag
7. tag /Head tag
8. tag Body tag

## margin and padding:
are the two most commonly used properties for spacing-out elements. A margin is the space outside something, whereas padding is the space inside something.
## How do I reduce margins in HTML?
You can remove this margin by setting the top and left margin to zero. Like the padding and border, the sizes of specific sides of the margin can be set using margin-left , margin-right , margin-top , and margin-bottom .

![image](https://images.squarespace-cdn.com/content/v1/562cde1ae4b0ccf5cdc216c8/1556319112269-L8LE2W52Q0ZWQ7L10OGJ/ke17ZwdGBToddI8pDm48kPbc_6z_6Th86gZdWBlw7nl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UeC2pftREtgIANi4suW_PGvs6bOHnKIuQa9kG5oJgdEI3WUfc_ZsVm9Mi1E6FasEnQ/Chapter+Two+Final+Logo.png)
# Basic JavaScript Instructions
# Arrays
## What are arrays in JS?
Array: is an ordered list of values. Each value is called an element specified by an index. ... First, an array can hold values of different types. For example, you can have an array that stores the number and string, and boolean values. Second, the length of an array is dynamically sized and auto-growing.

## How do you call an array in JavaScript?
An array can hold many values under a single name, and you can access the values by referring to an index number.
1. Creating an Array. 
2. Using the JavaScript Keyword new. 
3. Access the Elements of an Array. 
4. Changing an Array Element. 
5. Access the Full Array. 
6. Arrays are Objects. 
7. Array Properties and Methods. 
8. The length Property.

## How do you clear an array?
This is an ex. :
![image](https://appdividend.com/wp-content/uploads/2020/07/Javascript-Clear-Array-How-to-Empty-Array-in-Javascript.png)

![image](https://lh3.googleusercontent.com/proxy/qIxq2MFcPjtRao--6FRiuqJQnIoouSKs5t4px_VHAvNmDPU0u6XLzVP_l-gQgOlhg7FkXUsqquacZoyLAe2Kw5NK3NE3dCwUafmrWbGpxwwzgNDFXo6RwDjWUNfHk-_fUsq3-L0xJAIyxuj6dbt9QsZcgVLBvf4dG5b-axI-Q2ppOHpF2m5uWbsVEJN8StDjNKQpsGzwEx4IvQAP-c6mf4UFDW3qIBc-V63Ch5gqto5KQT3dqftcki4)
# Decisions and Loops” from switch statements 
![image](data:image/png;base64,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)

## What is a switch statement in JavaScript?
The switch statement executes a block of code depending on different cases. The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. ... The switch statement is often used together with a break or a default keyword (or both).


