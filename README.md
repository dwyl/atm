redpill
=======

A simple client-side debug viewer.

I wrote this a while back. Its not very efficient, 
but it solved the problem I had at the time 
(keeping track of viewport width/height)

I've been debating weather to re-write it using a Library 
(e.g. JQuery or Zepto) but want to keep it lightweight.



### Notes

YUI has a Y.log('msg here') method which does something 
similar to what I want: http://yuilibrary.com/yui/docs/console/
but it requires loading the YUI library which is 90kb *minified*! :-(

instead I want to create a 2k file which then loads all the other 
components JIT only *if* the person using the app wants/needs them.