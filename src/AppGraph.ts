import {graph, ObjectGraph, provides, singleton} from "react-obsidian";
import {Module1Graph} from "src/libraries/module1/di/Module1Graph.ts";
import {Module2Graph} from "src/libraries/module2/di/Module2Graph.ts";
import HttpClient from "network/HttpClient.ts";
import type Module1Dependency from "module1/Module1Dependency.ts";

class AppDependency {
}

@singleton()
@graph({subgraphs: [Module1Graph, Module2Graph]})
export class AppGraph extends ObjectGraph {
    @provides()
    appDependency(
        httpClient: HttpClient,
        module1Dependency: Module1Dependency,
    ): AppDependency {
        return new AppDependency();
    }
}
