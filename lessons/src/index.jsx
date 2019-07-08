import React, {Component} from 'react';
import Size from './size'
import {render} from 'react-dom';


class User extends React.Component {

    state = {
        nameCount: 0,
        lastNameCount:0,
    };

    constructor(){
        super(props);
        this.onNameClick = this.onNameClick.bind(this)
    }

    componentWillMount() {
        console.log('will mount');
    }
    componentDidMount() {
        console.log('did mount');

    }
    componentWillUnmount() {
        console.log('unmount');
    }
    
    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps, this.props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    onNameClick(){
        console.log(this.props.fistName);
        this.setState({
            nameCount: this.state.nameCount +1,
        });
    }

    onLastNameClick(){
        console.log(this.props.fistName);
        this.setState({
            nastNameCount: this.state.lastNameCount +1,
        });
    }

    render(){
        console.log('render');

        return (
            <div >

                <div onClick={this.onNameClick}>{this.props.firstName}{this.stat.nameCount}</div>
                <div onClick={this.onLastNameClick.bind(this)}>{this.props.lastName}{this.stat.lastNameCount}</div>
            </div>

        );
    }
}


export default User;

class Toogle extends React.Component{
    constructor(){
        super();
        this.state = {
            show: false
        };
    }

    onClick(){
        this.setState({
            show: !this.state.show,
        })
    }

    render() {
        return(
            <div>
                <button
                    onClick={this.onClick.bind(this)}
                >
                    {this.state.show ? 'hide' : 'show'}
                </button>
                <User 
                    firstName={this.state.show ? 'hide' : 'show'}
                    lastName="Doganov"
                />
                {this.state.show ? this.props.children : null}

            </div>
        )
    }
}

const date = [
    { firstName : 'john', lastName : 'Doe'},
    { firstName : 'asd', lastName : '22'},
    { firstName : 'johxxcvn', lastName : '33'},
    { firstName : 'erwerwe', lastName : 'D44423oe'},
];

ReactDOM.render((
    <Toogle>
        <Size/>
        {date.map((user, index)) =>
            <User
            firstName={user.firstName}
            lastName={user.lastName}
            key={index}
            >

            </User>
            )}
    </Toogle>
),document.getElementById('root'));
