import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import nba from 'nba';

export class SearchBar extends Component {
    state = {
        dataSource: [
            '1st',
            '2nd',
            '3rd'
        ]
    }

    onSelect = (value) => {
        console.log("onSelect "+value);
    }

    onSearch = (value) => {
        console.log("onSearch "+value);



        const dataSource = nba.searchPlayers(value).map(({fullName}) => fullName);
        this.setState({dataSource});
    }

    render() {
        return (
            <AutoComplete
                dataSource={this.state.dataSource}
                onSelect={this.onSelect}
                onSearch={this.onSearch}
                placeholder="Search NBA Player"
            />
        );
    }
}