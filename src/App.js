import './App.css';
import React, { useState } from 'react';
import { Logger } from 'logging-library';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';

// const file = 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg';
// const type = 'jpeg';

const file =
  'https://drive.google.com/file/d/1Ialln674RTXgJE6HNkjVugEE0scUg4Si/view?usp=drivesdk';
const type = 'pdf';

const App = () => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(!view);
  };

  const onError = (e) => {
    Logger.logError(e, 'error in file-viewer');
  };

  return (
    <div className="App">
      <button onClick={handleView}>View</button>
      {view && (
        <FileViewer
          fileType={type}
          filePath={file}
          errorComponent={CustomErrorComponent}
          onError={onError}
        />
      )}
    </div>
  );
};

export default App;
