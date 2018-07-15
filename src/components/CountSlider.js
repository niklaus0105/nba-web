import React, { Component } from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends Component {
    state = {
        value: this.props.value
    }

    onCountSliderChange = (value) => {
        console.log("countslider:onchange");
        const cleanValue = Number(value) ? Math.round(value) : this.state.value;
        this.setState({'value': cleanValue});
        this.props.onChange(cleanValue);
    }
    render() {
        return (
            <Row>
                <Col span={12} offset={4}>
                    <Slider min={2} max={20} onChange={this.onCountSliderChange} value={this.state.value} />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={2}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={this.state.value}
                        onChange={this.onCountSliderChange}
                    />
                </Col>
            </Row>
        );
    }
}