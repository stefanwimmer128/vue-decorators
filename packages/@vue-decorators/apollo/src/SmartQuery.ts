import VueThisCallable from "@vue-decorators/types/lib/VueThisCallable";
import {
    DocumentNode,
} from "graphql";
import {
    createDecorator,
    VueDecorator,
} from "vue-class-component";

import SmartQueryOptions from "./types/SmartQueryOptions";

export default function SmartQuery(query: DocumentNode): VueDecorator;
export default function SmartQuery<TInstance = any, T = any, TData = any, TVars = any, TSubscriptionData = TData, TSubscriptionVars = TVars>(options: VueThisCallable<TInstance, SmartQueryOptions<TInstance, T, TData, TVars, TSubscriptionData, TSubscriptionVars>>): VueDecorator;

export default function SmartQuery<TInstance = any, T = any, TData = any, TVars = any, TSubscriptionData = TData, TSubscriptionVars = TVars>(options: DocumentNode | VueThisCallable<TInstance, SmartQueryOptions<TInstance, T, TData, TVars, TSubscriptionData, TSubscriptionVars>>) {
    return createDecorator((cOptions: any, key) => {
        (cOptions.apollo || (cOptions.apollo = {}))[key] = options;
    });
}
