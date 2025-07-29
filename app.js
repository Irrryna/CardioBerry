// Récupération des mesures en continu pour affichage
async function fetchLatestData() {
    try {
      const res = await fetch('https://votre-serveur.com/api/measurements/latest');
      const data = await res.json();
      document.getElementById('heartRate').textContent = data.heartRate;
      document.getElementById('fallDetected').textContent = data.fallDetected ? 'Oui' : 'Non';
    } catch (err) {
      console.error('Erreur API :', err);
    }
  }
  
  // Envoi formulaire Contact
  document.getElementById('contactForm').addEventListener('submit', async e => {
    e.preventDefault();
    const payload = {
      email: e.target.email.value,
      message: e.target.message.value
    };
    const res = await fetch('https://votre-serveur.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    document.getElementById('contactStatus').textContent =
      res.ok ? 'Message envoyé !' : 'Erreur lors de l’envoi.';
  });
  
  // Auto-refresh toutes les 5 s
  setInterval(fetchLatestData, 5000);
  fetchLatestData();
  