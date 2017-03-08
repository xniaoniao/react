/**
 * Created by xiaoniao on 17/3/5.
 */

import  React, {Component} from 'react';

class ListItem extends Component {
    static contextTypes = {
        color: PropTypes.string
    };
    render() {
        const {value}  = this.props;
        return (
            <li style={{background : this.context.color}}>
                <span>{value}</span>
            </li>
        )
    }
}

class List extends Component {
    static childContextType = {
        color: PropTypes.string
    };
    getChildContext() {
        return {
            color: red
        }
    }
    render() {
        const {list} = this.props;
        return(
            <div>
               <ul>
                   {list.map((entry, index) => (
                       <ListItem key={`list-${index}`} value={entry.value}/>
                   ))}
               </ul>
            </div>
        )
    }
}
export default List;