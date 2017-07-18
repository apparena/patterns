import React from "react";
import {SelectMenu} from "apparena-patterns-react";

export default function SelectMenuExample() {
    return (
        <SelectMenu onChange={::this.change} defaultValue="action" options={["action","sci-fi","western"]} />
    );
}