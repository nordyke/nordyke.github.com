---
layout: post
title: Create Backbone-style Annotated Source Code
categories: [development]
tags: [documentation, docco]
fullview: false
---

Backbone, Underscore and CoffeeScript have awesome annotated source code.  And it's really easy to create in your own project using [Docco](http://jashkenas.github.io/docco/), a tool created by Backbone's Jeremy Ashkenas.

###Examples###

* Backbone - [http://backbonejs.org/docs/backbone.html](http://backbonejs.org/docs/backbone.html)
* Underscore - [http://underscorejs.org/docs/underscore.html](http://underscorejs.org/docs/underscore.html)
* Coffeescript - [http://backbonejs.org/docs/backbone.html](http://backbonejs.org/docs/backbone.html)


The incredibly simple installation and usage instructions are on the [Docco](http://jashkenas.github.io/docco/) project site.

Though it can be configured otherwise, Docco looks for single-line comment style of `//` to create the annotations.  It also supports basic Markdown syntax.  Docco would create [this page](/docs/user-docco.html) from the JS below.


{% highlight js %}
// User
// ---------

// User is a contrived and ridiculously stupid constructor to create a user,
// and its sole purpose is to give a simple demonstration
// of [Docco](http://jashkenas.github.io/docco/).  If you judge
// the code, friendship over.

//   (c) Aaron Nordyke 2014

// ------

// User Constructor.  `name` is the name of the User.
//
// **example:**  `var aaron = new User("Aaron")`
var User = function(name){

    // `User.name` is set to "Dave" by default
    this.name = name || 'Dave';
};

// Set the `name` of the user.  When choosing a name,
// make it the best that you can think of.  We don't
// need anymore Users running around named "Benedict",
// "Ackbar" or "The 12th Doctor".
User.prototype.setName = function(name){
    this.name = name;
};

// Get the `name` of the user
User.prototype.getName = function(){
    return this.name;
};
{% endhighlight %}