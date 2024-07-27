import React from 'react';

function NewsSidebar() {
  return (
    <div className="col-md-2 news-sidebar d-none d-md-block">
      <h2>News</h2>
      <ul>
        <li><a href="https://www.wsj.com/">Breaking News 1</a></li>
        <li><a href="https://www.wsj.com/">Breaking News 2</a></li>
        <li><a href="https://www.wsj.com/">Breaking News 3</a></li>
        <li><a href="https://www.wsj.com/">Breaking News 4</a></li>
      </ul>
    </div>
  );
}

export default NewsSidebar;
