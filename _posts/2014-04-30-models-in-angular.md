---
layout: post
title: Models in Angular
categories: [development]
tags: [javascript, angularjs]
fullview: false
---

On the project at work, we were struggling with a way to maintain data between the various controllers and directives that make up the project.  We wanted a best practice, and the Angular documentation wasn't giving us any answers.

We tried a pub/sub system for a while to pass information.  It became useful for broadcasting events, but not as a central source of truth for the data.

Angular is a large toolbelt with lots ways to glue data and the DOM together.  However, the library is frustratingly silent about the Model (with a capital 'M').

It's tempting to make `$scope` the model.  On the surface, this makes sense.  Isn't the model the source of truth that drives what's in the view?  If `$scope` does just that, doesn't that make it the model? Emphatically, NO.

Models need to persist data between the views and routes.  `$scope` can't do that.  Its lifecycle is limited to the life of the `ng-controller`, which is usually limited to the life of a route.

Solution
====
Our eventual solution was to use [Angular factories/services](https://docs.angularjs.org/guide/providers).  They provide a way to make object factories, singletons, and constructors -- and then inject the creations into other angular modules.

In the example below, we created a `reservationModel` singleton that is accessed amongst various controllers and directives in the application.  Any updates to the properties of the `reservationModel` in one of the modules is automatically reflected in all of the others.


	// reservationModel
	// The data can be in any form.  The important thing is that the data exists outside of
	// temporary modules such as controllers and directives.
	angular.module('app').service('reservationModel', function(){
		'use strict';

		// Subset of the data from our actual Model
		this.locations = [];
		this.destination = {
			displayVal: '',
			hotelCode: '',
			hotelName: ''
		};
		this.rooms = {};
		this.dates = {};

		// Methods
		...
		// Interaction with server
		...

	});

	// Search Controller, into which we inject the reservationModel
	angular.module('app').controller('SearchCtrl', function($scope, reservationModel){
		'use strict';

		// Glue our model to the view using $scope.  Any updates to reservationModel will
		// now always be reflected in this Search Controller
		$scope.reservation = reservationModel;
	});
**Documentation:** [Angular Providers/Factories/Services](https://docs.angularjs.org/guide/providers)

Next steps for our team
====

* Create standard for organizing the Models
* Move all interface between the outside world and the Model into the Model.  This includes interaction with AJAX services.

Summary
===

Use [Angular Providers](https://docs.angularjs.org/guide/providers) to create Models, because they exist beyond the lifecycle of the controllers and directives.