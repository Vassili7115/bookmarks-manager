import React, { useState } from "react";

export default function BookmarksForm() {
  const [bookmarkUrl, setBookmarkUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value", e.target.value);
    setBookmarkUrl(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    console.log("submit");
    e.preventDefault();
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
      </form>
  );
}
