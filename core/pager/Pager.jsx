import Form from "react-bootstrap/Form";
import '../../style/css/user-files.scss';
import ReactPaginate from "react-paginate";
import Button from "react-bootstrap/Button";
import classNames from "classnames";

import '../../style/css/paged-content.scss';
import Table from "./Table.jsx";
import {Alert} from "react-bootstrap";
import Disable from "../Disable";
import {noOp} from "velor-utils/utils/functional.mjs";
import {ArrowClockwise} from "react-bootstrap-icons";

import {
    useEffect,
    useState
} from "react";

export default props => {

    // console.log('PageContent.jsx');

    const {
        onPage,
        page,
        emptyMessage,
        fields = [],
        onCheck = noOp,
        onClick = noOp,
        disabled,
        tag,
        className,
        caption,
        footer,
        rowClassName,
        canReload = false,
        reloadTimeout = 0,
        clearSelectionOnReload = true,
        primaryKey = 'id'
    } = props;

    const [checked, setChecked] = useState([]);
    const [timeout, setDecrementTimeout] = useState(reloadTimeout);

    function setSelection(selection) {
        setChecked(selection.map(x => x[primaryKey]));
        onCheck(selection);
    }

    const doFetchContent = async page => {
        if (!onPage) return;

        if (page.page === undefined) {
            delete page.page;
        }
        if (page.sort === undefined) {
            delete page.sort;
        }

        if (page.per_page === undefined) {
            delete page.per_page;
        }

        await onPage(page);

        if (clearSelectionOnReload) {
            onCheck([]);
            setChecked([]);
        }
    };

    for (let elem of (page?.content ?? [])) {
        if (checked.includes(elem[primaryKey])) {
            elem.checked = true;
        }
    }

    useEffect(() => {
        let id1, id2;

        function decrement() {
            setDecrementTimeout(timeout => timeout - 1000);
        }

        if (reloadTimeout >= 1) {
            id1 = setTimeout(() => {
                setDecrementTimeout(reloadTimeout);
                doFetchContent(page);
            }, reloadTimeout);
            id2 = setInterval(decrement, 1000);
        }
        return () => {
            clearTimeout(id1);
            clearInterval(id2);
        }
    }, [reloadTimeout, page]);

    const reload = canReload ?
        <>
            <Button variant={"secondary"}
                    onClick={() => doFetchContent(page)}
                    className={"reload"}>
                <ArrowClockwise/>
            </Button>
        </> : null;

    if ((!page || !page.content || page.content.length === 0 && Object.keys(page.filter ?? {}).length === 0)) {
        return <div className={"pager pager-empty"}>
            {reload}
            <Alert className="animate__animated animate__faster animate__fadeIn"
                   variant="light">{emptyMessage}</Alert>
        </div>
    }

    const onFilterChange = async filter => {
        await doFetchContent({
            page: page.page,
            filter,
            per_page: page.per_page,
            sort: page.sort
        });
    };

    const onPageChange = async event => {
        const pageNo = event.selected + 1;
        await doFetchContent({
            per_page: page.per_page,
            page: pageNo,
            sort: page.sort,
            filter: page.filter
        });
    };

    const onSortChange = async sort => {
        await doFetchContent({
            page: page.page,
            sort,
            per_page: page.per_page,
            filter: page.filter
        });
    };

    const onPerPageChange = async event => {
        const per_page = event.target.value;
        await doFetchContent({
            page: page.page,
            sort: page.sort,
            filter: page.filter,
            per_page
        });
    };
    let pagination, rangeIndicator;

    let first = (page.page - 1) * page.per_page + 1;
    let last = Math.min(first + page.content.length - 1, page.total);

    const selectionCount = page.content?.filter(x => x.checked).length ?? 0;

    const perPageSelector = <Form.Select
        className={"per-page"}
        disabled={disabled}
        onChange={onPerPageChange}
        value={page.per_page}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
    </Form.Select>;

    if (page.per_page && page.page_count > 1) {

        rangeIndicator = <div className={"page-range"}>
            {first}..{last} / {page.total}
        </div>;

        pagination = <div
            className={classNames("pagination",
                {
                    "no-pagination": page?.page_count <= 1
                }
            )}>

            {caption}

            <ReactPaginate pageCount={page?.page_count}
                           forcePage={page.page - 1}
                           onPageChange={onPageChange}

                           previousLabel={<Button
                               variant="outline-secondary"
                               disabled={page.page <= 1 || disabled}>
                               Previous
                           </Button>}

                           nextLabel={<Button
                               variant="outline-secondary"
                               disabled={page.page >= page.page_count || disabled}>
                               Next
                           </Button>}/>

            {reload}
            {perPageSelector}

        </div>;
    } else {
        pagination = <div className={"pagination"}>
            {reload}
            {caption}
            {perPageSelector}
        </div>;

        rangeIndicator = <div className={"page-range"}>
            Total {page.total}
        </div>;
    }

    return <div className={classNames("data-table", className)}>
        {pagination}
        <div className="data animate__animated animate__fadeIn">
            <Table
                rowClassName={rowClassName}
                className={className}
                tag={tag}
                fields={fields}
                onCheck={setSelection}
                disabled={disabled}
                onClick={onClick}
                filter={page.filter}
                onFilter={onFilterChange}
                content={page.content}
                sort={page.sort}
                onSort={onSortChange}/>
        </div>

        <div className="footer">
            <div>

                {rangeIndicator}

                <div className={classNames("selection-count", {
                    'invisible': selectionCount <= 0,
                    'disabled': disabled
                })}>
                    {selectionCount} item{selectionCount > 1 ? 's' : ''} selected
                </div>
            </div>

            <Disable disabled={disabled}>
                {footer}
            </Disable>
        </div>
    </div>

}
