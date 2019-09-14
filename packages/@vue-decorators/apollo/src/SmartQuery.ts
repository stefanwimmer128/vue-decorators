import {
    DocumentNode,
} from "graphql";
import {
    VueApolloQueryDefinition,
} from "vue-apollo/types/options";
import {
    createDecorator,
    VueDecorator,
} from "vue-class-component";

import VueThisType from "@vue-decorators/types/lib/VueThisType";
import VariableObjectType from "@vue-decorators/types/lib/VariableObjectType";
import VueThisCallable from "@vue-decorators/types/lib/VueThisCallable";

export interface SmartQueryOptions<V, T, R extends VariableObjectType, I extends VariableObjectType> extends VueApolloQueryDefinition<V, R> {
    query: ((this: VueThisType<V>) => DocumentNode) | DocumentNode;
    variables?: I | ((this: VueThisType<V>) => I);
    update?: (this: VueThisType<V>, data: R) => T;
    client?: string;
}

export type CallableSmartQueryOptions<V, T, R extends VariableObjectType, I extends VariableObjectType> = SmartQueryOptions<V, T, R, I> | ((this: VueThisType<V>) => SmartQueryOptions<V, T, R, I>);

export default function SmartQuery(query: DocumentNode): VueDecorator;
export default function SmartQuery<V = any, T = any, R extends VariableObjectType = VariableObjectType, I extends VariableObjectType = VariableObjectType>(options: VueThisCallable<V, SmartQueryOptions<V, T, R, I>>): VueDecorator;

export default function SmartQuery<V = any, T = any, R extends VariableObjectType = VariableObjectType, I extends VariableObjectType = VariableObjectType>(options: DocumentNode | VueThisCallable<V, SmartQueryOptions<V, T, R, I>>) {
    return createDecorator((cOptions: any, key) => {
        (cOptions.apollo || (cOptions.apollo = {}))[key] = options;
    });
}
