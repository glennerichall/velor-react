import Drawer from "./Drawer.jsx";
import React from "react";

const DrawerContainer = props => {

    const {
        visibleItem,
    } = props;

    // console.log('DrawerContainer.jsx', visibleItem);

    return React.Children.map(props.children, child => {

        if (!React.isValidElement(child)) {
            return child;
        }

        const {
            title,
            name,
            loading,
            className,
            id,
            onClose
        } = child.props;

        return <Drawer
            id={id}
            className={className}
            visible={visibleItem === name}
            title={title}
            name={name}
            loading={loading}
            onClose={onClose}>
            {child}
        </Drawer>
    });
}

export default DrawerContainer;