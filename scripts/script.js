
// when you click on a tweet
function showTweet(element) {
    const profile_pic = element.querySelector('.profile-pic').src;
    const title = element.querySelector('.card-title').innerText;
    const text = element.querySelector('.card-text').innerText;

    if (profile_pic&&title&&text) {
        document.getElementById('modal-prof').src = profile_pic;
        document.getElementById('modal-card-title').innerText = title;
        document.getElementById('modal-card-text').innerText = text;
    };
};

// when you click post on a tweet
document.addEventListener('DOMContentLoaded', () => {
  const tweet_form = document.getElementById('tweet-form');
  const tweet_input = document.getElementById('tweet-input');
  const main_content = document.getElementById('main-content');

  tweet_form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const text = tweet_input.value;

      const newtweet = document.createElement('span');
      newtweet.classList.add('d-block', 'border', 'border-secondary');
      newtweet.setAttribute('data-bs-toggle', 'modal');
      newtweet.setAttribute('data-bs-target', '#tweet-modal');
      newtweet.setAttribute('onclick', 'showTweet(this)');

      newtweet.innerHTML = `
          <div class="card border-0">
              <div class="card-body">
                  <img src="imgs/profile-pic.png" alt="Profile Picture" class="profile-pic">
                  <h2 class="card-title">Ellen @ellen</h2>
                  <p class="card-text">${text}</p>
              </div>
          </div>
      `;

      main_content.insertBefore(newtweet, tweet_form.parentNode.nextSibling);

      tweet_input.value = '';
  });
});
