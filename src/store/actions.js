
export const addBook = (payload) => {
    return {type:'ADDBOOK',payload}
}
export const showBooks = () =>{
    return {type: 'LIST'}
}
export const getPosts = () =>{
    return {type: 'GET_POST'}
}
export const getPostsSuccess = (payload) =>{
console.log("🚀 ~ file: actions.js ~ line 12 ~ getPostsSuccess ~ payload", payload)
    
    return {type: 'GET_POST_SUCCESS', payload}
}
export const getPostsFail = (payload) =>{
    return {type: 'GET_POST_FAIL', payload}
}