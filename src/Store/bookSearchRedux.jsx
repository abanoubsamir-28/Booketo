export const SET_BOOKS = 'SET_BOOKS'
export const SET_QUERY = 'SET_QUERY'
// set books action 
export function setBooks(books) {
    return {
        type: SET_BOOKS,
        payload: books
    }
}
// set query action 
export function setQuery(query) {
    return {
        type: SET_QUERY,
        payload: query
    }
}