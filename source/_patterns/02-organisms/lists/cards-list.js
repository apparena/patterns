import React, {PropTypes} from "react";
import ReactComponent from "../../reactComponent";
import Card from "../../01-molecules/card/card";

export default class CardsList extends ReactComponent {
    static propTypes = {
        cardsList: PropTypes.arrayOf(
            PropTypes.shape({
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
        )
    };

    _renderCard() {
        if (this.props.cardsList.length) {
            return (
                <div className="card-deck">
                    {this.props.cardsList.map((item, index) => {
                        return (
                            <Card
                                card={item} key={index}
                            />
                        )
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="t-col-main-content p-a-1">
                <div className="t-entity-list">
                    {this._renderCard()}
                </div>
            </div>
        )
    }
}