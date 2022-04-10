import React, { useState } from "react";
import { bookmarkUrlValidation } from "../../utils/url";

export default function BookmarksForm() {
  const [bookmarkUrl, setBookmarkUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value", e.target.value);
    setBookmarkUrl(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const isValidUrl = bookmarkUrlValidation(bookmarkUrl);
    if (isValidUrl) {
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
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
      </div>
      {errorMessage && (
        <div>
          <p>Please enter a valid url</p>
        </div>
      )}
    </form>
  );
}
