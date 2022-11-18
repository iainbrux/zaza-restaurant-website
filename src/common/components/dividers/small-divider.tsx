import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SmallDividerProperties = {
  icon: IconProp;
};

export const SmallDivider = ({ icon = faStar }) => (
  <div
    className="flex flex-row w-full justify-center items-center my-4"
    data-testid="small-divider"
  >
    <div className="relative border-b-2 h-px w-24"></div>
    <FontAwesomeIcon
      className="mx-2"
      data-testid="small-divider-icon"
      icon={icon}
      size="lg"
    />
    <div className="relative border-b-2 h-px w-24"></div>
  </div>
);
