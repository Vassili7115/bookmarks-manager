# Bookmarks Manager
It's a bookmark manager that takes Flickr and Vimeo type urls to display the following data depending on the type of url.

You have the possibility to delete an added bookmark.

It's possible to add a simple URL (other than Flickr or Vimeo) but depending on the type of url, it's possible that only the url will be used for the bookmark

### Viméo data
``` 
Preview (if available)
URL
Title
Author
Added date in the bookmarks manager
Upload date
Duration 
```

### Flickr data
``` 
Preview 
URL
Title
Author
Added date in the bookmarks manager
Upload date
Dimension 
```

----

## Techno : 
- React 18 with hooks (useContext, useEffect, useState, ...)
- Tailwind css for a rapid touch of style

----

## Setup : 

To test you must type the following commands in the terminal : 
```
git clone https://github.com/Vassili7115/bookmarks-manager.git
cd bookmarks-manager
npm install
npm start
```

Enjoy the app!!

## Screenshot
<img src="https://zupimages.net/up/22/15/vlq5.png" width="800" height="450">

---

## Next tasks
- Add persistence in local storage
- Add UI component tests with RTL (React Testing Library)
- Add unit tests for all utils
- Add more css : animation, scroll

