
### Notes

A simple client-side debug viewer.

I *started* writing this a while back. Its not very efficient,
but it solved the problem I had at the time
(keeping track of viewport width/height)

I've been debating weather to re-write it using a Library
(e.g. JQuery or Zepto) but want to keep it lightweight.



How do I write this TDD/TFD...? Karma.js?


YUI has a Y.log('msg here') method which does something
similar to what I want: http://yuilibrary.com/yui/docs/console/
but it requires loading the YUI library which is **90kb** *minified*! :-(

instead I want to create a 2k file which then loads all the other
components JIT only *if* the person using the app wants/needs them.

I want to allow people to opt-in to analytics and to have full access to their
own stats. i.e. "personal analytics".
But don't want to over-complicate it...
Need to strike a balance between features and simplicity.

Considering using Require.js to load different elements...
Which means I need to write a require.js tutorial... :-)


## Research

### Existing Testing Systems

+ Test Anything Protocol: https://testanything.org/
+ eggPlant overview: https://www.youtube.com/watch?v=Px9Be559lKU
+ Caypbara: http://jnicklas.github.io/capybara/
  + Capybara cheat sheet: https://gist.github.com/zhengjia/428105
