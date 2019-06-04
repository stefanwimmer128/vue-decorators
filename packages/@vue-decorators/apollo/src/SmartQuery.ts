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

import VariableObjectType from "@vue-decorators/types/lib/VariableObjectType";
import VueThisCallable from "@vue-decorators/types/lib/VueThisCallable";

export interface SmartQueryOptions<V, T, R extends VariableObjectType, I extends VariableObjectType> extends VueApolloQueryOptions<V, R> {
    query: ((this: ApolloVueThisType<V>) => DocumentNode) | DocumentNode;
    variables?: I | ((this: ApolloVueThisType<V>) => I);
    update?: (this: ApolloVueThisType<V>, data: R) => T;
    client?: string;
}

export type CallableSmartQueryOptions<V, T, R extends VariableObjectType, I extends VariableObjectType> = SmartQueryOptions<V, T, R, I> | ((this: ApolloVueThisType<V>) => SmartQueryOptions<V, T, R, I>);

export default function SmartQuery(query: DocumentNode): VueDecorator;
export default function SmartQuery<V = any, T = any, R = VariableObjectType, I = VariableObjectType>(options: VueThisCallable<V, SmartQueryOptions<V, T, R, I>>): VueDecorator;

export default function SmartQuery<V = any, T = any, R = VariableObjectType, I = VariableObjectType>(options: DocumentNode | VueThisCallable<V, SmartQueryOptions<V, T, R, I>>) {
    return createDecorator((cOptions: any, key) => {
        (cOptions.apollo = cOptions.apollo || {})[key] = options;
    });
}
