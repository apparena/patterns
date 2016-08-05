import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import cx from "classnames"

export default class Card extends ReactComponent {
    static propTypes = {
        card: PropTypes.shape({
            content: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.shape({
                    status: PropTypes.string,
                    text: PropTypes.string
                })
            ]).isRequired,
            footer: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.string
            ]).isRequired,
            header: PropTypes.string,
            image: PropTypes.shape({
                src: PropTypes.string,
                overlay: PropTypes.shape({
                    title: PropTypes.string,
                    text: PropTypes.string
                })
            }).isRequired,
            listGroup: PropTypes.shape({
                items: PropTypes.arrayOf(
                    PropTypes.shape({
                        status: PropTypes.oneOfType([
                            PropTypes.bool,
                            PropTypes.string
                        ]),
                        header: PropTypes.oneOfType([
                            PropTypes.bool,
                            PropTypes.string
                        ]),
                        text: PropTypes.oneOfType([
                            PropTypes.bool,
                            PropTypes.string
                        ])
                    })
                )
            }).isRequired
        })
    };

    _renderHeader() {
        return (
            <h3 className="card-header">
                {this.props.card.header}
            </h3>
        )
    }

    _renderImage() {
        return (
            <div>
                <div className="card-img">
                    <img className="card-img-top img-fluid" src={this.props.card.image.src} alt="App screenshot"/>
                    {this._renderCardImageOverlay()}
                </div>
            </div>
        )
    }

    _renderCardImageOverlay() {
        if (this.props.card.image.overlay) {
            return (
                <div className="card-img-overlay">
                    <h4 className="card-title">{this.props.card.image.overlay.title}</h4>
                    <p className="card-text">{this.props.card.image.overlay.text}</p>
                </div>
            )
        }
    }

    _renderCardContent() {
        if (this.props.card.content) {
            return (
                <li className={cx("list-group-item", this.props.card.content.status)}>
                    <p dangerouslySetInnerHTML={{__html: this.props.card.content.text}}/>
                </li>
            )
        }
    }

    _renderListGroup() {
        if (this.props.card.listGroup.items.length) {
            return (
                <ul className="list-group">
                    {this._renderCardContent()}
                    {this.props.card.listGroup.items.map((item, index) => {
                        return (
                            <li className={cx("list-group-item", item.status)} key={index}>
                                <h5 className="list-group-item-heading">{item.header}</h5>
                                <p className="list-group-item-text">{item.text}</p>
                            </li>
                        )}
                    )}
                </ul>
            )
        }
    }

    _renderFooter() {
        if (this.props.card.footer) {
            return (
                <div className="card-footer">
                    {this.props.card.footer}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="card">
                {this._renderHeader()}
                {this._renderImage()}
                {this._renderListGroup()}
                {this._renderFooter()}
            </div>
        )
    }
}