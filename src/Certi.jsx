import React from "react";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import {info} from "./Input";

function Certi() {
    const information = info;

    const handleDownload = async () => {
        const canvas = await html2canvas(document.querySelector(".main"));
        const dataURL = canvas.toDataURL("image/png");
        downloadjs(dataURL, "download.png", "image/png");
    }

    return (
    <div>
        <div class="main">
        <div class="top">
            <h1 class="heading">Certificate of Achievement</h1>
        </div>
        <p>This certificate is presented to</p>
        <p class="name">{information[0].name}</p>
        <p class="roll">Roll number: {information[0].roll}</p>
        <p>in recognition of outstanding performance in [event name]</p>
        <p>IIT Madras is honoured to award this certificate.</p>
        <div class="flex">
          <p class="date">Date:</p>
          <p class="signature">Signature:</p>
        </div>
        </div>
        <div class="button-div">
          <button class="download" onClick={handleDownload}>Download</button>
        </div>
    </div>
    )
}

export default Certi;