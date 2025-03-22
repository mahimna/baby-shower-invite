const rsvpForm = document.getElementById('rsvp-form');
const nameInput = document.getElementById('name');
const rsvpStatus = document.getElementById('rsvp-status');
const viewRSVPsButton = document.getElementById('view-rsvps');
const rsvpListDiv = document.getElementById('rsvp-list');

// Guest list
const guests = ["Mahimna Dave", "Shivani Pandya", "Parul Pandya"];

// Retrieve stored RSVPs from localStorage
let rsvpList = JSON.parse(localStorage.getItem('rsvpList')) || [];

rsvpForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (guests.includes(name)) {
        // Check if the person has already RSVP'd
        if (!rsvpList.includes(name)) {
            rsvpList.push(name);
            localStorage.setItem('rsvpList', JSON.stringify(rsvpList));
            rsvpStatus.innerHTML = `${name}, you've successfully RSVP'd!`;
        } else {
            rsvpStatus.innerHTML = `${name}, you've already RSVP'd!`;
        }
    } else {
        rsvpStatus.innerHTML = "Sorry, you're not on the guest list.";
    }

    nameInput.value = '';
});

// View all RSVPs when the button is clicked
viewRSVPsButton.addEventListener('click', function() {
    if (rsvpList.length > 0) {
        rsvpListDiv.innerHTML = `<h3>People who have RSVP'd:</h3><ul>${rsvpList.map(name => `<li>${name}</li>`).join('')}</ul>`;
    } else {
        rsvpListDiv.innerHTML = "<p>No one has RSVP'd yet.</p>";
    }
});
