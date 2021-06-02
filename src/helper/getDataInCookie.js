import Cookie from 'js-cookie';

export function getListTask() {
    const LIST_TASK = Cookie.get('list-task');

    if (LIST_TASK) {
        return JSON.parse(LIST_TASK);
    }

    return [];
}

export function getTypeFilter() {
    const TYPE_FILTER = parseInt(Cookie.get('type-filter'));
    const LIST_TYPE = [0, 1, 2, 3];

    if (LIST_TYPE.includes( TYPE_FILTER)) {
        return TYPE_FILTER;
    }

    Cookie.set('type-filter', 0);

    return 0;
}


