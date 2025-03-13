export default props => {
    return props.children.filter((x, index) => props.conditions[index]);
}