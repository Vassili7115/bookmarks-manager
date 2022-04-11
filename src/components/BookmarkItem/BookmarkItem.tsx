import React, { useContext, useEffect, useState } from "react";
import TrashIcon from "../../svg/Trash";
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
    <li className="flex flex-auto w-8/12 mx-auto my-7 border-4 p-2">
      <div className="object-cover">
        {thumbnail_url && (
          <img className="w-32" src={thumbnail_url} alt={title} />
        )}
      </div>

      <div className="flex flex-col	grow items-start pl-8">
        <a
          className="underline"
          href={url}
          rel="noreferrer noopener"
          target="_blank"
        >
          {url && <span>{url}</span>}
        </a>
        {title && <span>Title: {title}</span>}
        {author_name && <span>Author: {author_name}</span>}
        {addedTime && <span>{addedTime}</span>}
        {upload_date && <span>Upload date: {upload_date}</span>}
        {isVimeo && duration && <span>Duration: {duration}</span>}
        {isFlickr && width && height && (
          <span>
            Dimension: {width} x {height}
          </span>
        )}
      </div>

      <button
        className="flex items-center w-32 text-klaxoon"
        onClick={() => deleteBookmark(id)}
      >
        <TrashIcon />
        Delete
      </button>
    </li>
  );
}
