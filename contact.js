document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        action: document.getElementById('action').value
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
        .then(() => {
            alert('Email sent successfully!');
            document.getElementById('contactForm').reset();
        }, (error) => {
            alert('Failed to send email. Please try again later.');
            console.error('EmailJS error:', error);
        });
});
