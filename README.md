jQDrawBootstrapGrid
===================

A simple jQuery plugin that draws grid columns to a twitter bootstrap layout. 
Note: By default automatically add a "show/hide grid" button and start in hidden mode.

Requirements
------------
+ Twitter Bootstrap

+ JQuery < 1.7.*

Usage
-----
 After adding the javascript source to your document,
 apply the plugin to the bootstrap ".container":
 jQuery(".container").drawBootstrapGrid();

Options
-------
The default settings are:
{
    'columns':12,   //define how much columns to draw
     'singleColumnName': 'span1', //the css class name used in your bootstrap (just being caucious)
    'color':'lightgrey', //each columns background color
    'opacity':0.3,  //opacity of the rendered grid
    'buttonLabel': 'Show/Hide Grid', //the label for the button
    'startHidden':true, //if we want the grid to be shown initially
    'hiddenClassName': 'hidden' //the css class name used in your bootstrap to hide elements -> visibility: hidden
}

 
Support
------- 

Have a question, or found an issue? Just create a issue: https://github.com/plozi/jQDrawBootstrapGrid/issues


Authors
-------

**Christian Polzer**

+ chris@hai-fai.de
+ http://twitter.com/polzifer
+ http://github.com/plozi
+ http://hai-fai.de


Copyright and License
---------------------

The jQDrawBootstrapGrid Plugin is  licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) licenses. Copyright (c)2012 Christian Polzer.