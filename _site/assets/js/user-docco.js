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