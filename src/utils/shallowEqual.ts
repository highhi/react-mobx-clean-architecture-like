type Obj = {
  [index: string]: any
}

export default function shallowEqual(objA: Obj, objB: Obj): boolean {
  return !Object.keys(objA).some((key) => (objA[key] !== objB[key]))
} 