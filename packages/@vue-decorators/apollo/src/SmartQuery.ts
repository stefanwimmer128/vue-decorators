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

interface SmartQueryOptions<V, R, T> extends VueApolloQueryOptions<V, R> {
    query: ((this: ApolloVueThisType<V>) => DocumentNode) | DocumentNode;
    variables?: ((this: ApolloVueThisType<V>) => T | T);
    client?: string;
}

type CallableSmartQueryOptions<V, R, T> = SmartQueryOptions<V, R, T> | ((this: ApolloVueThisType<V>) => SmartQueryOptions<V, R, T>);

export default function SmartQuery(query: DocumentNode): VueDecorator;
export default function SmartQuery<V, R = any, T = any>(options: CallableSmartQueryOptions<V, R, T>): VueDecorator;

export default function SmartQuery<V, R = any, T = any>(options: DocumentNode | CallableSmartQueryOptions<V, R, T>) {
    return createDecorator((cOptions: any, key) => {
        (cOptions.apollo = cOptions.apollo || {})[key] = options;
    });
}
