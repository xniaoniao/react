/**
 * Created by xiaoniao on 17/3/7.
 */
import React, {Component} from 'react';
const MyContainer = (WrappedComponent) =>
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                name: ''
            };
        }
        onNameChange(event) {
            this.setState({
                name: event.target.value
            })
        }
        render() {
            const newProps = {
                name: {
                    value: this.target.name,
                    onChange: this.onNameChange
                }
            };
            console.log({...newProps});
            return <WrappedComponent {...this.props} {...newProps}/>
        }
    };
@MyContainer
class MyComponent extends Component {
    render() {
        return(
            <input name="name" {...this.props.name}/>
        )
    }
}
export default MyComponent;