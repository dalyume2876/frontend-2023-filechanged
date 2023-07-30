async function fetchData() {
    try {
        let response = await fetch('https:// api.example.com/data')
        let data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }

    try {
        let response = await fetch('https:// api.exmaple.com/other-data')
        let otherData = await response.json();
        console.log(otherData)
    } catch (error) {
        console.log(error)
    }
}

fetchData();