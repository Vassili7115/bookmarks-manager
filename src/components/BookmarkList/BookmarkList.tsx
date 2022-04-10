import React, { useContext } from "react";
import { BookmarkContext } from "../BookmarkContext";
import BookmarkItem, { Bookmark } from "../BookmarkItem/BookmarkItem";

export default function BookmarksList() {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    <ul>
      {bookmarks.map((bookmark: Bookmark) => (
        <BookmarkItem key={bookmark.id} bookmark={bookmark} />
      ))}
    </ul>
  );
}
