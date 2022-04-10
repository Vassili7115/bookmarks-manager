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

  const {
    author_name,
    duration,
    height,
    id,
    provider_name,
    thumbnail_url,
    title,
    upload_date,
    url,
    width,
  } = bookmark;

  const isVimeo = provider_name === "Vimeo";
  const isFlickr = provider_name === "Flickr";

  return (
    <li>
      <>
        {thumbnail_url && <img src={thumbnail_url} alt={title} />}

        <a href={url} rel="noreferrer noopener" target="_blank">
          {url && <span>{`Url: ${url}`}</span>}
        </a>
        {title && <span>{`Title: ${title}`}</span>}
        {author_name && <span>{`Author: ${author_name}`}</span>}
        {upload_date && <span>{`UploadDate: ${upload_date}`}</span>}
        {isVimeo && duration && <span>{`duration: ${duration}`}</span>}
        {isFlickr && width && height && (
          <span>{`Dimension: ${width} x ${height}`}</span>
        )}
      </>
      <button onClick={() => deleteBookmark(id)}>Delete</button>
    </li>
  );
}
