import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateCurrentLanguage } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
// import { RootState } from "@/redux/store";

const HelperHeader = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => {
    return state.compilerSlice.currentLanguage;
  });

  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-2">
        <Button variant="success">Save</Button>
        <Button variant="share">Share</Button>
      </div>
      <div>
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) => {
            dispatch(updateCurrentLanguage(value));
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JAVASCRIPT</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default HelperHeader;
