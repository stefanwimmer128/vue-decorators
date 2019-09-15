import VueThisCallable from "@vue-decorators/types/lib/VueThisCallable";
import {
    createDecorator,
    VueDecorator,
} from "vue-class-component";

import SubscribeToMoreOptions from "./types/SubscribeToMoreOptions";

export default function SubscribeToMore<TInstance = any, TData = any, TSubscriptionData = any, TSubscriptionVars = any>(apolloOptions: VueThisCallable<TInstance, SubscribeToMoreOptions<TInstance, TData, TSubscriptionData, TSubscriptionVars>>): VueDecorator {
    return createDecorator((options: any, key) => {
        if (!Array.isArray(options.apollo[key].subscribeToMore)) {
            if (options.apollo[key].subscribeToMore)
                options.apollo[key].subscribeToMore = [
                    options.apollo[key].subscribeToMore,
                ];
            else
                options.apollo[key].subscribeToMore = [];
        }
        
        options.apollo[key].subscribeToMore.push(apolloOptions);
    });
}
