import React, { Component } from 'react'
import { ShotChart } from './ShotChart'
import { Radio, Switch } from 'antd';
import _ from 'lodash';
import {CountSlider} from "./CountSlider"

const RadioGroup = Radio.Group;

export default class DataViewContainer extends Component {
    state = {
        minCount: 2,
        charType: 'hexbin',
        displayTooltip: true
    }

    onCountSliderChange = (minCount) => {
        console.log("dataviewcontainer:onchange");
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
                    this.state.charType === 'hexbin' ? <CountSlider onChange={_.debounce(this.onCountSliderChange,500)}/>: null
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