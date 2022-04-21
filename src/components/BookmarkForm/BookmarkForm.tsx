import React, { useContext, useState } from "react";
import { bookmarkUrlValidation } from "../../utils/url";
import { BookmarkContext } from "../BookmarkContext";

export default function BookmarksForm() {
  const { addBookmark } = useContext(BookmarkContext);

  const [bookmarkUrl, setBookmarkUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const getBookmarkData = (bookmarkUrl: string) => {
    fetch(`http://noembed.com/embed?url=${bookmarkUrl}`)
      .then((response) => response.json())
      .then((data) => addBookmark(data, bookmarkUrl))
      .catch((err) => console.error("Request Failed", err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookmarkUrl(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const isValidUrl = bookmarkUrlValidation(bookmarkUrl);
    if (isValidUrl) {
      getBookmarkData(bookmarkUrl);
      setBookmarkUrl("");
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-fit items-start m-auto">
        <label htmlFor="bookmark-url">Add your url</label>
        <div className="flex flex-row w-fit	">
          <input
            autoFocus
            className="text-black border border-black rounded-sm h-8 p-2 mr-1 w-96"
            id="bookmark-url"
            name="bookmark-url"
            onChange={handleChange}
            placeholder="exemple: https://www.flickr.com/"
            required
            type="text"
            value={bookmarkUrl}
          />
          <button
            type="submit"
            className="bg-klaxoon text-white h-8 w-16 rounded-sm"
          >
            Add
          </button>
        </div>
      </div>
      {errorMessage && <p className="text-klaxoon">Please enter a valid url</p>}
    </form>
  );
}
