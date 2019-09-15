import VueThisCallable from "@vue-decorators/types/lib/VueThisCallable";
import {
    SubscribeToMoreOptions as ApolloSubscribeToMoreOptions,
} from "apollo-client/core/watchQueryOptions";

export default interface SubscribeToMoreOptions<TInstance, TData, TSubscriptionData, TSubscriptionVars> extends Omit<ApolloSubscribeToMoreOptions<TData, TSubscriptionVars, TSubscriptionData>, "variables"> {
    variables?: VueThisCallable<TInstance, TSubscriptionVars>;
}
