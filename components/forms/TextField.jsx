import {FormControl} from "react-bootstrap";
import {Form} from "react-bootstrap";

export default props => {
    const {
        target,
        onChange = () => {},
        onAccept = () => {},
        onAbort = () => {},
        disabled,
        name,
        label,
        type = "text",
        required = false
    } = props;

    function accept(event) {
        target[name] = event.target.value;
        onAccept(target[name], {target, name});
    }

    function change(event) {
        target[name] = event.target.value;
        onChange(target[name], {target, name});
    }

    function abort(event) {
        target[name] = event.target.value;
        onAbort(target[name], {target, name});
    }

    return <Form.Group className="text-field">
        <Form.Label className="text-secondary small" htmlFor={name}>{label}</Form.Label>
        <FormControl id={name} type={type}
                     disabled={disabled}
                     value={target[name] ?? ''}
                     name={name}
                     onChange={change}
                     required={required}
                     onKeyDown={event => {
                         if (event.key === 'Enter') {
                             accept(event);
                         } else if (event.key === 'Escape') {
                             abort(event);
                         }
                     }}/>
    </Form.Group>
}