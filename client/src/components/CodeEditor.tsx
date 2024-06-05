import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateCodeValue } from "@/redux/slices/compilerSlice";

const CodeEditor = () => {
  const currentLanguage = useSelector((state: RootState) => {
    return state.compilerSlice.currentLanguage;
  });

  const fullCode = useSelector((state: RootState) => state.compilerSlice.fullCode);

  const dispatch = useDispatch();

  const onChange = React.useCallback((val: any) => {
    dispatch(updateCodeValue(val))
  }, []);
  return (
    <CodeMirror
      theme={sublime}
      value={fullCode[currentLanguage]}
      height="calc(100vh - 60px - 50px)"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
