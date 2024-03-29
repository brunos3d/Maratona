import React from "react";
import Switch from "react-switch";

import { Container } from "./styles";

export default function({ label, checked, onChange }) {
    return (
        <Container>
            <span>{label}</span>
            <Switch
                checked={checked}
                onChange={onChange}
                height={15}
                width={36}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={23}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            />
        </Container>
    );
}
