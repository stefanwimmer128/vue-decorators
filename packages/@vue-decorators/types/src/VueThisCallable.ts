import VueThisType from "./VueThisType";

type VueThisCallable<V, T> = T | ((this: VueThisType<V>) => T);

export default VueThisCallable;
