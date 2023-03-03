import React from "react";

const Application = () => {
  return (
    <>
      <h1>job application form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">bio</label>
          <textarea name="bio" id="bio"></textarea>
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">select a country</option>
            <option value="US">united states </option>
            <option value="GB">united kingdom</option>
            <option value="CA">Canada </option>
            <option value="IN">India</option>
          </select>
        </div>
        <div>
          <label htmlFor="names">
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit </button>
      </form>
    </>
  );
};

export default Application;
