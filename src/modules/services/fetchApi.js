const get = async (url) => {
   try {
    const res = await fetch(url);
    const data = await res.json();
    return data
       
   } catch (error) {
     return error  
   } 

}

const post = async (url,data) => {
    const config ={
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
    }

    try {
        const res = await fetch(url, onfig);
        const data = await res.json();
        return data
           
       } catch (error) {
         return error  
       } 
}
