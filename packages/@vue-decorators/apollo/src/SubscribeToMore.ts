import {
    DocumentNode,
    ExecutionResult,
} from "graphql";
import {
    ApolloVueThisType,
} from "vue-apollo/types/options";
import {
    createDecorator,
    VueDecorator,
} from "vue-class-component";

import VariableObjectType from "@vue-decorators/types/lib/VariableObjectType";
import VueThisCallable from "@vue-decorators/types/lib/VueThisCallable";

export interface SubscribeToMoreOptions<V, R extends VariableObjectType, S extends VariableObjectType, I extends VariableObjectType> {
    document: DocumentNode;
    variables?: I | ((this: ApolloVueThisType<V>) => I);
    updateQuery?: (this: ApolloVueThisType<V>, previousQueryResult: R, options: {
        error: any,
        subscriptionData:  ExecutionResult<S>;
        variables?: I;
    }) => R;
    onError?: (error: Error) => void;
}

export default function SubscribeToMore<V = any, R = any, S = any, I = VariableObjectType>(options: VueThisCallable<V, SubscribeToMoreOptions<V, R, S, I>>): VueDecorator {
    return createDecorator((cOptions: any, key) => {
        cOptions.apollo[key].subscribeToMore = options;
    });
}
