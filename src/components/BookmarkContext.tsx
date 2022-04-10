import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BookmarksForm from "./BookmarkForm/BookmarkForm";
import { Bookmark } from "./BookmarkItem/BookmarkItem";
import BookmarksList from "./BookmarkList/BookmarkList";

export const BookmarkContext = createContext({
  addBookmark: (bookmarkData: Bookmark, url: string) => {},
  bookmarks: [] as any,
});

export default function BookmarkManager() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  const addBookmark = (bookmarkData: Bookmark, url: string) => {
    setBookmarks([
      ...bookmarks,
      {
        author_name: bookmarkData.author_name,
        duration: bookmarkData.duration,
        height: bookmarkData.height,
        id: uuidv4(),
        provider_name: bookmarkData.provider_name,
        thumbnail_url: bookmarkData.thumbnail_url,
        title: bookmarkData.title,
        upload_date: bookmarkData.upload_date,
        url: bookmarkData.url || url,
        width: bookmarkData.width,
      },
    ]);
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
      }}
    >
      <div>
        <h1>Bookmarks Manager</h1>
        <BookmarksForm />
        {bookmarks && <BookmarksList />}
      </div>
    </BookmarkContext.Provider>
  );
}
