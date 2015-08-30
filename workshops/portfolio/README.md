# Building Your First Website

## Our Mission

Our mission is to put your website on the internet that anyone in the world can
see.

The final design looks like this:

> ![](img/final_1.png)

After club, you can go home and try to make your website look like this:

<!-- TODO -->

## JS Bin

Just like you can use Google Docs to write English papers, you can use JSBin
to write code for websites.

Open [http://jsbin.com](http://jsbin.com).

Go ahead and close the popup:

> ![](img/close.gif)

Then delete everything on the left. We don't need it right now.

> ![](img/delete.gif)

Then write your name in the text box. My name is `Jonathan Leung` so that's
what I will write:

> ![](img/jonathan_leung.gif)

Notice that that what you write on the left side of the screen is reflected
on the right.

> ![](img/left.png)

> ![](img/right.png)

<!-- Original image: ![](img/original.png) -->

Lets look at the final website:

> ![](img/final_1_highlight_description.png)

We also need to add a description

> ![](img/welcome.gif)

Hmm... We see that the line we put in the code between `Jonathan Leung` and `I
welcome you to the internet` does not translate to what the website looks like.

Let's understand why:

## HTML Tags

The code that we are writing on the left is called `HTML`. (Feel free to [Google
what HTML stands for)](https://www.google.com/search?q=html)

Adding more than one space or adding a line in your HTML code does not effect
what the website looks like.

We however can use **HTML tags** to do this.

## Headings

HTML tags tell the web browser how to format the text on a web page.

```
Some Vocabulary:

A "web browser" is what you use to navigate the internet with, like
Google Chrome or Firefox.
```

For example, if we want `Jonathan Leung` to look like a heading (i.e. bigger and
bolder), we can put it inside of a heading tag, like this:

```html
<h1>Jonathan Leung</h1>
```

Let's try it:

> ![](img/heading.gif)

And this is our final result:

![](img/heading_result.png)

Hey, look, it's all big and bold!

There are six different heading tags, `h1` through `h6`. `h1` is the most
important, `h6` is the least important.

If we take a look at what this looks like (and don't bother doing this at home):

> ![](img/h1_through_h6.png)

we see that the larger the number, the smaller the text.

### Some Terminology

```html
<h1>Jonathan Leung</h1>
^^^^
this is called the h1 tag
specifically it is the OPENING h1 tag

```

```html
<h1>Jonathan Leung</h1>
                  ^^^^^
                  this is the CLOSING h1 tag
```

Now we need to put the description in the appropriate tag:

![](img/description_next.png)

## Paragraph Tag

When you look at a different website, say the Wall Street Journal, we can see

![](img/heading_wsj.png)

![](img/paragraph_wsj.png)

We denote the main heading in HTML code with the `h1` heading tag.
We denote paragraphs in HTML code with the paragraph tag.

We generally use the paragraph text for most of the main text of a website.

For us, `I welcome you to the internet.` is the main text of our website.

So we would write

`<p>I welcome you to the internet.</p>`

Like so:

![](img/p.gif)

This is the final result:

![](img/p_final.png)

## Adding the image

Now the last component we need to add is an image.

To add an image, we use an image tag.

The image tag looks like this:

```html
<img src="http://website.com/MY_IMAGE.png">
```

Let's try adding a picture of me to the page (Just for time's sake, let's just
use a picture of me and after you finish the tutorial, you can change it to a
picture of yourself).

This is a link to my picture:

```
http://i.imgur.com/C6P1T0G.jpg
```

Feel free to copy and paste that into JSBin.

![](img/img.gif)

The image is taking a lot of room right now but if we scroll down on the right
side:

![](img/scroll_down.gif)

Ok. We need to make the picture smaller:

But before we do that, let's understand how the image tag works:

```html
<img src="http://i.imgur.com/C6P1T0G.jpg">
 ^ "img" is the tag name
```

```html
<img src="http://i.imgur.com/C6P1T0G.jpg">

note that <img> does not have a closing tag
```

```html
<img src="http://i.imgur.com/C6P1T0G.jpg">
     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ this is an attribute
                                          of the image tag

     (think of attributes like settings)
```

```html
<img src="http://i.imgur.com/C6P1T0G.jpg">
     ^^^ "src" is the name of the attribute (think the name of the setting)
```

```html
<img src="http://i.imgur.com/C6P1T0G.jpg">
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
          "http://i.imgur.com/C6P1T0G.jpg" is the value
          of the "src" attribute (think value of the setting)
```

```html
<img src="http://i.imgur.com/C6P1T0G.jpg">
     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The way to say this is:
  the image has it's source attribute set to  "http://i.imgur.com/C6P1T0G.jpg"
```

## Changing the look and feel

Ok. The image is way too big. We need to fix it.

So so far, we have only really been putting content on the page and not really
changing the look and feel of it very much.

HTML is used for the content. There's this other language called CSS that we use to change the way things look and feel.

So if we want to change the size of an image, we need to use CSS.

To write CSS code, click "CSS" in the menu:

![](img/css.gif)

Let's write the code in the CSS box (don't copy and paste code you're trying to
learn because you won't remember it!)

```css
img {
  width: 50%;
}
```

![](img/50_percent.gif)

Cool! The image shrunk!

But what happens if I resize the page:

![](img/resize_page.gif)

## The basics of CSS

Let's breakdown what this means:

![](img/css_img_example.png)

![](img/img_css_highlight.png) For every `img` element

![](img/css_curly_braces.png) I want all the style properties inside the curly brackets to apply:

![](img/css_property.png) Specifically, I want the width

![](img/css_value.png) to be 50% of the width of the page.

**Vocabulary**

![](img/img_css_highlight.png) `img` is called the selector, it "selects" all
of the `img` tags

![](img/css_curly_braces.png) `{` `}` are called curly braces

![](img/css_property.png) `width`, the thing on the left side of the semicolon
is called the `"property"`

![](img/css_value.png) `50%` is what's known as the `"value"`

But what if I don't want my image to change sizes if my page changes sizes?

## Pixels

Lets change the units from a percentage to pixels.
This will now set the width of the image to always be `200px` or 200 pixels

![](img/pixels.gif)

And if we try to resize the page:

![](img/nothing_happens.gif)

nothing happens.

## We've made good progress:

This is where we want to go:

> ![](img/final_1.png)

We're here right now:

![](img/current.png)

## Making the image a circle

While we're working on the image, let's make it a circle.

We're going to use one of the most useful tools in programming to figure out how to do this, Google.

To figure this out, I would Google something like, `make image circular in css`

This is the first result I get

> ![](img/rounded_image.png)

I open it and see this site:

![](img/how_to_circular.png)

I focus on this line:

![](img/how_to_circular_highligh.png)

It seems like I need to add

```
border-radius: 50%;
```

![](img/border_radius.gif)

Hey! It works!

```
Note that this was just a brief introduction to using Google to figure out
how to do something. You will be doing this **_A LOT_** more of this in the
future.
```

## We've made more progress!

This is where we want to go:

> ![](img/final_1.png)

We're here right now:

![](img/current_2.png)

Now we have to:

- center everything
- change the font

## The body tag

We want to center everything in the entire page.

- We can add a tag called the `body` tag
- put everything inside of the body tag
- and then tell the CSS to center everything in the body tag

### We can add a tag called the `body` tag

![](img/body.gif)

### put everything inside of the body tag

![](img/body_copy.gif)

### indent properly

Because the `img`, `h1`, and `p` tag are all inside of the `body` tag now,
they need to be indented to be more readible:

![](img/indentation.gif)

### and then tell the CSS to center everything in the body tag

![](img/center.gif)

To go over the vocabulary of what we just did:

- we added a new selector, `body`
- this selects all the `body` elements on the page (there's only 1)
- and then sets the attribute `text-align` to have the value `center`.

This is one way that you can center everything on the page.

This is what I added. Again, don't copy and paste or else you won't remember.

```css
body {
  text-align: center;
}
```

## Changing the font

Now we also need to change the font:

We want to use the font `Arial` (feel free to use another font as well)

![](img/font.gif)

To go over the vocabulary of what we just did:

- we the `font-family` attribute to the `body` selector and set the value to
  `Arial`.

This changed the font for the text in the `h1` and `p` tag because they are
both inside of the `body` tag.

## Now for the final changes:

The website already looks complete but there are some things that are missing.

As an analogy, if I said the sentence "Me want apple.", you would know what I
meant but the sentence is gramatically wrong.

In the same way, Chrome understands the code that we have written even though
it is "gramatically" wrong. To make it gramatically correct we need to use the
tags that JSBin initially gave us.

Let's open up a new tab and open JSBin.

![](img/jsbin.gif)

For now, I wont explain what all this code means, you can

- google for what it means
- or ask someone else that might know what it means

Let's
- copy this starter code into our current project
- move the code in our `body` tag into their `body` tag
- delete our old `body tag`

### copy this starter code into our current project

![](img/copy_template.gif)

### move the code in our `body` tag into their `body` tag

![](img/body_cut.gif)

### delete our old `body tag`

![](img/delete_old_body.gif)

Huzzah! We did it! We're done! Now we need to save our work!

To do that, we must create a JSBin account first.


## Creating a JSBin Account

When we click "Login or Register"

![](img/login_or_register.gif)

We see that we can "Login or Register via GitHub".

Think about this like Facebook Login, except it is GitHub login.

What is GitHub?

It is a website used by many professional coders to collaborate on code.
Think Dropbox, but for code.

Let's make a GitHub account!

## Creating a GitHub account

Let's create our own GitHub account.

### In a new window, open [`https://github.com`](https://github.com)

> ![](img/c9_v2_setup_1.png)

### Create an account with a valid email

> ![](img/c9_v2_setup_2.png)

### Click "Sign up for GitHub"

> ![](img/c9_v2_setup_3.png)

### Validating your Email Address

- Check your email inbox for a confirmation email from GitHub
- Make sure you click on the link it tells you to to confirm your account.

> *Important Note*: If you don't do this now, you may run into an error in the
the future that may get you to rip your hair out!

## Login with GitHub

Now that you have a GitHub account, you can login with GitHub

![](img/login_with_github.gif)

## Get a link that everyone can see

Now that you're logged in, JSBin will not "turn off" your website.

So if you get the output URL, you can share this with everyone on the
entire internet now and they will be able to see your website!

## Feedback

Please help us improve this workshop by giving us feedback
[here in this form](https://docs.google.com/forms/d/1fxCx04NqDPFoAN6mJkEGoum1PXGYa1dMYO57UHtOOdE/viewform)!
We love constructive feedback so don't worry about being harsh!
