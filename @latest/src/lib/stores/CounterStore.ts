import {makeAutoObservable } from 'mobx'
export default class CounterStore{
    title='Counter Store'
    count=42
    events:string[]=[
        `Initial Count is ${this.count}`
    ]
    constructor()
    {
       makeAutoObservable(this)
    }

    increament=(amount=1)=>{
        this.count+=amount
        this.events.push(`Increament by ${amount} - Count is now ${this.count}`)
    }

    decreament=(amount=1)=>{
        this.count-=amount
        this.events.push(`Decreament by ${amount} - Count is now ${this.count}`)

    }

    get eventCount()
    {
        return this.events.length;
    }

}