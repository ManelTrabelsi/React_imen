import React , {Component} from 'react'
import Content from './Content'

class MySalati extends React.Component
{
    state =
    {
        salat : []
    }

    componentDidMount()
    {
        const axios = require("axios");
        axios
        (
            {
                "method":"GET",
                "url":"https://aladhan.p.rapidapi.com/calendarByCity",
                "headers":
                {
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"aladhan.p.rapidapi.com",
                    "x-rapidapi-key":"0238bdc37dmshc0b0345e285d8dap1efac5jsnd682abccbb82"
                }
                ,"params":
                {
                    "city":"Tunis",
                    "country":"Tunisia",
                    "month":"12",
                    "year":"2019"
                }
            }
        )
        .then
        (
            (response)=>
            {  
                console.log(response.data.data[0].timings);
                this.setState
                (
                    {
                        salat : response.data.data[0].timings
                    }
                )
            }
        )
        .catch
        (
            (error)=>
            {
                console.log(error)
            }
        )
    }

    render()
    {
        return(
            <div>
               the salat is  {this.state.salat.Fajr}
               <Content val={this.state.salat} />
            </div>
        )
    }
}

export default MySalati