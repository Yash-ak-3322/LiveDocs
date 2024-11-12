import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserTypeSelector = ({
  setUserType,
  onClickHandler,
}: UserTypeSelectorParams) => {
  const accessChangeHandler = (type: UserType) => {
    setUserType(type);
    onClickHandler && onClickHandler(type);
  };

  return (
    <div>
      <Select
        value="{userType}"
        onValueChange={(type: UserType) => accessChangeHandler(type)}
      >
        <SelectTrigger className="shad-select">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="border-name bg-dark-200">
          <SelectItem value="viewer" className="shad-select-item">
            Can View{" "}
          </SelectItem>
          <SelectItem value="editor" className="shad-select-item">
            Can Edit{" "}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UserTypeSelector;
