import { JetElement, JetSettableProperties, JetElementCustomEventStrict, JetSetPropertyType } from 'ojs/index';
import { GlobalProps } from 'ojs/ojvcomponent';
import 'ojs/oj-jsx-interfaces';
import { ExtendGlobalProps } from "ojs/ojvcomponent";
import { h, ComponentProps, ComponentType } from "preact";
import "css!./oraclejet-demo-card-vdom-styles.css";
import "ojs/ojavatar";
declare type Props = Readonly<{
    message?: string;
    avatar: string;
    name: string;
    email: string;
    workTitle: string;
    workNumber: number;
}>;
declare function OraclejetDemoCardVdomImpl({ name, email, workNumber, workTitle, avatar, }: Props): h.JSX.Element;
export declare const OraclejetDemoCardVdom: ComponentType<ExtendGlobalProps<ComponentProps<typeof OraclejetDemoCardVdomImpl>>>;
export {};
export interface DemoCardVdomElement extends JetElement<DemoCardVdomElementSettableProperties>, DemoCardVdomElementSettableProperties {
    addEventListener<T extends keyof DemoCardVdomElementEventMap>(type: T, listener: (this: HTMLElement, ev: DemoCardVdomElementEventMap[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof DemoCardVdomElementSettableProperties>(property: T): DemoCardVdomElement[T];
    getProperty(property: string): any;
    setProperty<T extends keyof DemoCardVdomElementSettableProperties>(property: T, value: DemoCardVdomElementSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, DemoCardVdomElementSettableProperties>): void;
    setProperties(properties: DemoCardVdomElementSettablePropertiesLenient): void;
}
export namespace DemoCardVdomElement {
    type avatarChanged = JetElementCustomEventStrict<DemoCardVdomElement['avatar']>;
    type emailChanged = JetElementCustomEventStrict<DemoCardVdomElement['email']>;
    type messageChanged = JetElementCustomEventStrict<DemoCardVdomElement['message']>;
    type nameChanged = JetElementCustomEventStrict<DemoCardVdomElement['name']>;
    type workNumberChanged = JetElementCustomEventStrict<DemoCardVdomElement['workNumber']>;
    type workTitleChanged = JetElementCustomEventStrict<DemoCardVdomElement['workTitle']>;
}
export interface DemoCardVdomElementEventMap extends HTMLElementEventMap {
    'avatarChanged': JetElementCustomEventStrict<DemoCardVdomElement['avatar']>;
    'emailChanged': JetElementCustomEventStrict<DemoCardVdomElement['email']>;
    'messageChanged': JetElementCustomEventStrict<DemoCardVdomElement['message']>;
    'nameChanged': JetElementCustomEventStrict<DemoCardVdomElement['name']>;
    'workNumberChanged': JetElementCustomEventStrict<DemoCardVdomElement['workNumber']>;
    'workTitleChanged': JetElementCustomEventStrict<DemoCardVdomElement['workTitle']>;
}
export interface DemoCardVdomElementSettableProperties extends JetSettableProperties {
    avatar: Props['avatar'];
    email: Props['email'];
    message?: Props['message'];
    name: Props['name'];
    workNumber: Props['workNumber'];
    workTitle: Props['workTitle'];
}
export interface DemoCardVdomElementSettablePropertiesLenient extends Partial<DemoCardVdomElementSettableProperties> {
    [key: string]: any;
}
export interface OraclejetDemoCardVdomIntrinsicProps extends Partial<Readonly<DemoCardVdomElementSettableProperties>>, GlobalProps, Pick<preact.JSX.HTMLAttributes, 'ref' | 'key'> {
    onavatarChanged?: (value: DemoCardVdomElementEventMap['avatarChanged']) => void;
    onemailChanged?: (value: DemoCardVdomElementEventMap['emailChanged']) => void;
    onmessageChanged?: (value: DemoCardVdomElementEventMap['messageChanged']) => void;
    onnameChanged?: (value: DemoCardVdomElementEventMap['nameChanged']) => void;
    onworkNumberChanged?: (value: DemoCardVdomElementEventMap['workNumberChanged']) => void;
    onworkTitleChanged?: (value: DemoCardVdomElementEventMap['workTitleChanged']) => void;
}
declare global {
    namespace preact.JSX {
        interface IntrinsicElements {
            'oraclejet-demo-card-vdom': OraclejetDemoCardVdomIntrinsicProps;
        }
    }
}
