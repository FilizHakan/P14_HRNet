/**
 * @name escapeRegExp
 * @description Create the RegExp we need for the search bar
 * @returns {JSX.Element}
 */
export default function escapeRegExp(value) 
{
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}