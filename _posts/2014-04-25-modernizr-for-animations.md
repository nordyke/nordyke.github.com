---
layout: post
title: User Modernizr for Buttery-smooth CSS3 Animations
categories: [development]
tags: [modernizr, css3, css]
fullview: false
---

Animations in CSS3 are awesome, because the GPU is utilized. Unfortunately, not every browser supports them. Using [Modernizr](http://modernizr.com/), you can target the browsers that support the CSS3 animations, and do something simpler for those that cannot.

Modernizr is a library whose main job is to detect whether the current browser has specific feature functionality built into it.  JavaScript is one way to test for feature presence.

	if(Modernizr.<feature>){
	…
	}


Modernizr also automatically add classes to the `html` tag for each feature the browser supports.


	<html lang="en" dir="ltr" id="modernizrcom" class="…csstransforms csstransitions…">

This allows us to use CSS3 to create our animations and fall back in the devices that can't do them.  Here's an example from a current project, where we need a panel to slide in from the left.  If the browser supports `csstransforms` and `csstransitions`, the panel slides in.  If the animation features are not supported, the fallback is for the panel to appear on the left, sans animation.

	//_directions.scss, using Compass mixins

	$panel-width: 430px;

	// Fallback for Browsers that don't support CCS3 transitions/transforms
	.directions-panel {
		// Place panel outside the viewport, on the left side.
  		left: (0 - $panel-width);
  		top: 150px;
  		position: fixed;
	}
	.directions-panel--open{
		// Open panel sits just inside the viewport, on the left side
  		left: 0;
	}

	// Animation for browsers that support CSS3 transitions/transforms.
	.csstransforms3d.csstransitions {

		// Default state.
		.directions-panel {
			// Override the fallback positioning
  			left: 0;
  			// If a transform happens on the element, have it occur over
  			// the course of 500ms.
  			@include transition(transform 500ms ease);
  			// Default state is just to the left of the viewport
  			@include transform(translate3d(-$panel-width,0,0));
		}

		// Open state
		.directions-panel--open {
			// Panel should be inside the viewport, on the left side.
			// Because of the transition rule above, an animation will occur over
			// 500ms.
  			@include transform(translate3d(0,0,0));
		}
	}

Activate the animation by toggling the class

	//directions.js

	//Active the animation by toggling the class
	$('.directions-panel').addClass('directions-panel--open');

Pure, buttery CSS3 animations.  No jQuery `.animate`.