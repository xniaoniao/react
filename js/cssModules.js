/**
 * Created by xiaoniao on 17/3/3.
 */
import CSSModules from 'react-css-modules';
import styles from '../css/tabs.css';
import classNames from 'classnames';
import  React, {Component} from 'react';
class App extends Component {
    render() {
        const cx = classNames({
            confirm: true
        });
        window.ssss = styles;
        return(
            <div className={styles.root}>
                <a href="#" className={styles[cx]}>ddd</a>
            </div>
        )
    }
}
export default App;