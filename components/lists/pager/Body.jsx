import {noOp} from "velor-utils/utils/functional.mjs";
import classNames from "classnames";
import {Datum} from "./Datum.jsx";
import {normalizeValue} from "./filter.mjs";

export const Body = props => {

    const {
        content,
        onClick,
        onCheck,
        fields,
        tag,
        onFilter,
        filter,
        rowClassName = noOp
    } = props;

    return <tbody>
    {
        content.length === 0 ?
            <tr>
                <td colSpan={fields.length + 1}>No content</td>
            </tr> :
            content?.map((elem, index) =>
                <tr className={classNames(elem.className, rowClassName(elem))}
                    key={`file-line-${index}`}>
                    <td onClick={() => onCheck(index, !elem.checked)}>
                        <input type="checkbox" checked={!!elem.checked}/>
                    </td>
                    {
                        fields.map(field => <Datum
                            elem={elem}
                            index={index}
                            field={field}
                            onFilter={value => {
                                value = normalizeValue(value);
                                onFilter({
                                    ...filter,
                                    [field.name]: value
                                });
                            }}
                            tag={tag}
                            onClick={onClick}/>)
                    }
                </tr>
            )
    }
    </tbody>
}