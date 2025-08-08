const localVideoEl = document.querySelector('#myVideo');

let localStream
const show = async e =>{
await fetchUserMedia();
}
const fetchUserMedia = ()=>{
    return new Promise(async(resolve, reject)=>{
        try{
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false,
            });
            localVideoEl.srcObject = stream;
            localStream = stream;    
            resolve();    
        }catch(err){
            console.log(err);
            reject()
        }
    })
}

document.querySelector("#call").addEventListener('click', show())