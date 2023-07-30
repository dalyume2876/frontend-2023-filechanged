function fetchDataCb(callback: (error: Error | null, data: any) => void) {}

fetchDataCb((error, data) => {
    if(error){
        console.log("error")
    } else{
        console.log(data)
    }
})  