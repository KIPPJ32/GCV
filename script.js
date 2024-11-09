document.addEventListener("DOMContentLoaded", function () {
    function shareOnFacebook() {
        const urlToShare = 'https://github.com/KIPPJ32/GCV.git'; // URL to share
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        window.open(facebookShareUrl, 'Share on Facebook', 'width=600,height=400'); // Opens a pop-up window for Facebook sharing
    }

    function shareOnTwitter() {
        const urlToShare = 'https://github.com/KIPPJ32/GCV.git'; // URL to share
        const textToShare = 'Check out this GitHub repository!'; // Custom text for Twitter
        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
        window.open(twitterShareUrl, 'Share on Twitter', 'width=600,height=400'); // Opens a pop-up window for Twitter sharing
    }

    // Event listeners for the share buttons
    document.getElementById("share-facebook").addEventListener("click", shareOnFacebook);
    document.getElementById("share-twitter").addEventListener("click", shareOnTwitter);
});
