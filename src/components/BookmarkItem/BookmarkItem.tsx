import React, { useContext } from "react";
import { BookmarkContext } from "../BookmarkContext";

export type Bookmark = {
  author_name: string;
  duration?: number;
  height?: number;
  id: string;
  provider_name: "Flickr" | "Vimeo";
  thumbnail_url: string;
  title: string;
  upload_date?: number;
  url: string;
  width?: number;
};

type BookmarkItemProps = {
  bookmark: Bookmark;
};

export default function BookmarkItem({ bookmark }: BookmarkItemProps) {
  const { deleteBookmark } = useContext(BookmarkContext);

  return (
    <li>
      BookmarkItem
      <button onClick={() => deleteBookmark(bookmark.id)}>Delete</button>
    </li>
  );
}
