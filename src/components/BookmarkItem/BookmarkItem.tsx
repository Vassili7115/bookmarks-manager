import React, { useContext, useEffect, useState } from "react";
import { convertMSInSeconds } from "../../utils/time";
import { BookmarkContext } from "../BookmarkContext";

export type Bookmark = {
  author_name: string;
  currentTime: number;
  duration?: string;
  height?: number;
  id: string;
  provider_name: "Flickr" | "Vimeo";
  thumbnail_url: string;
  title: string;
  upload_date?: string;
  url: string;
  width?: number;
};

type BookmarkItemProps = {
  bookmark: Bookmark;
};

export default function BookmarkItem({ bookmark }: BookmarkItemProps) {
  const { deleteBookmark } = useContext(BookmarkContext);
  const [addedTime, setAddedTime] = useState("Added just now");

  const {
    author_name,
    currentTime,
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

  useEffect(() => {
    const interval = setInterval(() => {
      const timeElapsed = convertMSInSeconds(currentTime);
      setAddedTime(timeElapsed);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <li>
        {thumbnail_url && <img src={thumbnail_url} alt={title} />}
        <a href={url} rel="noreferrer noopener" target="_blank">
          {url && <span>Url: {url}</span>}
        </a>
        {title && <span>Title: {title}</span>}
        {author_name && <span>Author: {author_name}</span>}
        {upload_date && <span>UploadDate: {upload_date}</span>}
        {isVimeo && duration && <span>duration: {duration}</span>}
        {isFlickr && width && height && (
          <span>Dimension: {width} x {height}</span>
        )}
        {addedTime && <span>{addedTime}</span>}
      <button onClick={() => deleteBookmark(id)}>Delete</button>
    </li>
  );
}
