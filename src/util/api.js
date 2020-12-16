import { postForm } from "./request.js";
const api = 'api';
//获取长文章详情
export const getPostDetails = params => postForm(api + '/campaignpage/detail', params);
//获取deals列表
export const getDealList = params => postForm(api + '/deals/getList', params);
//获取商品评论
export const getCommentList = params => postForm(api + '/dealsreport/getlist', params);
//获取deals详情
export const getDealDetails = params => postForm(api + '/deals/detail', params);