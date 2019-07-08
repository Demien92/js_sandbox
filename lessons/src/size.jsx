import React, {Component} from 'react';

class Size extends Component {
    // constructor(){
    //     super();
    //     this.onResize = this.onResize.bind(this);
    // }

    componentDidMount() {
        const bindedOnResize = this.onResize.bind(this);
        window.addEventListener('resize', bindedOnResize);
        this.unsubscribe = () =>{
            window.removeEventListener('resize', bindedOnResize)
        }

    }

    componentWillUnmount() {
        this.unsubscribe();
        // window.removeEventListener('resize', this.onResize);
    }

    onResize(){
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                {window.innerHeight}x{window.innerWidth}
            </div>
        );
    }
}

export default Size;