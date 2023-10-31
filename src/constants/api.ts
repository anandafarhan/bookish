/**
 * GET Subject details
 * - /subjects/programming.json
 *
 * GET Subject details with extra data [related subjects, prominent publishers, prolific authors, publishing_history]
 * - /subjects/programming.json?details=true
 *
 * @param {boolean} details - extra data [related subjects, prominent publishers, prolific authors, publishing_history]
 * - boolean
 *
 * @param {number} limit - limit item per-query
 * - number
 *
 * @param {number} offset - offset per-query for pagination
 * - number
 */
export const GET_SUBJECT_API = '/subjects';

/**
 * GET Work details
 * - /works/OL17860744W.json
 *
 * GET Work edition
 * - /authors/OL7115219A/editions.json
 *
 * GET Work bookshelves
 * - /authors/OL7115219A/bookshelves.json
 *
 * GET Work ratings
 * - /authors/OL7115219A/ratings.json
 */
export const GET_WORK_API = '/works';

/**
 * GET Author details
 * - /authors/OL7115219A.json
 *
 * GET Author works
 * - /authors/OL7115219A/works.json
 *
 * @param {number} limit - limit item per-query for author works
 * - number
 *
 * @param {number} offset - offset per-query for pagination for author works
 * - number
 */
export const GET_AUTHOR_API = '/authors';

/**
 * Search for large queries
 * - /search.json?q=the+lord+of+the+rings
 *
 * GET from fiels
 * - /search.json?author=tolkien
 * - /search.json?title=the+lord+of+the+rings
 */
export const SEARCH_API = '/search.json';

/**
 * @API_FORMAT
 * https://covers.openlibrary.org/b/$key/$value-$size.jpg
 *
 * Size - S / M / L
 *
 * @EXAMPLE
 * https://covers.openlibrary.org/b/id/240727-S.jpg
 *
 * https://covers.openlibrary.org/b/olid/OL7440033M-S.jpg
 *
 * https://covers.openlibrary.org/b/isbn/0385472579-S.jpg
 *
 * https://covers.openlibrary.org/b/isbn/9780385472579-S.jpg
 *
 * https://covers.openlibrary.org/b/lccn/93005405-S.jpg
 *
 * https://covers.openlibrary.org/b/oclc/28419896-S.jpg
 *
 * https://covers.openlibrary.org/b/goodreads/979250-S.jpg
 *
 * https://covers.openlibrary.org/b/librarything/192819-S.jpg
 */
export const GET_COVER_API = 'https://covers.openlibrary.org/b';
