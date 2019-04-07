
/**
 * 
 * @param {string} routerName 路由的第几级
 * @param {*} routerValue 新添加的路由目录j
 */
export function setLocolStorageItem(routerName,routerValue) {
    localStorage.clear();
    let router = localStorage.getItem(routerName) ;
    let routerArr = router ? localStorage.setItem(routerName, router.push(routerValue)) : localStorage.setItem(routerName, routerValue);
    return routerArr;
}

export function getLocalStorageItem(routerName) {
    return localStorage.getItem(routerName);
}