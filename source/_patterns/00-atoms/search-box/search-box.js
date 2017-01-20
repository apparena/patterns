import React, {PropTypes} from "react";
import cx from "classnames";
import Input from "../forms/input";
import InputGroup from "../../01-molecules/input-group/input-group";
import Icon from "../icons/icons";
import styles from "./search-box.scss";
import i18n from "i18n-js";

function SearchBox({typeData, className, refCallback, value, onChangeHandler, ...props}) {
    props.className = cx(
        styles.root,
        className
    );

    return (
        <InputGroup
            {...props}
            id="top-search"
            addon={<Icon name="search"/>}
        >
            <Input
                placeholder={i18n.t("search.placeholder", {entity: i18n.t(`entities.${typeData.entityType}`)})}
                id="top-search"
                className={styles.input}
                refCallback={refCallback}
                defaultValue={value}
                onChange={onChangeHandler}
            />
        </InputGroup>
    )
}

SearchBox.propTypes = {
    className: PropTypes.string,
    typeData: PropTypes.object.isRequired,
    refCallback: PropTypes.func,
    value: PropTypes.string,
    onChangeHandler: PropTypes.func,
};
SearchBox.defaultProps = {
    value: '',
};

export default SearchBox;