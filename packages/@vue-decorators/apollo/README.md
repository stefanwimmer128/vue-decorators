# @vue-decorators/apollo

Use Decorators to write Apollo Queries.

``` ts
import gql from "graphql-tag";
import Vue from "vue";
import {
    Component,
    Prop,
    SmartQuery,
    SubscribeToMore,
} from "@vue-decorators/all";

@Component
class MyComponent extends Vue {
    @SmartQuery(gql`query {
        test
    }`)
    readonly test: number = 0;
    
    @Prop({ type: String, require: true })
    readonly testInput!: string;
    
    //          Allows this to point MyComponent
    //          |            Defines type of retured data (Default)
    //          |            |                                Defines type of query variables
    @SmartQuery<MyComponent, { moreTests: { test: string } }, { testInput: string }>({
        query: qql`query($testInput: String) {
            moreTest(input: $testInput) {
                test
            }
        }`,
        variables() {
            return {
                testInput: this.testInput;
            };
        },
        update(data) {
            return data.moreTest.test;
        },
    })
    @SubscribeToMore<MyComponent, { moreTests: { test: string } }, { newTest: string }, { someArg: number }>({
        document: gql`subscription($someArg: Int) {
            newTest(someArg: $someArg)
        }`,
        variables: {
            someArg: 0,
        },
        updateQuery(prevResult, options) {
            return {
                moreTest: {
                    test: options.subscriptionData.data.test,
                },
            };
        },
    })
    readonly moreTest: string = "";
}
```

The Type arguments have sensible defaults and are not necessary.

The `SubscribeToMore` decorator populates the queries `subscribeToMore` field.
