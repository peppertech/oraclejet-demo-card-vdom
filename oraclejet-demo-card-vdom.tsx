import { ExtendGlobalProps, registerCustomElement } from "ojs/ojvcomponent";
import { h, ComponentProps, ComponentType } from "preact";
import componentStrings = require("ojL10n!./resources/nls/oraclejet-demo-card-vdom-strings");
import "css!./oraclejet-demo-card-vdom-styles.css";
import "ojs/ojavatar";

type Props = Readonly<{
  message?: string;
  avatar: string;
  name: string;
  email: string;
  workTitle: string;
  workNumber: number;
}>;

/**
 *
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "VDOM based Demo Card"
 * @ojmetadata description "An example of the demo card component, written using Preact and the VComponent API"
 *
 */
const flipCard = (event: any) => {
  if (
    event.type === "click" ||
    (event.type === "keyup" && event.keyCode === 13)
  ) {
    // It's better to look for View elements using a selector
    // instead of by DOM node order which isn't guaranteed.
    event.currentTarget.classList.toggle("oraclejet-demo-card-flipped");
  }
};
let initials: string = "";
let workFormatted: string = "";

function OraclejetDemoCardVdomImpl({
  name,
  email,
  workNumber,
  workTitle,
  avatar,
}: Props) {
  const formatPhoneNumber = (number: number) => {
    return number.toString().replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  };

  if (workNumber) {
    workFormatted = formatPhoneNumber(workNumber);
  }

  if (name) {
    let tempInitials: any = name.match(/\b\w/g);
    initials = (tempInitials.shift() + tempInitials.pop()).toUpperCase();
  }

  return (
    <div
      tabIndex={0}
      role="group"
      class="oraclejet-demo-card-flip-container"
      onClick={flipCard}
      onKeyPress={flipCard}
      aria-label={name + " Press Enter for more info."}>
      <div class="oraclejet-demo-card-front-side">
        <oj-avatar
          class="oraclejet-demo-card-avatar"
          role="img"
          size="lg"
          initials={initials}
          src={avatar}
          aria-label={"Avatar of " + name}></oj-avatar>
        <h2 class="oj-typography-heading-md">{name}</h2>
      </div>

      <div class="oraclejet-demo-card-back-side">
        <div class="oraclejet-demo-card-inner-back-side">
          <h2 class="oj-typography-heading-md">{name}</h2>
          <h5 class="oj-typography-subheading-sm">{workTitle}</h5>
          {workNumber && (
            <>
              <h5 class="oj-typography-heading-xs">Work</h5>
              <span class="oraclejet-demo-card-text">{workFormatted}</span>
            </>
          )}
          {email && (
            <>
              <h5 class="oj-typography-heading-xs">Email</h5>
              <span class="oraclejet-demo-card-text">{email}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export const OraclejetDemoCardVdom: ComponentType<
  ExtendGlobalProps<ComponentProps<typeof OraclejetDemoCardVdomImpl>>
> = registerCustomElement(
  "oraclejet-demo-card-vdom",
  OraclejetDemoCardVdomImpl
);
