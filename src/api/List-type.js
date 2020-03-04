import axios from 'axios'

function getList(pageNum = 1, pageSize = 10) {
    const url = `http://59.111.92.205:8088/api/cms/article/open/banner/list?pageNum=${pageNum}&pageSize=${pageSize}`;
    return axios.post(url);
}
export {
    getList
}