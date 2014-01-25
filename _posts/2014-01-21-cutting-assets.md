---
layout: post
title: Cutting Simple Assets From Photoshop
categories: [development]
tags: [photoshop, development]
fullview: false
---

This is a quick way to cut assets out of a PSD when you don't need to slice specific sections of an image contained in a layer.  Once you're comfortable with the process and the keyboard shortcuts, you'll be able to cut out an asset in less than a minute.


The basic process is:

1. Select layers
2. Duplicate layers into a new document
3. Trim away the extra canvas area
4. Save the image


Select Layers
----------------

First, you will need to find the layers that make up your needed image.  It might be only one layer, or it could be 20.  The process will be the same.

**Tip**: Turn on **Auto-Select** in Photoshop, so that when you click on an image, the layer is automatically selected in your **Layers** palette.  This is a lot faster than drilling down into the **Layers** hierarchy created by the designer.

![Auto Select](/assets/img/cutting-assets/auto-select.png)

You'll have to manually identity which layers make up the aggregate image.  Then, highlight all layers that make up your image (**&#8984;+Click**) in the **Layers** palette.

![Highlight layers](/assets/img/cutting-assets/highlight-layers.png)

Duplicate Layers Into a New Document
--------

Once you have all your layers selected, you will duplicate the layers into a new document.

![Layers Menu](/assets/img/cutting-assets/layers-menu.png)

1. **Layers Palette Menu -> Duplicate Layer…**
2. Choose **Document: New**
3. Click **OK**

![Duplicate Layers](/assets/img/cutting-assets/duplicate.png)

Trim Away The Extra Canvas Area
-------
All the layers have now been duplicated into a new document, but the size the canvas is the same as the old document.  To fix this, trim away the excess area.

1. In the main menu bar, choose **Image -> Trim…**
2. Choose one of the options in **Based On**.  **Top Left Pixel Color** is sufficient most of the time.
3. The canvas size should be trimmed down to only the layers making up the image.

If too much has been trimmed away, undo (**&#8997;&#8984;Z**) and Trim again with a different choice in the **Based On** section.  If not enough has been trimmed, do an additional Trim with a different choice.


Save The Image
---------------

Once you're happy with your choice, it's time to save the image.

1. **File -> Save For Web** **(&#8997;&#8679;&#8984;S)**.
2. Choose image type (.png, .jpg, etc).
3. Use **Quality: Bicubic Sharper** if shrinking the image from a higher resolution.
4. Click **Save…**

Summary
---------------
This is a simple way to cut out assets when you don't need to slice up images within a layer.  Photoshop is a complicated program with lots of ways to do the same thing -- but as front-end developers, we only need to know a snippet of the tool to get what we need from a PSD.  I hope this helps get you get what you need faster.

Big thanks to [Chris Morris](https://twitter.com/Bishop81) for teaching me this slick method.
