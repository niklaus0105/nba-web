import React, { Component } from 'react'
import { ShotChart } from './ShotChart'
import { Slider, InputNumber, Row, Col, Radio, Switch } from 'antd';

const RadioGroup = Radio.Group;

export default class DataViewContainer extends Component {
    state = {
        minCount: 2,
        charType: 'hexbin',
        displayTooltip: true
    }

    onCountSliderChange = (minCount) => {
        this.setState({minCount});
    }

    onChartTypeChange = (e) => {
        const charType = e.target.value;
        this.setState({charType});
    }

    onDisplayTooltipChange = (displayTooltip) => {
       this.setState({displayTooltip});
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    displayTooltip={this.state.displayTooltip}
                    chartType={this.state.charType}
                />
                {
                    this.state.charType == 'hexbin' ?
                        (
                            <Row>
                                <Col span={12} offset={4}>
                                    <Slider min={2} max={20} onChange={this.onCountSliderChange} value={this.state.minCount} />
                                </Col>
                                <Col span={4}>
                                    <InputNumber
                                        min={2}
                                        max={20}
                                        style={{ marginLeft: 16 }}
                                        value={this.state.minCount}
                                        onChange={this.onChange}
                                    />
                                </Col>
                            </Row>
                        ) : null
                }

                <RadioGroup onChange={this.onChartTypeChange} value={this.state.charType}>
                    <Radio value="hexbin">Hexbin</Radio>
                    <Radio value="scatter">Scatter</Radio>
                </RadioGroup>
                <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked onChange={this.onDisplayTooltipChange}/>
            </div>
        );
    }
}