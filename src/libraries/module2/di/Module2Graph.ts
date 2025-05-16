import {graph, ObjectGraph, provides, singleton} from "react-obsidian";
import type Module2Dependency from "../Module2Dependency.ts";
import type HttpClient from "network/HttpClient.ts";
import type Module1Dependency from "module1/Module1Dependency.ts";
import {NetworkGraph} from "network/di/NetworkGraph.ts";
import {Module1Graph} from "module1/di/Module1Graph.ts";

@singleton()
@graph({subgraphs: [NetworkGraph, Module1Graph]})
export class Module2Graph extends ObjectGraph {
    @provides()
    module2Dependency(
        httpClient: HttpClient,
        module1Dependency: Module1Dependency,
    ): Module2Dependency {
        return new Module2Dependency();
    }
}
