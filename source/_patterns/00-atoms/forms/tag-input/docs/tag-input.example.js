import React from "react";
import {TagInput} from "apparena-patterns-react";

export default function TagInputExample() {
    return (
        <TagInput onChange={::this.change} value="action" options={['action','sci-fi','western']} />
    );
}