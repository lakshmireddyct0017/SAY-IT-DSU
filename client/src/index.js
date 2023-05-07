import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {disableReactDevTools} from '@fvilers/disable-react-devtools';
if(ProcessingInstruction.env.NODE_ENV==='production') disableReactDevTools()

ReactDOM.render(<App />, document.getElementById("root"))
