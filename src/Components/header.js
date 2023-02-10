import React from "react";

function Header() {
  const [showHeading, setShowHeading] = Header(true);

  return (
    <div>
      <button onClick={() => setShowHeading(!showHeading)}>
        {showHeading ? 'Hide' : 'Show'} Heading
      </button>
      {showHeading && <h1>This is the header component</h1>}
    </div>
  );
}

export default Header;
