![image](https://static1.makeuseofimages.com/wp-content/uploads/2017/09/HTML-Effects-Featured.jpg)
# Chapter 5: “Images” (pp.94-125)
# HTML Images
There are many reasons why you might
want to add an image to a web page: you
might want to include a logo, photograph,
illustration, diagram, or chart.
## How do you create an image in HTML?
1. Use the HTML  (img) tag element to define an image.
2. Use the HTML (src) attribute to define the URL of the image.
3. Use the HTML alt attribute to define an alternate text for an image, if it cannot be displayed.
![image](https://cdn.rawgit.com/MakeSchool-Tutorials/sa-2018-landing-page/master/P02-HTML-Basics/assets/void_element_breakdown.png)
# Height & Width of Images
## What is width and height of an image?
The Image Size consists of the width and height of an image. It can also be understood as the image resolution.
## Height
This specifies the height of the
image in pixels.
## Width
This specifies the width of the
image in pixels.

# Where to Place Images in Your Code?
1. Before a paragraph.
2. Inside the start of a paragraph.
3. In the middle of a paragraph.
# Aligning Images Horizontally
align horizontally.html HTML
The align attribute was
commonly used to indicate how
the other parts of a page should
flow around an image.
The align attribute can take
these horizontal values:
1. Left   
This aligns the image to the left
(allowing text to flow around its
right-hand side).
2. Right   
This aligns the image to the right
(allowing text to flow around its
left-hand side).
![image](https://www.indianfolk.com/wp-content/uploads/2017/10/right-left.jpg)

# Aligning Images Vertically
There are three values that the
align attribute can take that
control how the image should
align vertically with the text that
surrounds it:
1. Top   
This aligns the first line of the
surrounding text with the top of
the image.
2. Middle   
This aligns the first line of the
surrounding text with the middle
of the image.
3. Bottom   
This aligns the first line of the
surrounding text with the bottom
of the image.

![image](https://s1.o7planning.com/en/12519/images/51775943.png)

# Three Rules for Creating Images
* Save images in the right format.
* Save images at the right size.
* Use the correct resolution.

## You should save images at the size you will be using them on the web page and in the appropriate format.   


## Image Dimensions
The images you use on your website should be
saved at the same width and height that you
want them to appear on the page.

## Cropping Images
When cropping images it is important not to
lose valuable information. It is best to source
images that are the correct shape if possible.

## Figure and Figure Caption
* Figure tag  

Images often come with
captions. HTML5 has introduced
a new (figure) tag element to
contain images and their caption
so that the two are associated.
You can have more than one
image inside the (figure) tag
element as long as they all share
the same caption.
* Figure caption tag 

The (figcaption) tag element has
been added to HTML5 in order
to allow web page authors to add
a caption to an image.
Before these elements were
created there was no way to
associate an (img) tag element with
its caption.

# Chapter 11: “Color” (pp.246-263)
# Color
![image](https://images.squarespace-cdn.com/content/v1/5afd98a689c172c0bd724d6c/1566931387757-36S4G7UET374KJUAN24W/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/color-people.jpg?format=2500w)
## Color can really bring your pages to life.
## Foreground Color
The color property allows you
to specify the color of text inside
an element. You can specify any
color in CSS in one of three ways:   
1. rgb values  
These express colors in terms
of how much red, green and
blue are used to make it up. For
example: rgb(100,100,90)
2. hex codes   
These are six-digit codes that
represent the amount of red,
green and blue in a color,
preceded by a pound or hash #
sign. For example: #ee3e80
3. color names   
There are 147 predefined color
names that are recognized
by browsers. For example:
DarkCyan
## Background Color
CSS treats each HTML element
as if it appears in a box, and the
background-color property
sets the color of the background
for that box.
You can specify your choice of
background color in the same
three ways you can specify
foreground colors: RGB values,
hex codes, and color names.
If you do not specify a
background color, then the
background is transparent.

## Understanding Color
Every color on a computer screen is created by mixing amounts of red,
green, and blue. To find the color you want, you can use a color picker.
![image](https://cdn-geo.dayre.me/tfss-37fded77-5bd8-4206-8c63-7de868f915b5-IkPqXqDbMFm9B528Jiph.jpg)
## RGB Values   
Values for red, green, and blue
are expressed as numbers
between 0 and 255.
## Hex Codes
Hex values represent values
for red, green, and blue in
hexadecimal code.
## Color Names
Colors are represented by
predefined names. However,
they are very limited in number.
## Hue
Hue is near to the colloquial idea
of color. Technically speaking
however, a color can also have
saturation and brightness as
well as hue.
## Saturation
Saturation refers to the amount
of gray in a color. At maximum
saturation, there would be no
gray in the color. At minimum
saturation, the color would be
mostly gray.
## Brigh tness
Brightness (or "value") refers
to how much black is in a color.
At maximum brightness, there
would be no black in the color.
At minimum brightness, the
color would be very dark.
![image](https://9to5mac.com/wp-content/uploads/sites/6/2019/03/Untitled.png?w=1500)
## Notes
1. CSS3 has introduced an extra value for RGB colors to
indicate opacity. It is known as RGBA.
2. CSS3 also allows you to specify colors as HSL values,
with an optional opacity value. It is known as HSLA.

# Chapter 12: “Text” (pp.264-299)
![image](data:image/jpeg;base64,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)
## The properties that allow you to control the appearance of text can be split into two groups:
* Those that directly affect the font and its appearance
(including the typeface, whether it is regular, bold or italic, and the size of the text).
* Those that would have the same effect on text no matter what font you were using (including the color of text and the spacing between words and letters).

## Typeface Terminology
* Serif  
Serif fonts have extra details on
the ends of the main strokes of
the letters. These details are known as serif.
* Sans-Serif   
Sans-serif fonts have straight
ends to letters, and therefore
have a much cleaner design.
* Monospace
Every letter in a monospace (or
fixed-width) font is the same
width. (Non-monospace fonts
have different widths.).

## The xyz
1. Weight
* Light
* Medium
* Bold
* Black
2. Style
* Normal
* Italic
* Oblique
3. Stretch
* Condensed
* Regular
* Extended

## Condensed regular extended
When choosing a typeface, it is important to understand that a browser will usually only display it if it's installed on that user's computer.

## Specifying Typefaces font-family
The font-family property
allows you to specify the
typeface that should be used for
any text inside the element(s) to
which a CSS rule applies.
The value of this property is the
name of the typeface you want
to use.
The people who are visiting
your site need the typeface you
have specified installed on their
computer in order for it to be
displayed.

## Size of Type font-size
The font-size property enables you to specify a size for the font. There are several ways to specify the size of a font. The most common are:
1. pixels   
Pixels are commonly used because they allow web
designers very precise control over how much space their text takes up. The number of pixels is followed by the letters px.
2. percentages The default size of text in browsers is 16px. So a size of 75% would be the equivalent of 12px, and 200% would be 32px.

## Units of Type Size
1. Pixels   
Pixels are relative to the
resolution of the screen, so the
same type size will look larger
when a screen has a resolution
of 800x600 than it would when
it is 1280x800.
2. Percentages
The default size of text in a
web browser is 16 pixels. Using
percentages of this amount, you
can create a scale where the
default text size is 12 pixels, and
headings are sized in relation
to this.
3. Ems
Ems allow you to change the size
of text relative to the size of the
text in the parent element. Since
the default size of text in web
browsers is 16 pixels, you can
use similar rules to those shown
for percentages.

# UpperCase and LowerCase
The text-transform property
is used to change the case of
text giving it one of the following
values:
* uppercase
This causes the text to appear uppercase.
* lowercase
This causes the text to appear lowercase.
* capitalize
This causes the first letter of each word to appear capitalized.


# Underline and Strike
The text-decoration property allows you to specify the following values:
1. None   
This removes any decoration already applied to the text.
2. Underline  
This adds a line underneath the text. 
3. Overline  
This adds a line over the top of the text.
4. Line-through  
This adds a line through words.
5. Blink  
This animates the text to make it
flash on and off (however this is
generally frowned upon, as it is
considered rather annoying).

# Alignment
## text-align
The text-align property allows you to control the alignment of text. The property can take one of four values:
1. Left  
This indicates that the text
should be left-aligned.
2. Right   
This indicates that the text
should be right-aligned.
3. Center   
This allows you to center text.
4. justify   
This indicates that every line in
a paragraph, except the last line,
should be set to take up the full
width of the containing box.

# Styling Links
## :link, :visited
In CSS, there are two pseudoclasses that allow you to set different styles for links that have and have not yet been visited.
1. :link  
This allows you to set styles for links that have not yet been visited.
2. :visited  
This allows you to set styles for links that have been clicked on. They are commonly used to control colors of the links and also whether they are to appear underlined or not.

![image](https://9to5mac.com/wp-content/uploads/sites/6/2019/03/Untitled.png?w=1500)
# Notes
1. There are properties to control the choice of font, size, weight, style, and spacing.
2. There is a limited choice of fonts that you can assume
most people will have installed.
3. You can control the space between lines of text,
individual letters, and words. Text can also be aligned
to the left, right, center, or justified. It can also be indented.

# JPEG vs PNG vs GIF
![image](https://miro.medium.com/max/400/1*ON0B-_gy1JK0YbGBOqkB6A.png)
Use JPEG format for all images that contain a natural scene or photograph where variation in colour and intensity is smooth. Use PNG format for any image that needs transparency or for images with text & objects with sharp contrast edges like logos. Use GIF format for images that contain animations.
## Is GIF or JPEG better quality?
While GIF is great for computer generated images with limited palettes, JPG is far better for photographs. It gives better quality images for the same file size    
The image on the right is the same region compressed using GIF. The GIF file is 2.4 times bigger than the JPG, but is clearly of lower quality.

## When should I use PNG or JPEG?
PNG format is a lossless compression file format, which makes it a common choice for use on the Web. PNG is a good choice for storing line drawings, text, and iconic graphics at a small file size. JPG format is a lossy compressed file format. This makes it useful for storing photographs at a smaller size than a BMP.

## Is JPEG or PNG better for Web?
The PNG file type holds more data than a JPG. Unlike JPGs, PNG compression is lossless. Simply put, you can reduce the size of the image while maintaining the quality. If you are a photography website, for example, even the smallest downgrade in quality can make a difference for your audience.