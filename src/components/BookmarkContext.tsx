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
  bookmarks: [] as any,
  addBookmark: (bookmarkData: BookmarkData, url: string): void => {},
  deleteBookmark: (id: string): void => {},
});

export default function BookmarkManager() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  const addBookmark = (bookmarkData: BookmarkData, url: string) => {
    setBookmarks([
      ...bookmarks,
      {
        author_name: bookmarkData.author_name,
        currentTime: Date.now(),
        duration: bookmarkData.duration
          ? timeFormater(bookmarkData.duration)
          : "",
        height: bookmarkData.height,
        id: uuidv4(),
        provider_name: bookmarkData.provider_name,
        thumbnail_url: bookmarkData.thumbnail_url,
        title: bookmarkData.title,
        upload_date: bookmarkData.upload_date
          ? dateFormater(bookmarkData.upload_date)
          : "",
        url: bookmarkData.url || url,
        width: bookmarkData.width,
      },
    ]);
  };

  const deleteBookmark = (id: string) => {
    setBookmarks(bookmarks.filter((bookmark: any) => bookmark.id !== id));
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
