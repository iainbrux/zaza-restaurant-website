import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SmallDividerProperties = {
  dataTestId: string;
  color?: string;
  icon?: IconProp;
};

export const SmallDivider = ({
  dataTestId,
  color,
  icon = faStar,
}: SmallDividerProperties) => (
  <div
    className="flex flex-row w-full justify-center items-center my-4"
    data-testid={dataTestId}
  >
    <div
      className={`relative border-b-2 h-px w-24 ${color && `border-${color}`}`}
    ></div>
    <FontAwesomeIcon
      className={`mx-2 ${color && `text-${color}`}`}
      data-testid={`${dataTestId}-icon`}
      icon={icon}
      size="lg"
    />
    <div
      className={`relative border-b-2 h-px w-24 ${color && `border-${color}`}`}
    ></div>
  </div>
);
