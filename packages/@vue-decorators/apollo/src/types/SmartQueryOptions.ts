import OnceOrMore from "@vue-decorators/types/lib/OnceOrMore";
import VueThisCallable from "@vue-decorators/types/lib/VueThisCallable";
import VueThisType from "@vue-decorators/types/lib/VueThisType";
import {
    DocumentNode,
} from "graphql";
import {
    VueApolloQueryDefinition,
} from "vue-apollo/types/options";

import SubscribeToMoreOptions from "./SubscribeToMoreOptions";

export default interface SmartQueryOptions<TInstance = any, T = any, TData = any, TVars = any, TSubscriptionData = TData, TSubscriptionVars = TVars> extends Omit<VueApolloQueryDefinition<TInstance, TData>, "subscribeToMore"> {
    query: ((this: VueThisType<TInstance>) => DocumentNode) | DocumentNode;
    variables?: VueThisCallable<TInstance, TVars>;
    update?: (this: VueThisType<TInstance>, data: TData) => T;
    client?: string;
    subscribeToMore?: OnceOrMore<SubscribeToMoreOptions<TInstance, TData, TSubscriptionData, TSubscriptionVars>>;
}
