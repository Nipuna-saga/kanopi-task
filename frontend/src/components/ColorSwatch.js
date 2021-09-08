import Color from "./Color";

import { Row, Col, Button } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const ColorSwatch = () => {
  const [colors, setColors] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`/color-swatch/`);
      setColors(data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Row>
        <Col style={{display:'flex',justifyContent:"flex-end"}} offset={2} span={20}>
          <Button style={{margin:'5px'}}  type={"primary"} onClick={fetchData}>
            Generate
          </Button>
        </Col>
      </Row>
      <Row>
        {colors.map((color, index) => (
          <Color key={index} colorValue={color} index={index} />
        ))}
      </Row>
    </>
  );
};

export default ColorSwatch;
