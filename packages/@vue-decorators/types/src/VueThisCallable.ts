import VueThisType from "./VueThisType";

export default interface VueThisCallable<V, T> {
    (this: VueThisType<V>): T;
}
