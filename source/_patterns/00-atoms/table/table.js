import React, {PropTypes} from "react";
import ReactComponent from "../../react-utils/component";
import cx from "classnames";

export default class Table extends ReactComponent {
    /*
        The tableData might seem overwhelming so here's an example that creates two columns with 3 rows:
        tableData={[
            { cols: ['Left', 'Right'] },
            { rows: { 0: ['25%', '75%'],
                      1: ['class-names:table-danger', '50%', '50%'],
                      2: ['66%', '33%']
                    }
            }
        ]}

        Columns need to come first and the indices for rows need to be zero-based and sequential.
        Prepend another element into a row and insert 'class-names: ...' into it to put the defined class names into the class attribute of that row
     */
    static propTypes = {
        classNames: PropTypes.string,
        tableHeadClassNames: PropTypes.string,
        tableData: PropTypes.array.isRequired,
    };

    getClassNameForRow(row) {
        let tmp = this.props.tableData[1]['rows'][row][0];
        if (tmp.includes('class-names:') === true) {
            return tmp.replace('class-names:', '');
        }
    }

    render() {
        let offset = 1;
        return (
            <table className={cx('table', this.props.classNames)}>
                <thead className={this.props.tableHeadClassNames}>
                    <tr key="table-header">
                        {this.props.tableData[0]['cols'].map((col, i) => {
                            return <th key={++offset^2}>{col}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(this.props.tableData[1]['rows']).map((row, i) => {
                        return (
                            <tr key={"table-row-" + (offset + i)} className={this.getClassNameForRow(i)}>
                                {this.props.tableData[1]['rows'][i].map((rowData, n) => {
                                    if (!rowData.includes('class-names:'))
                                        return <td key={++offset^2 * n}>{rowData}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}