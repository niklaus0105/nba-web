import React, { Component } from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends Component {
    state = {
        value: 2
    }

    onCountSliderChange = (value) => {
        console.log("countslider:onchange");
        this.setState({value});
        this.props.onChange(value);
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
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}