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
import { handleError } from "@/utils/handleError";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { RootState } from "@/redux/store";

const HelperHeader = () => {
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const fullCode = useSelector((state: RootState)=>state.compilerSlice.fullCode);

  const shareCode = async () => {
    const urlstring = window.location.href;
    alert(urlstring);
  }

  const handleSaveCode = async () => {
    setSaveLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/compiler/save', {
        fullCode: fullCode
      });

      console.log(response.data);
      navigate(`/compiler/${response.data.url}`, {replace: true});
    } catch (error) {
      handleError(error);
    } finally {
      setSaveLoading(false);
    }
  };

  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => {
    return state.compilerSlice.currentLanguage;
  });

  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-2">
        <Button variant="success" onClick={handleSaveCode} disabled={saveLoading}>
          {saveLoading ? "Saving..." : "Save"}
        </Button>
        <Button variant="share" onClick={shareCode}>Share</Button>
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
