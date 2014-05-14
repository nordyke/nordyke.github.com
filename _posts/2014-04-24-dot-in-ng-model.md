---
layout: post
title: Always Use a Dot In ng-model
categories: [development]
tags: [javascript, angularjs]
fullview: false
---

Always have a `.` in your `ng-model`.  This means that Angular is updating an Object property, rather than the entire Object reference or primitive.

*"..if you use ng-model there has to be a dot somewhere. If you don't have a dot, you're doing it wrong..".*
**Miško Hevery, Angular Core Team**

**Bad**

	<input type="text" ng-model="dogname" />

**Good**

	<input type="text" ng-model="dog.name" />

Sometimes in Angular, because of the way JS works, when you don't use a dot, `dogname` becames a new *child* value that is a shadow of the original *parent* `dogname`.  Now, whenever *child* `dogname` gets updated, *parent* does not.  This occurs mostly in nested `$scope` from `Controllers` and `Directives`.

Use the `.`, and you avoid the problem.