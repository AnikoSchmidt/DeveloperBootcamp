let movies = [
    {
        title: "Mulan",
        rating: 5,
        watched: true
    },
    {
        title: "Interstellar",
        rating: 4,
        watched: true
    },
    {
        title: "Ipman",
        rating: 4,
        watched: false
    },
    {
        title: "Avatar",
        rating: 5,
        watched: true
    }
]
movies.forEach(function(movie) {
    let result = "You have ";
    if(movie.watched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
})