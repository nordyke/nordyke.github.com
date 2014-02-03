---
layout: post
title: Google's Angular Project Organization
categories: [angularjs, javascript]
tags: [angularjs, javascript]
fullview: false
---

Organizing a project's files falls under two general schools of thought.

**1. Object Type (aka "The sock drawer")**

The methodology is nicknamed the "The sock drawer", because it resembles how most people would organize their dresser drawers -- by clothing type.

**2. Module**

If a person organized their dresser by outfit, they would be following a modular approach. The major benefits to this approach are that related files are near each other, and you can get a sense of what a project does just by looking at the file structure.

## Google's Hybrid ##

Google's internal Angular projects delineate two different categories of files, and the organization is different for each.

### 1. (Potentially) Reusable Components ###

There are certain Angular classes that are good candidates be reused, both within the project and potentially in others. These include:

1. Filters (used to format data, filter collections, etc)
2. Directives (reusable DOM components and behavior)
3. Constants
4. Services (singletons containing things like ajax services)

Each of these is organized within their respective file-type folders (sock drawers).

### 2. Project Modules ###

Organizing by modules allows related files to be placed near each other, regardless of file type. Combinations of views and their corresponding controllers are stored in each module folder.

### Example Structure Using The Hybrid Approach ###

This is a very simple example to illustrate the hybrid approach.

	// Reusable components (potentially across projects!)
	Reusable/ (name it whatever you'd like)
		Filters/
			CurrencyFilters.js
			CollectionFilters.js
			DateFilter.js
		Directives/
			CalendarDirective.js
			SearchBarDirective.js
			SliderDirective.js
		Constants/
			Constants.js
		Services/
			User.js
			Transactions.js
	// Project Modules (most likely not useable across projects)
	Modules/
		Header/
			HeaderController.js
			header.html
		Transactions/
			TransactionController.js
			transactions.html
		ViewProfile/
			ViewProfileController.js
			viewProfile.html
		EditProfile/
			EditProfileController.js
			editProfile.html


## Summary ##

I think this is a compelling way to organize the codebase, regardless of the project's dominant framework.

## Further Study ##

[Architecture, The Lost Years](http://www.confreaks.com/videos/759-rubymidwest2011-keynote-architecture-the-lost-years) -- Uncle Bob Martin

[Code Organization In Large AngularJS and JavaScript Applications](http://cliffmeyers.com/blog/2013/4/21/code-organization-angularjs-javascript) -- Cliff Meyers



