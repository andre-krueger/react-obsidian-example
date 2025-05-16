import {graph, ObjectGraph, provides, singleton} from "react-obsidian";
import HttpClient from "../HttpClient.ts";

@singleton()
@graph()
export class NetworkGraph extends ObjectGraph {
    @provides()
    httpClient(): HttpClient {
        return new HttpClient();
    }
}
