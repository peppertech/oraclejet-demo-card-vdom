define(["require", "exports", "preact/jsx-runtime", "ojs/ojvcomponent", "css!./oraclejet-demo-card-vdom-styles.css", "ojs/ojavatar"], function (require, exports, jsx_runtime_1, ojvcomponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OraclejetDemoCardVdom = void 0;
    const flipCard = (event) => {
        if (event.type === "click" ||
            (event.type === "keypress" && event.keyCode === 13)) {
            event.currentTarget.classList.toggle("oraclejet-demo-card-flipped");
        }
    };
    let initials = "";
    let workFormatted = "";
    function OraclejetDemoCardVdomImpl({ name, email, workNumber, workTitle, avatar, }) {
        const formatPhoneNumber = (number) => {
            return number.toString().replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        };
        if (workNumber) {
            workFormatted = formatPhoneNumber(workNumber);
        }
        if (name) {
            let tempInitials = name.match(/\b\w/g);
            initials = (tempInitials.shift() + tempInitials.pop()).toUpperCase();
        }
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ tabIndex: 0, role: "group", class: "oraclejet-demo-card-flip-container", onClick: flipCard, onKeyPress: flipCard, "aria-label": name + " Press Enter for more info." }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ class: "oraclejet-demo-card-front-side" }, { children: [(0, jsx_runtime_1.jsx)("oj-avatar", { class: "oraclejet-demo-card-avatar", role: "img", size: "lg", initials: initials, src: avatar, "aria-label": "Avatar of " + name }), (0, jsx_runtime_1.jsx)("h2", Object.assign({ class: "oj-typography-heading-md" }, { children: name }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ class: "oraclejet-demo-card-back-side" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ class: "oraclejet-demo-card-inner-back-side" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ class: "oj-typography-heading-md" }, { children: name })), (0, jsx_runtime_1.jsx)("h5", Object.assign({ class: "oj-typography-subheading-sm" }, { children: workTitle })), workNumber && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h5", Object.assign({ class: "oj-typography-heading-xs" }, { children: "Work" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ class: "oraclejet-demo-card-text" }, { children: workFormatted }))] })), email && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h5", Object.assign({ class: "oj-typography-heading-xs" }, { children: "Email" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ class: "oraclejet-demo-card-text" }, { children: email }))] }))] })) }))] })));
    }
    exports.OraclejetDemoCardVdom = (0, ojvcomponent_1.registerCustomElement)("oraclejet-demo-card-vdom", OraclejetDemoCardVdomImpl, "OraclejetDemoCardVdom", { "properties": { "message": { "type": "string" }, "avatar": { "type": "string" }, "name": { "type": "string" }, "email": { "type": "string" }, "workTitle": { "type": "string" }, "workNumber": { "type": "number" } } });
});
