import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import cx from "classnames";

export default class Breadcrumb extends ReactComponent {
    static propTypes = {
        crumbNames: PropTypes.array.isRequired,
        crumbLocations: PropTypes.array.isRequired,
        classNames: PropTypes.string,
    };

    render() {
        return (
            <ol className={cx('breadcrumb', this.props.classNames)}>
                {this.props.crumbNames.map((name, i) => {
                    if (this.props.crumbLocations[i] !== '')
                        return <li className="breadcrumb-item" key={name + '--' + i}><a href={this.props.crumbLocations[i]}>{name}</a></li>;
                    else
                        return <li className="breadcrumb-item active" key={name + '--' + i}>{name}</li>;
                })}
            </ol>
        );
    }
}