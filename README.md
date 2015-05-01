alvo
=======

![placeholder image](http://i.imgur.com/uQughKi.jpg)

**alvo** (pronounced "*al vu*!") enables ***non-technical people*** to ***understand*** and ***test*** the **web**.

## Why?

As [***Creative Technologist***](https://markavnet.wordpress.com/2010/06/22/what-the-heck-is-a-creative-technologist/)
we *love* speaking to the ***people*** that *use* our products to get their *feedback*.  
Often the people *using* our products are non-technical and thus showing them *code* is futile.  
Non-technical people are not "*stupid*"
(many of the "product owners" and "end users" we've worked with are *insanely smart*!),  
they just don't have [***time***](https://github.com/ideaq/time)
to know *everything* (*who does*?!) and thus learning to code (*in addition to their existing workload*)
is *impractical*.

So, we are on a *mission* to simplify web creativity for everyone!

## Features

### Plain English*

We want this to be as *simple* as possible, so we are
building it *from scratch* to look/read like English (*not code*).

A ***simple example*** of submitting a contact form using Liso:

```yml
visit /contact
input #text  "I want to know more about Liso!"
input #email "jenny.macawesome@email.net"
click #submit
```
That's it! it reads like english!

**Q**: *What* are the **#** (*hash*) simbols?  
**A**: They are the id's of the form elements on the *contact* page.  
(hint: *Scroll down* to the ***glossary*** to learn more)


### *Easily* Record How you *Use* a Website or Web Application

When the page loads we register:

+ Client's Browser + Version (full user-agent string & short name)
+ Page URL
+ Client ViewPort (width/height of browser window) dimensions
+ IP address of the client (all server logs store this)

Track/record actions performed on the page

- Page scroll (distance scrolled from the top)
- Click/Touch events [x,y], element type and class, id and name

What happens to this data?

- Save this data to local storage / cookie so a person can track their *own* history.
- Send data over WebSocket to server
+ Relay event log to connected obeservers (with permission)
