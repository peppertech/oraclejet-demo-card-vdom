export { OraclejetDemoCardVdom } from "./oraclejet-demo-card-vdom";
declare global {
    namespace preact.JSX {
        interface IntrinsicElements {
            'oraclejet-demo-card-vdom': any;
        }
    }
}
export { DemoCardVdomElement } from './oraclejet-demo-card-vdom';