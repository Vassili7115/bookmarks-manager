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
      <label htmlFor="bookmark-url">Add your url</label>
      <div>
        <input
          id="bookmark-url"
          name="bookmark-url"
          type="text"
          value={bookmarkUrl}
          onChange={handleChange}
          placeholder="exemple: https://www.flickr.com/"
          autoFocus
          required
        />
        <button>Add</button>
      </div>
      {errorMessage && <p>Please enter a valid url</p>}
    </form>
  );
}
