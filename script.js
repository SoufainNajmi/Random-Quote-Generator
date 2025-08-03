 const citation = document.getElementById('citation');
        const autor = document.getElementById('autor');
        const btn = document.getElementById('btn');
        const citations = [
            {text: "Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès.", author: "Albert Schweitzer"},
            {text: "Ils ne savaient pas que c’était impossible, alors ils l’ont fait.", author: "Mark Twain"},
            {text: "La meilleure façon de prédire l’avenir, c’est de le créer.", author: "Peter Drucker"},
            {text: "Ne rêve pas ta vie, vis tes rêves.", author: "Anonyme"},
            {text: "Ce qui ne nous tue pas nous rend plus fort.", author: "Friedrich Nietzsche"},
            {text: "Fais de ta vie un rêve, et d’un rêve, une réalité.", author: "Antoine de Saint-Exupéry"}
        ];
     btn.addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * citations.length);
            citation.textContent = citations[randomIndex].text;
            autor.textContent = `- ${citations[randomIndex].author} -`;
        });

        // Initial call to display a random quote on page load
        btn.click();

// function about the change of the background color
        function changeBackgroundColor() {
            const colors = ['#FF5733','#f0f0f0','#3c0436ff','#494545', '#33FF57','#092d1dff', '#3357FF', '#03e6ffff', '#F0E68C', '#FF69B4'];
            const randomColor = colors[Math.floor(Math.random() * 10)];
            document.body.style.backgroundColor = randomColor;
           console.log(randomColor);
        } 