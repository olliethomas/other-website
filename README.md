# This is a static website that we will be able to "post" to with github.
THE ACTUAL SITE IS CONTAINED IN \_site


This website uses Jekyll. Look it up! It's cool.
## Intro
So this is another idea for a website. It is very far from done, i.e. there's no real styling.
So the idea here is that there are a bunch of html templates and markdown files that are compiled into a static website. So you have a very flexible and easy blogging platform / CMS without the security issues and loads of PHP spewing everywhere.
The javascript is slow and needs an "off" button, for one. But I think it is very promising.
The website also works without javascript.

## Liquid templating
Liquid is a little templating language. One of its main uses is to include HTML templates into other files. This is then compiled into the big html document when the site is built.

## Static posting / markdown
If you go to the \_posts directory you will see some files with a .markdown type, this is a super simple language that is then converted to html by the site and put
in the appropriate section. In effect, all one will have to do to make a post is create a new file in the \_posts section following the format given in markdown and
it will be included. Look up markdown for more. It's got everything one would want for posting blogs.

The plan is that creating a new file in the correct section **on github** will make a new post on the live website so blogging becomes super easy.
New pages are created in the same way.

I plan to make a little script to make creating posts even easier, i.e. it will template them correctly and give it the correct filename.

## Sweet blog features
Posts may also include code with syntax highlighting and latex markup (not set up yet). Also images and other media.

## CSS / SCSS
The css for the site uses SCSS which is
basiclly a better version of CSS with much needed features, e.g. varibles. It's a superset of CSS so one should be able to pick it up pretty quickly. 
Posts and pages follow a template which will be styled appropriatly. If I say so myself i think the styling is layed out in a super simple way.

