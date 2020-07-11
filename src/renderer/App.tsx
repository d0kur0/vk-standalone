import React from "react";
import './app.css';

const { ipcRenderer } = require("electron");

ipcRenderer
    .invoke("asyncTest", { testMessage: "Async function" })
    .then((result: string) => {
      console.log(result);
    })
    .catch((error: any) => {
      console.log("Error");
    });

ipcRenderer.invoke("syncTest", { testMessage: "Sync function" }).then((result: string) => {
  console.log(result);
});

export default function App() {
  return <p>Hello world!</p>;
}
