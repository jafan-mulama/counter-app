import React, { Component } from 'react';
import { count } from 'rxjs';

class Counter extends Component {
    state={
        count: 1,
        tags: ['tag1','tag2','tag3']
    };
    // constructor(){
    //     super();
    //     this.handleIncreament = this.handleIncreament.bind(this);
    //     //console.log('constructor',  this)
    // }

    handleIncreament(){
        console.log('increament clicked', this);
    }
    styles={
        fontSize:'15px',
        fontWeight: 'bold'
    };

    render() {
        return(
        <React.Fragment>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatcount()}</span>
            <button
            onClick={this.handleIncreament}
            className='btn btn-secondary btn-sm'>increament</button>
            <ul>
                {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
            </ul>
        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = 'badge m-2 bg-';
        classes += this.state.count === 0 ? 'warning' : "primary";
        return classes;
    }

    formatcount(){
        const {count}=this.state;
        return count === 0 ? 'Zero' :count;
    }
    }
export default Counter;