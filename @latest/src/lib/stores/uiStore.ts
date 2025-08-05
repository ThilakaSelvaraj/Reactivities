import { makeObservable } from "mobx"

export class UiStore{
    isLoading=false

    constructor()
    {
        makeObservable(this);
    }

    // isBusy()
    // {
    //     this.isLoading=true
    // }

    // isIdle()
    // {
    //     this.isLoading=false
    // }

    isBusy=()=>{
        this.isLoading=true
    }

    isIdle=()=>{
        this.isLoading=false
    }
}