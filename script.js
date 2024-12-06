document.getElementById('expressButton').addEventListener('click', function() {
    const messages = [
        "Kamu mau ga jadi pacar aku?"
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.classList.remove('hidden');

    // Menampilkan pilihan ya atau tidak
    document.getElementById('responseSection').classList.remove('hidden');

    // Menyembunyikan tombol expressButton
    document.getElementById('expressButton').style.display = 'none';
    document.getElementById('introParagraph').style.display = 'none';
    document.getElementById('messages').style.display = 'none';
});

document.getElementById('yesButton').addEventListener('click', function() {
    const finalMessage = document.getElementById('finalMessage');
    finalMessage.textContent = "Yay! Senang mendengar itu❤️!";
    finalMessage.classList.remove('hidden');
    document.getElementById('responseSection').classList.add('hidden');
    document.getElementById('message').classList.add('hidden');
});

document.getElementById('noButton').addEventListener('click', function() {
    const finalMessage = document.getElementById('finalMessage');
    finalMessage.textContent = "Ohh,yaudah atuh gapapa so cantik ngentot!";
    finalMessage.classList.remove('hidden');
    document.getElementById('responseSection').classList.add('hidden');
    document.getElementById('message').classList.add('hidden');
});
