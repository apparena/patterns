import React from 'react';
import { CustomControl } from 'apparena-patterns-react';

export default function FormCustomControlExample() {
    return (
        <div>
            <h3>Checkboxes</h3>
            <CustomControl
                type="checkbox"
                label="Default checkbox"
            >
                <input
                    type="checkbox"
                    name="terms"
                />
            </CustomControl>
            <CustomControl
                type="checkbox"
                label="DOES NOT WORK YET Checkbox in danger validation state"
                validationState={"danger"}
            >
                <input
                    type="checkbox"
                    name="terms"
                />
            </CustomControl>
            <CustomControl
                type="checkbox"
                label="DOES NOT WORK YET Checkbox in success validation state"
                validationState={"success"}
            >
                <input
                    type="checkbox"
                    name="terms"
                />
            </CustomControl>
            <h3>Radio buttons</h3>
            <CustomControl
                type="radio"
                label="Default checkbox"
            >
                <input
                    type="checkbox"
                    name="terms"
                />
            </CustomControl>
            <CustomControl
                type="radio"
                label="DOES NOT WORK YET Checkbox in danger validation state"
                validationState={"danger"}
            >
                <input
                    type="checkbox"
                    name="terms"
                />
            </CustomControl>
            <CustomControl
                type="radio"
                label="DOES NOT WORK YET Checkbox in success validation state"
                validationState={"success"}
            >
                <input
                    type="checkbox"
                    name="terms"
                />
            </CustomControl>
        </div>
    );
}