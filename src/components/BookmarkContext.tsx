import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { dateFormater } from "../utils/date";
import { timeFormater } from "../utils/time";
import BookmarksForm from "./BookmarkForm/BookmarkForm";
import { Bookmark } from "./BookmarkItem/BookmarkItem";
import BookmarksList from "./BookmarkList/BookmarkList";

export type BookmarkData = {
  author_name: string;
  duration?: number;
  height?: number;
  provider_name: "Flickr" | "Vimeo";
  thumbnail_url: string;
  title: string;
  upload_date?: string;
  url?: string;
  width?: number;
};

export const BookmarkContext = createContext({
  bookmarks: [] as Bookmark[],
  addBookmark: (bookmarkData: BookmarkData, url: string): void => {},
  deleteBookmark: (id: string): void => {},
});

export default function BookmarkManager() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  const addBookmark = (bookmarkData: BookmarkData, defaultUrl: string) => {
    const {
      author_name,
      duration,
      height,
      provider_name,
      thumbnail_url,
      title,
      upload_date,
      url,
      width,
    } = bookmarkData;

    setBookmarks([
      ...bookmarks,
      {
        author_name,
        currentTime: Date.now(),
        duration: duration ? timeFormater(duration) : "",
        height,
        id: uuidv4(),
        provider_name,
        thumbnail_url,
        title,
        upload_date: upload_date ? dateFormater(upload_date) : "",
        url: url || defaultUrl,
        width,
      },
    ]);
  };

  const deleteBookmark = (id: string) => {
    setBookmarks(bookmarks.filter((bookmark: Bookmark) => bookmark.id !== id));
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
        deleteBookmark,
      }}
    >
      <div className="text-center bg-klaxoon-bg w-full h-full">
        <h1 className="text-white text-2xl font-bold pt-4 mb-6">
          Bookmarks Manager
        </h1>
        <BookmarksForm />
        {bookmarks && <BookmarksList />}
      </div>
    </BookmarkContext.Provider>
  );
}
