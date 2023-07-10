// @ts-check

/**
 * @param {Array} data 
 * @param {number} countPerPage 
 * @param {number} page 
 * @returns {[Array, number, number, () => number, () => number]}
 */
const pagination = (data, countPerPage = 4, page = 1) => {
    let count = data.length;
    // page = 1;
    let pageCount = Math.ceil(count / countPerPage);
    let lastContentIndex = page * countPerPage;
    let firstContentIndex = lastContentIndex - countPerPage;
    let pageData = [];

    const changePage = (direction) => {
        if (direction) {
            if (page === pageCount) {
                page = pageCount;
                getPageData(page);
                return page;
            }
            page += 1;
            getPageData(page);
        } else {
            if (page === 1) {
                page = 1;
                getPageData(page);
                return page;
            }
            page -= 1;
            getPageData(page);
        }
        return page;
    }

    const setPage = (num) => {
        if (num > pageCount) {
            page = pageCount;
            getPageData(page);
        } else if (num < 1) {
            page = 1;
            getPageData(page);
        } else {
            page = num;
            getPageData(page);
        }
        return page;
    }

    const getPageData = num => {
        lastContentIndex = num * countPerPage;
        firstContentIndex = lastContentIndex - countPerPage;
        pageData = data.slice(firstContentIndex, lastContentIndex);
    }

    getPageData(page);

    return [
        pageData,
        page,
        pageCount,
        changePage,
        setPage
    ]
}

export { pagination };