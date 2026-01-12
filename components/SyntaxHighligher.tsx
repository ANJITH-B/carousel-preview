import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

type Tab = {
  tabName: string;
  code: string;
};

interface Props {
  tabs: Tab[];
  language?: string;
  showNumber?: boolean;
}

const CodeBlock = ({ tabs, language = "jsx", showNumber = true }: Props) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]?.tabName || "");

  const activeCode = tabs.find((t) => t.tabName === activeTab)?.code || "";

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg w-full overflow-hidden relative">
      {tabs.length > 1 && (
        <div className="flex gap- bg-zinc-900 ">
          {tabs.map((tab) => (
            <button
              key={tab.tabName}
              onClick={() => setActiveTab(tab.tabName)}
              className={`px-6 py-2 rounded-t-lg text-sm font-medium transition-colors ${activeTab === tab.tabName
                ? "bg-[#282a36] text-white border-b-2 border-blue-500"
                : "bg-zinc-800/60 text-gray-400 hover:bg-zinc-800"
                }`}
            >
              {tab.tabName}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={handleCopy}
        className={`absolute ${tabs.length > 1 ? "top-1.5 right-2" : "top-2.5 right-3"} bg-gray-700 text-white px-2 py-1 rounded text-xs opacity-100 transition-opacity z-10 cursor-pointer`}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <div className="relative ">
        <SyntaxHighlighter
          language={language}
          style={dracula}
          showLineNumbers={showNumber}
          customStyle={{ margin: 0, borderTopLeftRadius: 0, fontSize: 13 }}
        >
          {activeCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
