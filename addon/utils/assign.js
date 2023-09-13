// @flow

export default function pureAssign(...objects /*: Array<Object> */) /*: Object */ {
  return Object.assign({}, ...objects);
}
