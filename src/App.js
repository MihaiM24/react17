import React from "react";
import { Welcome } from "./Welcome";
import { Age } from "./Age";
export class App extends React.Component{
    render(){
        return <Welcome name={<strong>"Mihai"</strong>} age={62} renderAge={true}/>
    }
}