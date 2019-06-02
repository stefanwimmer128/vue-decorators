import {
    DocumentNode,
} from "graphql";
import {
    ApolloVueThisType,
    ExtendableVueApolloQueryOptions,
} from "vue-apollo/types/options";
import {
    createDecorator,
    VueDecorator,
} from "vue-class-component";

interface VueApolloQueryOptions<V, R, T> extends ExtendableVueApolloQueryOptions<V, R> {
    query: ((this: ApolloVueThisType<V>) => DocumentNode) | DocumentNode;
    variables?: ((this: ApolloVueThisType<V>) => T | T);
    client?: string;
}

type VueApolloQueryOptionsType<V, R, T> = VueApolloQueryOptions<V, R, T> | ((this: ApolloVueThisType<V>) => VueApolloQueryOptions<V, R, T>);

export default function SmartQuery(query: DocumentNode): VueDecorator;
export default function SmartQuery<V, R = any, T = any>(options: VueApolloQueryOptionsType<V, R, T>): VueDecorator;

export default function SmartQuery<V, R = any, T = any>(options: DocumentNode | VueApolloQueryOptionsType<V, R, T>) {
    return createDecorator((cOptions: any, key) => {
        (cOptions.apollo = cOptions.apollo || {})[key] = options;
    });
}
