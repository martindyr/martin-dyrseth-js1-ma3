const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3184f8cce8414bb5807120a8d3d42bd5"

const gamesContainer = document.querySelector(".gameList")

async function getGames() {
    try {

        const response = await fetch(url)
        const results = await response.json();
        const games = results.results
        gamesContainer.innerHTML = ""

        for (let i = 0; i < games.length; i++) {

            if (i === 8) {
                break;
            }

            gamesContainer.innerHTML += `
            <div class="gameListStyle">
            <p>Name: ${games[i].name}</p>
            <p>Rating: ${games[i].rating}</p>
            <p>Number of tags: ${games[i].tags.length}</p>
            </div>`
        }
    } catch (error) {
        alert("This page stopped loading, something went wrong.")
    }
}




getGames();