import React from "react";

const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor="names">Name</label>
        <input type="text" id="name" />
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
  );
};

export default Application;
