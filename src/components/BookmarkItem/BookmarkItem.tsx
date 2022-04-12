import React, { useContext, useEffect, useState } from "react";
import TrashIcon from "../../svg/Trash";
import { convertMSInSeconds } from "../../utils/time";
import { BookmarkContext } from "../BookmarkContext";

export type Bookmark = {
  authorName: string;
  currentTime: number;
  contentDuration?: string;
  height?: number;
  id: string;
  providerName: "Flickr" | "Vimeo";
  thumbnailUrl: string;
  title: string;
  uploadDate?: string;
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
    authorName,
    currentTime,
    contentDuration,
    height,
    id,
    providerName,
    thumbnailUrl,
    title,
    uploadDate,
    url,
    width,
  } = bookmark;

  const isVimeo = providerName === "Vimeo";
  const isFlickr = providerName === "Flickr";

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
        {thumbnailUrl && (
          <img className="w-32" src={thumbnailUrl} alt={title} />
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
        {authorName && <span>Author: {authorName}</span>}
        {addedTime && <span>{addedTime}</span>}
        {uploadDate && <span>Upload date: {uploadDate}</span>}
        {isVimeo && contentDuration && <span>Duration: {contentDuration}</span>}
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
