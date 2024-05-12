import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { loadLanguage } from '@uiw/codemirror-extensions-langs';

const CodeEditor = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      theme={sublime}
      value={value}
      height="100vh"
      extensions={[loadLanguage('html')!]}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
