// 1. Mobile Hamburger Menu
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // 2. Quote Form - Send to WhatsApp
  const quoteForm = document.getElementById('quoteForm');

  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const moveDate = document.getElementById('move-date').value;
      const fromAddress = document.getElementById('from-address').value.trim();
      const toAddress = document.getElementById('to-address').value.trim();
      const bedrooms = document.getElementById('bedrooms').value;
      const moveType = document.getElementById('move-type').value;
      const message = document.getElementById('message').value.trim();

      // Build WhatsApp message
      let whatsappMessage = 'Hello Mokgotho Movers,%0A%0A';
      whatsappMessage += 'I would like a quote for my move:%0A%0A';
      whatsappMessage += 'Name: ' + name + '%0A';
      whatsappMessage += 'Phone: ' + phone + '%0A';
      if (email) whatsappMessage += 'Email: ' + email + '%0A';
      whatsappMessage += 'Move Date: ' + moveDate + '%0A';
      whatsappMessage += 'From: ' + fromAddress + '%0A';
      whatsappMessage += 'To: ' + toAddress + '%0A';
      whatsappMessage += 'Bedrooms: ' + bedrooms + '%0A';
      whatsappMessage += 'Move Type: ' + moveType + '%0A';
      if (message) whatsappMessage += '%0AAdditional Details:%0A' + message;

      // WhatsApp number (replace with actual number)
      const whatsappNumber = '27635688067'; // Remove the + sign

      // Redirect to WhatsApp
      const whatsappURL = 'https://wa.me/' + whatsappNumber + '?text=' + whatsappMessage;
      window.open(whatsappURL, '_blank');

      // Reset form
      quoteForm.reset();
    });
  }
});
