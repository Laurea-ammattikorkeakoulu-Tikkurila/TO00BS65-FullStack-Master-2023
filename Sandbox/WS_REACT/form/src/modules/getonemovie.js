export function GetOneMovie(id) {
    fetch("http://localhost:5000/api/hae/" + id)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            console.log("Haun tulokset", data);
            const items = data;
            console.log("One movie: ", data);
            setResults([items])
        });
};
