# Object-Oriented Programming, HTML Tables

# Chapter 6: “Tables” (pp.126-145)
![image](https://www.mediumpedia.com/wp-content/uploads/2020/08/Create-Tables-in-HTML.png)
# Tables 
## What's a Table?
A table represents information in a grid format.
Examples of tables include financial reports, TV
schedules, and sports results.
## Basic Table St ructure
* table tag
* tr tag
* td tag
![image](https://ictacademy.com.ng/wp-content/uploads/2017/10/HTML-Table-Structure.png)
## Table Headings
* th tag
## Long Tables
* thead
* tbody
* tfoot

## How to create tables?
1. Use the HTML table tag element to define a table.
2. Use the HTML tr tag element to define a table row.
3. Use the HTML td tag element to define a table data.
4. Use the HTML th tag element to define a table heading.
5. Use the HTML caption tag element to define a table caption.
6. Use the CSS border property to define a border.
![image](https://docs.nomagic.com/download/attachments/36311706/HTML%20tag%20for%20fragments%20of%20table.png?version=1&modificationDate=1446608966027&api=v2)


## What is the purpose of using tables in HTML?
The HTML table model allows authors to arrange data text, preformatted text, images, links, forms, form fields, other tables, etc., into rows and columns of cells. Each table may have an associated caption (see the CAPTION element) that provides a short description of the table's purpose.
## What is a complex data table?
Complex data tables are defined as tables with row and/or column spans, or more than one header cell (e.g. th element) in any row or column of the table.

## How do you make a complex table in HTML?
To do this, you would first start the row with the beginning row tag, tr tag , and then build the row by creating each cell with the beginning cell tag, td tag , adding the data for that cell, and then closing the cell with the ending cell tag, close td tag .

# Notes
![image](https://9to5mac.com/wp-content/uploads/sites/6/2019/03/Untitled.png?w=1500)
1. The table tag element is used to add tables to a web
page.
2. A table is drawn out row by row. Each row is created
with the tr tag element.
3. Inside each row there are a number of cells
represented by the td tag element (or th tag if it is a
header).
4. For long tables you can split the table into a thead tag, tbody tag, and tfoot tag.
# Chapter 3: “Functions, Methods, and Objects” (pp.106-144)
![image](https://cloudreports.net/wp-content/uploads/2019/06/Function_machine2.png)
# Creating an object: Constructor notation
![image](https://lh3.googleusercontent.com/JWGejWy-5UEIY4S3q6FNXkq3b7H0PbECFGRFiOlE3rDsvqY2c3yaTPwXxlhes7NNcz77vfBSs2nFME6GNEP9kDajiGD62-bjE3YxFQX2Jyr4Cs40IDTE4fNWFc9JHUfXgi_SbsHvCPEncJA1Fk_MH5rqCtMEEp-YIWFT2X5EBXAup910lnt_HqTB7MAR-Ipgx_gIN-WejB8q1p3x3goAK-fhykFYNnRvcLO0hJhQDb6niwYET13BlHgvehiFaESb9R9LJ4Uq_9iyaBrqisZBmWN45PIOggWbcqWiZf1tFo6_Ah-o00SAEey_MwdwpntmzZi7kBZA4gq2ibHmakHCq2t_i8760yenwMPPhrk7unDNiMHnqp3fYxjzOvNTc-NKxOl-1oJFbiwdyNU_TwccbfsGhCwtJg8tQmVbtTSdy_Vv-FUayhc0CPQiDHirDNwCkqRX5oWHkfcMfynVNyERU-weB-5J7ReTRUgWsfKe60BfQx1emhwjJ0wI_0rmlN4RN_2MjDEz3cwSUgVUmZw1z1JzYoHy8A0Uz_VWIi0Y59ysAnYXVekqwqp7jNtmsfMrtoemq1caDe7J4EQ3u8iVa5YbUk8d4ijud9e-AU1urV0EbFIn-xYrtIYZFWRf_yuK5Sqap7e89CiBd6tq9sHLteR3201C_Pcy0vsQmWwfZA=w759-h341-no)
The new keyword and the object constructor create a blank object. You can then add properties and methods to the object.
* first   
 
 you create a new object using a combination of the new keyword and the Object() contractor function.
* second  

Having created the blank object, you can add properties and methods to it using dot notation.

# Ubdating an object
To ubdate the value of properties, use dot notation or square brackets. The work on object created using literal or constructor notation. To delete a property, use the delete keyword.

## Array are Objects
Array are actually a special type of object. They hold a related set of key/value pairs (like all objects), but the key for each value is its index number.

## Three groups of built-in object:
1. Brows object model.
2. Document object model.
3. Global javascript object.
## Creating an instance of the date object
In order to work with dates, you create an instance of the date object. You can then specify the time and date that you want it to represent.   

To create a Date object, use the Date() object constructor. The syntax is the same for creating any object with a constructor function. You can use it to create more than one Date object.  

var today= new Date();

# Notes
![image](https://9to5mac.com/wp-content/uploads/sites/6/2019/03/Untitled.png?w=1500)
1. JavaScript also has several built-in object such as String, Number, Math, and Date. Their properties and methods offer functionality that help you write scripts.
2. Arrays and objects can be used to create complex data sets (and both can contain the other).

