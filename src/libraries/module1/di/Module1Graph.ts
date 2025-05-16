import {graph, ObjectGraph, provides, singleton} from "react-obsidian";
import Module1Dependency from "../Module1Dependency.ts";
import type HttpClient from "network/HttpClient.ts";
import {NetworkGraph} from "network/di/NetworkGraph.ts";

@singleton()
@graph({subgraphs: [NetworkGraph]})
export class Module1Graph extends ObjectGraph {
    @provides()
    module1Dependency(httpClient: HttpClient): Module1Dependency {
        return new Module1Dependency();
    }
}
