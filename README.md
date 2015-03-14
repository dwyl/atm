Liso
=======

Liso enables non-technical people to understand and test the web.

## Features

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
