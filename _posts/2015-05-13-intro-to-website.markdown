---
layout: post
title: "How to post on this website!"
date: 2015-05-13 18:33:41
categories: internal posting
author: "Felix Bowman"
---

So you want to post on this website huh? Well that's pretty easy, let me show you how. 
This site is hosted by [GitHub Pages][pages] with [Jekyll][jekyll]. It's really
just a bunch of HTML templates that are generated to HTML. This document that
I am writing right now is in a variant of [Markdown][kramdown]. Once I upload 
this document to the correct directory on the GitHub page it will be automatically
turned into a blog post in HTML. Cool huh?

## How to Post
So the first thing to do is to navigate your way to [our repository][git]. Log in
as the account on the Facebook page to edit, or create your own and I will invite
you to the organization. Make
sure you are on the **gh-pages** branch (Have a look in the top left hand corner).
Click on the **\_posts** directory and you will see a couple of markdown documents.
When you open these documents GitHub will automatically render them so make sure you 
click on the **Raw** button in the top right. You can see the basic layout of one 
of these posts. On the top you have the post meta information, like title and author. 
The most important bit is the **layout** tag. That tells Jekyll that this is a blog
post. 

Go ahead and go back and the little plus sign here:


![git make new file]({{ site.baseurl }}/assets/blogpics/plus.png)

You can go ahead and create a new markdown file. Use the existing files as a template
to make your very own post. You can do all sorts of styling in markdown so have a look.

## Code inclusion
You can also include code like this:

{% highlight java %}
public class Blog {
    private writeup;
    private website;

    public Blog(String writeup, Website site) {
        this.writeup = writeup;
        this.website = website;
    }

    public void post() {
        website.upload(writeup);
    }
}
{% endhighlight %}

Cool huh? I imagine that should come in handy!

## Go write some stuff!
You can also push the **gh-pages** branch of the progsoc repository to upload a 
post. I'll write about that soon. 

Good luck posting!

[pages]:        https://pages.github.com/
[jekyll]:       http://jekyllrb.com/
[kramdown]:     http://kramdown.gettalong.org/
[git]:          https://github.com/sussex-progsoc/other-website/tree/gh-pages
