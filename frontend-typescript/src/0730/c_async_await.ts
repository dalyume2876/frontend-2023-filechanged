function downloadFile(filename: string): Promise<String> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Download file: ${filename}`)
        }, 2000)
    })
}

async function downloadAllFiles() {
    const file1 = await downloadFile('file1.txt')
    console.log(file1)
    
    const file2 = await downloadFile('file2.txt')
    console.log(file2)

    const file3 = await downloadFile('file3.txt')
    console.log(file3)

}

downloadAllFiles();

function getJson(url: string): Promise<any> {
    return fetch(url).then(response => response.json)
}

getJson('https://api.github.com/users/github')
.then(user => getJson(user.repos_url).then(repos => {
    console.log('first repo :' + repos)
}))