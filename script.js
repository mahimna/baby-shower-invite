const rsvpForm = document.getElementById('rsvp-form');
const nameInput = document.getElementById('name');
const rsvpStatus = document.getElementById('rsvp-status');

// Guest list
const guests = ["Mahimna Dave", "Shivani Pandya", "Parul Pandya"];

rsvpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = nameInput.value.trim();

    if (guests.includes(name)) {
        rsvpStatus.innerHTML = `${name}, you've been invited!`;
        sendEmail(name); // Send email when they RSVP "Yes"
    } else {
        rsvpStatus.innerHTML = "Sorry, you're not on the guest list.";
    }

    nameInput.value = '';
});

// Function to simulate sending an email to mahimnadave@gmail.com
function sendEmail(name) {
    fetch('https://formsubmit.co/ajax/mahimnadave@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: 'mahimnadave@gmail.com',
            message: `${name} has RSVP'd Yes!`
        })
    }).then(response => response.json())
      .then(data => console.log('Email Sent', data))
      .catch(error => console.error('Error:', error));
}
