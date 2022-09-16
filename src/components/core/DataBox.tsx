import { useState } from 'react';
import { truncateTextInMiddle } from 'src/utils/textFormatting';
import {
  DocumentDuplicateIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';
const DataBox: any = ({ title, data }) => {
  const copyAddressToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(data);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const [copied, setCopied] = useState(false);

  return (
    <div className="data-box">
      <div className="data-box-info">
        <div>{title}</div>
        <div className="data-box-value">{truncateTextInMiddle(data, 5)}</div>
      </div>
      <div
        className="data-box-info data-box-copy"
        onClick={copyAddressToClipboard}
      >
        {copied ? <ClipboardDocumentCheckIcon /> : <DocumentDuplicateIcon />}
      </div>
    </div>
  );
};

export default DataBox;
