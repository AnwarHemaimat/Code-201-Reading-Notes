# HTML Links, JS Functions, and Intro to CSS Layout Summary
![image](https://miro.medium.com/max/5120/1*l4xICbIIYlz1OTymWCoUTw.jpeg)

# Links
## what does link in html mean?
 A link (short for hyperlink) is an HTML object that allows you to jump to a new location when you click or tap it.
 Links are created using the "tag a tag" element. Users can click on anything between the opening "tag a tag" and the closing "tag /a tag". You specify which page you want to link to using the href attribute.

 ![image](https://lh3.googleusercontent.com/proxy/-g7bVoqJPJKOkwmX6Ndvt9OJSeJ4RnMhnbjQKde8cKXrMvDDRUbt1c06bV0JzGgeEwSApkBdz-BDIZBUjJ4)

 ## What are the types of links in HTML?
 ![image](https://previews.123rf.com/images/rawpixel/rawpixel1603/rawpixel160307987/53553801-enlace-red-hiperv%C3%ADnculo-a-internet-v%C3%ADnculos-de-retroceso-en-l%C3%ADnea-del-concepto.jpg
 )
 1. Local: A page on the same server or directory.
 2. Internal: A section on the current page or document.
 3. External: A page or site on a different server or directory.
 4. Download: A file for the visitor to download.
 5. E-mail: Opens the visitor's e-mail program.

 ## How do you hyperlink an email address HTML?
 Use the link code "tag a tag" href="mailto:EmailAddress@. XYZ.com" tag "tag /a tag" .
Text about emailing you "tag /a tag" If you want the email to have a subject line link to: mailto:EmailAddress@. XYZ.com? subject=MESSAGE FROM YOUR WEBSITE"> Text about emailing you "tag /a tag".
![image](https://www.wikihow.com/images/thumb/3/34/Create-an-Email-Link-in-HTML-Step-5.jpg/v4-460px-Create-an-Email-Link-in-HTML-Step-5.jpg.webp)

## And in the end, You can use the id attribute to target elements within a page that can be linked to.

![image](https://i.ytimg.com/vi/dnCLpJR2yKQ/maxresdefault.jpg)
# Layout
![image](https://3.bp.blogspot.com/-DaJcbXSYGHg/XBk2Sh0FEtI/AAAAAAAAAWA/7cQ1sw7rvSwXNX7Y-OWiDo7fEoGbnlrGgCLcBGAs/s1600/images%2B%252830%2529.jpeg)
## What is layout in HTML?
HTML layouts provide a way to arrange web pages in well-mannered, well-structured, and in responsive form or we can say that HTML layout specifies a way in which the web pages can be arranged. Web-page layout works with arrangement of visual elements of an HTML document.
## What are the 4 basic layout types?
There are four basic types of layouts:  
1. process
2. product
3. hybrid
4. fixed position.

## Controlling the Position of Elements in HTML
To use positioning on an element, you must first declare its position property , which specifies the type of positioning method used for an element. Using the position property values, the elements are positioned using the top, bottom, left, and right properties.

## How do you change the position of text in HTML?
To set text alignment in HTML, use the style attribute. The style attribute specifies an inline style for an element. The attribute is used with the HTML "tag p tag" , with the CSS property text-align for the center, left and right alignment.

## How do I position a div in HTML?
Position: absolute divs are usually positioned by coding top, left or right and width. Height is not essential if a div is to allow expansion down if larger text is chosen but other divs must be positioned to allow for this.

## Fixed Positioning
Fixed positioning is a type of absolute positioning that requires the position property to have a value of fixed.

## Floating Elements
The float property allows you to take an element in normal flow and place it as far to the left or right of the containing element as possible.

The float property can have one of the following values: left - The element floats to the left of its container. right - The element floats to the right of its container. none - The element does not float (will be displayed just where it occurs in the text). inherit - The element inherits the float value of its parent.

## How do you float elements side by side?
Three or more different div can be put side-by-side using CSS. Use CSS property to set the height and width of div and use display property to place div in side-by-side format. float:left; This property is used for those elements(div) that will float on left side.

# Fixed Width Layouts in HTML
![image](https://www.templatemonster.com/blog/wp-content/uploads/2017/05/fixed-width1.png)
## What is fixed width layout?
A "fixed-width" layout is one in which the layout of the page is contained within a wrapper that doesn't adjust its size when the width of the browser changes. In this how to, you'll learn how to create a 2-column fixed-width layout.

## Advantages
1. Pixel values are accurate at controlling size and positioning of elements.
2. The designer has far greater control over the appearance and position of items on the page than with liquid layouts.
3. You can control the lengths of lines of text regardless of the size of the user's window.
4. The size of an image will always remain the same relative to the rest of the page.
## Disadvantages
1. You can end up with big gaps around the edge of a page.
2. If the user's screen is a much higher resolution than the designer's screen, the page can look smaller and text can be harder to read.
3. If a user increases font sizes, text might not fit into the allotted spaces.
4. The design works best on devices that have a site or resolution similar to that of desktop or laptop computers.
5. The page will often take up more vertical space than a liquid layout with the same content.

# Layout Grids
![image](https://undsgn.com/wp-content/uploads/2018/04/Sony-15col-grid.jpg)
## What is a grid layout web design?
A grid is the basic structure or skeleton of your user interface. On a website, a grid is the division of the layout with either (or sometimes both) vertical and horizontal guidelines. The role of a grid in web design is to guide the designers with how and where to place elements on the page.

## How do you use grid layout?
To get started you have to define a container element as a grid with display: grid , set the column and row sizes with grid-template-columns and grid-template-rows , and then place its child elements into the grid with grid-column and grid-row . Similarly to flexbox, the source order of the grid items doesn't matter.

## Why grid layout is the best?
Efficiency — Grids allow designers to quickly add elements to a layout because many layout decisions are addressed while building the grid structure. Economy — Grids make it easier for other designers to work and collaborate on the design as they provide a plan for where to place elements.

## How do you make a grid in HTML?
To make an HTML element behave as a grid container, you have to set the display property to grid or inline-grid. Grid containers consist of grid items, placed inside columns and rows.

# Functions
## What are functions in JavaScript?
A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.
## How many types of functions are there in JavaScript?
![image](https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2019/03/JavaScript-function-tutorial.jpg)
## How do functions work in JavaScript?
Functions are executed when they are called.   
Values can be passed into functions and used within the function. Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.

## Declaring a Function
![image](https://o.quizlet.com/t5EjZXOZNmCccfll8B28Ww.png)

## Calling a Function
![image](https://www.devopsschool.com/blog/wp-content/uploads/2020/01/image-28.png)

## How do you return a value from a JavaScript function?
JavaScript provides for passing one value back to the code that called it after everything in the function that needs to run has finished running. JavaScript passes a value from a function back to the code that called it by using the return statement . The value to be returned is specified in the return keyword.

## Can a function return multiple values?
A function is not restricted to return a variable, it can return zero, one, two or more values. This is the default property of python to return multiple values/variables which is not available in many other programming languages like C++ or Java.

# Variable Scope
![image](https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2019/08/JavaScript-Variables.png)
## What is the variable scope?
The scope of a variable declared with var is its current execution context and closures thereof, which is either the enclosing function and functions declared within it, or, for variables declared outside any function, global.
## What are the different scopes in JavaScript?
There are three types of scope in JavaScript:
 1. Global Scope  
 2. Function Scope 
 3. Block Scope.
 ![image](https://miro.medium.com/max/2470/1*YWPubaj-_gMWS4jEDVBUfA.png)

 # 6 Reasons for Pair Programming
 ![image](https://images.ctfassets.net/k428n7s2pxlu/1aJnbCcUvAa4qiIg4kMeI/9c93dd78ff2c7c5ffbff3e14f5878a87/6-reasons-for-pair-programming.jpg)
 ## What is the purpose of pair programming?
 Pair programming is an important technique for developing higher quality code, faster while also reducing risk and spreading knowledge in an organization. With pair programming, two software developers work on one computer, collaborating on the same design, algorithm, code, or test.
 ## How does pair programming work?
 ![image](https://martinfowler.com/articles/on-pair-programming/benefits_overview.jpg)
 Pair programming essentially means that two people write code together on one machine. It is a very collaborative way of working and involves a lot of communication. While a pair of developers work on a task together, they do not only write code, they also plan and discuss their work.
 ## Why pair program?
 1. Greater efficiency. It is a common misconception that pair programming takes a lot longer and is less efficient.
 2. Engaged collaboration. 
 3. Learning from fellow students. 
 4. Social skills. 
 5. Job interview readiness. 
 6. Work environment readiness.
 ## How effective is pair programming?
 I've also found that pair programming is most effective in approximately 1.5 to 2.5 hour blocks. Anything much less tends to require too much overhead to setup while much more and the pairs tend to get cranky and tired.