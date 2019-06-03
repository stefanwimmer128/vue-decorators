import {
    DocumentNode,
} from "graphql";
import {
    ApolloVueThisType,
    VueApolloQueryOptions,
} from "vue-apollo/types/options";
import {
    createDecorator,
    VueDecorator,
} from "vue-class-component";

interface SmartQueryOptions<V, T, R, I> extends VueApolloQueryOptions<V, R> {
    query: ((this: ApolloVueThisType<V>) => DocumentNode) | DocumentNode;
    variables?: ((this: ApolloVueThisType<V>) => I | I);
    update?: (this: ApolloVueThisType<V>, data: R) => T;
    client?: string;
}

type CallableSmartQueryOptions<V, T, R, I> = SmartQueryOptions<V, T, R, I> | ((this: ApolloVueThisType<V>) => SmartQueryOptions<V, T, R, I>);

export default function SmartQuery(query: DocumentNode): VueDecorator;
export default function SmartQuery<V = any, T = any, R = any, I = any>(options: CallableSmartQueryOptions<V, T, R, I>): VueDecorator;

export default function SmartQuery<V = any, T = any, R = any, I = any>(options: DocumentNode | CallableSmartQueryOptions<V, T, R, I>) {
    return createDecorator((cOptions: any, key) => {
        (cOptions.apollo = cOptions.apollo || {})[key] = options;
    });
}
