import axios from "axios";
import { store } from "../stores/store";
import { toast } from "react-toastify";
import { router } from "../../app/route/Router";

const sleep=(delay:number)=>{
    return new Promise(resolve=>{
        setTimeout(resolve,delay);
    })
}

const agent=axios.create({
    baseURL:import.meta.env.VITE_API_URL
});

agent.interceptors.request.use(config=>{
    store.uiStore.isBusy();
    return config;
})

agent.interceptors.response.use(
    async response=>{
   await sleep(1000);
   store.uiStore.isIdle();
   return response
},
async error=>{
    await sleep(1000);
    store.uiStore.isIdle();

    const {status,data}=error.response;

    switch (status) {
        case 400:
           if(data.errors){
            const modelStateErrors=[];
            for (const key in data.errors) {
                modelStateErrors.push(data.errors[key]);              
            }
            throw modelStateErrors.flat();
           }
           else{
            toast.error('Bad-request')
           }
            break;
        case 401:
            toast.error("Unauthorized")
            break;
        case 404:
            router.navigate('/not-found')
            break;
        case 500:
            router.navigate('/server-error',{state:{error:data}});
            break;
        default:
            break;
    }
}
)

export default agent;