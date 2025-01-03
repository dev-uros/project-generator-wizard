import type { QueryArray } from '../types'

export function mergeQueryAndBindings(queryArray: QueryArray[]): QueryArray[] {
  return queryArray.map((query) => {
    query.bindings.forEach((binding) => {
      query.query = query.query.replace(
        /\?/,
        typeof binding === 'string' ? `'${binding}'` : binding,
      )
    })
    return query
  })
}
