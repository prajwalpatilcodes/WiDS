const showLink = document.getElementById("Link");
if (new Date() >= new Date(2023, 1, 9)) {
    showLink.innerHTML = `<div class="update-item">
    Link to join the meeting:
</div>
<div class="link-section" id="Link">
    <a
        href="https://teams.microsoft.com/l/meetup-join/19%3ac579b74c1127458b90e24b4fb4e66567%40thread.tacv2/1675248596514?context=%7B%22Tid%22%3A%224a6f289e-64c4-47d9-9f04-1432721feede%22%2C%22Oid%22%3A%22fbfae65b-f866-49da-bf00-82ba964ecb8e%22%7D">
        <div class="cta-button join-button">Meeting Link</div>
    </a>
</div>`;
}