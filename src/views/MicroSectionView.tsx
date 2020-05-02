import React from "react";
import MicroFrontend from "../microfrontend/MicroFrontend";

const MicroSectionView = () => {

    return (
        <MicroFrontend name="MicroSection" host="http://127.0.0.1:7000" renderMethodName="renderMicroSection"/>
    )
}

export default MicroSectionView;