import {Col} from "antd";
import {useEffect, useState} from "react";

const Color = ({colorValue, index}) => {
    const [colorString, setColorString] = useState("rgb(0,0,0)");
    const {type, components,title} = colorValue;
    const [colorComponentLabels, setColorComponentLabels] = useState([]);

    useEffect(() => {
        const {color_components, color_display_labels} = components;

        setColorString(colorComponentsToHex(type, color_components));
        setColorComponentLabels(color_display_labels);
    }, [type, components]);

    return (
        <Col span={4} offset={index === 0 ? 2 : 0}>
            <div style={{backgroundColor: colorString, height: "100vh"}}>
                <div>
                    <h3
                        style={{
                            color: "white",
                            background: "black",
                            padding: "10px",
                            opacity: 0.5,
                        }}
                    >
                        {title}
                    </h3>
                    {colorComponentLabels.map((colorDisplayValue, index) => (
                        <div
                            key={index}
                            style={{
                                padding: "10px",
                                fontWeight: "1000",
                                background: "black",
                                opacity: 0.5,
                            }}
                        >
                            <h3
                                style={{
                                    color: "white",
                                }}
                            >
                                {" "}
                                {colorDisplayValue.label} : {colorDisplayValue.value}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </Col>
    );
};

const colorComponentsToHex = (type, colorComponents) => {
    if (type === "rgb") {
        const {r, g, b} = colorComponents;
        return `rgb(${r},${g},${b})`;
    } else if (type === "hsl") {
        const {h, s, l} = colorComponents;
        return `hsl(${h},${s}%,${l}%)`;
    }
};

export default Color;
