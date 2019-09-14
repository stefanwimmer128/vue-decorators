import {
    SubscribeToMoreOptions as ApolloSubscribeToMoreOptions,
} from "apollo-client/core/watchQueryOptions";
import {
    createDecorator,
    VueDecorator,
} from "vue-class-component";

import VueThisType from "@vue-decorators/types/lib/VueThisType";
import VariableObjectType from "@vue-decorators/types/lib/VariableObjectType";
import VueThisCallable from "@vue-decorators/types/lib/VueThisCallable";

export interface SubscribeToMoreOptions<V, R = any, S = R, I = VariableObjectType> extends Omit<ApolloSubscribeToMoreOptions<R, I, S>, "variables"> {
    variables?: I | ((this: VueThisType<V>) => I);
}

export default function SubscribeToMore<V = any, R = any, S = any, I = VariableObjectType>(apolloOptions: VueThisCallable<V, SubscribeToMoreOptions<V, R, S, I>>): VueDecorator {
    return createDecorator((options: any, key) => {
        options.apollo[key].subscribeToMore = apolloOptions;
    });
}
