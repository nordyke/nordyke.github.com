---
layout: post
title: Chrome Developer Tool -- Pause On Uncaught Exceptions
categories: [javascript, debugging]
tags: [javascript, debugging]
fullview: false
---

Ever get an vague error in the browser, but don't quite know how to track down the culprit?  A very quick way is to enable
`Pause execution on uncaught exceptions` in Chrome Developer Tools.

Sources Tab -> Click the hexagon/pause symbol till it turns purple.  The next time an exception is thrown but not caught,
a breakpoint is automatically created in Developer tools.

### Execution Pause Choices###

**NO PAUSE**  ![Do not pause](/assets/img/debugging/no-pause.png)

 Default choice.  No pause in execution occurs for any exceptions.

---

**PAUSE ON ALL EXCEPTIONS**  ![Do not pause](/assets/img/debugging/all-exceptions.png)

Execution is paused for all exceptions, regardless of whether they have been caught.  You usually don't need to use, since you
have to manually continue execution on exceptions you don't care about.

---

**PAUSE ON UNCAUGHT EXCEPTIONS**  ![Do not pause](/assets/img/debugging/uncaught-only.png)

Execution is only paused if an exception has been thrown but no code has been written to catch it.  This is our golden boy.

### The golden boy ###

When the pause happens, you have all of the tools at your disposal that would be there for an intentional breakpoint.

Three of the most valuable at this moment are:

1. **Scope Variables** - inspect all objects and primitives within the current scope (Local, Closure, Global)

![Scope Variables](/assets/img/debugging/scope-variables.png)

2. **Console** - You have access to all the scope variables, so you can interact with them in the console tab.

3. **Call Stack** - You can walk backward through the call stack to find the original offending method call.

![Call Stack](/assets/img/debugging/call-stack.png)

### Summary ###

Next time you get a vague exception thrown, turn on the Pause feature in Chrome.  It's a powerful way to inspect the state of your code at the instant before the exception is thrown.


